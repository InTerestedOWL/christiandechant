'use server';
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
import { createRateLimiter } from "./rateLimit";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

const recipientCopy = {
  de: {
    subject: 'christiandechant.de: Ihre Anfrage ist eingegangen',
    title: 'Ihre Anfrage ist eingegangen',
    intro: 'Vielen Dank für Ihre Nachricht! Ich habe Ihre Anfrage erhalten und melde mich so schnell wie möglich bei Ihnen. Viele Grüße, Christian',
    yourMessage: 'Ihre Nachricht:',
    message: 'Nachricht:',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    rights: 'Alle Rechte vorbehalten.',
    automated: 'Dies ist eine automatisch erzeugte E-Mail. Bei dringenden Anliegen kontaktieren Sie mich bitte direkt.',
  },
  en: {
    subject: 'christiandechant.de: Contact Form Submission Received!',
    title: 'Contact Form Submission Received',
    intro: 'Thank you for reaching out! I have received your message, and I will get back to you as soon as possible. Cheers, Christian',
    yourMessage: 'Your Message:',
    message: 'Message:',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    rights: 'All rights reserved.',
    automated: 'This is an automated email. For urgent inquiries, please contact me directly.',
  },
};

type RecipientCopy = typeof recipientCopy.de;

/** User input ends up in HTML mails, so it must never be interpreted as markup. */
function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\n/g, '<br>');
}

const MAX_BODY_BYTES = 16_000;
const MIN_FILL_TIME_MS = 3_000;
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

// Every accepted request sends two mails, so both limits also cap outgoing mail volume.
const perClientLimiter = createRateLimiter({ limit: 3, windowMs: 10 * 60_000 });
const globalLimiter = createRateLimiter({ limit: 30, windowMs: 60 * 60_000 });

/**
 * nginx sets X-Real-IP from the TCP connection, so it cannot be forged by the client.
 * X-Forwarded-For is deliberately ignored because clients can send it themselves.
 */
function clientKey(req: Request) {
  return req.headers.get('x-real-ip')?.trim() || 'unknown';
}

function tooManyRequests(retryAfterMs: number) {
  return NextResponse.json(
    { message: 'Too many requests' },
    { status: 429, headers: { 'Retry-After': String(Math.ceil(retryAfterMs / 1000)) } },
  );
}

function isValidText(value: unknown, maxLength: number): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

export async function POST(req: Request) {
  if ( Number(req.headers.get('content-length') ?? 0) > MAX_BODY_BYTES ) {
    return NextResponse.json({ message: 'Payload too large' }, { status: 413 });
  }

  const perClient = perClientLimiter.hit(clientKey(req));
  if ( !perClient.allowed ) {
    return tooManyRequests(perClient.retryAfterMs);
  }
  const global = globalLimiter.hit('global');
  if ( !global.allowed ) {
    return tooManyRequests(global.retryAfterMs);
  }

  let body: Record<string, unknown>;
  try {
    const raw = await req.text();
    if ( raw.length > MAX_BODY_BYTES ) {
      return NextResponse.json({ message: 'Payload too large' }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  // Bots fill the hidden honeypot field or submit instantly: pretend success, send nothing.
  const startedAt = Number(body.startedAt);
  if ( body.website || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_TIME_MS ) {
    return NextResponse.json({ message: 'Mail sent successfully' }, { status: 200 });
  }

  if ( !isValidText(body.name, 100) || !isValidText(body.email, 254) || !isValidText(body.text, 5_000)
    || !EMAIL_PATTERN.test(body.email.trim()) ) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  const recipient = body.email.trim();
  const name = escapeHtml(body.name);
  const email = escapeHtml(recipient);
  const text = escapeHtml(body.text);
  const lang = body.lang === 'de' ? 'de' : 'en';
  const copy = recipientCopy[lang];

  try {
    await transporter.verify();
    await transporter.sendMail({
      from: `"Christian Dechant" <freelancer@christiandechant.de>`,
      to: SITE_MAIL_RECEIVER,
      subject: 'New Contact Request',
      html: buildPrivateMail(text, email, name),
    });

    await transporter.sendMail({
      from: `"Christian Dechant" <freelancer@christiandechant.de>`,
      to: recipient,
      subject: copy.subject,
      html: buildRecipientMail(text, email, name, lang, copy),
    });

    return NextResponse.json({ message: 'Mail sent successfully' }, { status: 200 });
  } catch ( error ) {
    // Log details server-side only; SMTP errors can contain server and account information.
    console.error('Mail sending error:', error);
    return NextResponse.json({ message: 'Mail sending failed' }, { status: 500 });
  }
}

function buildPrivateMail(text: string, email: string, name: string) {
  return `
  <!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New contact request</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    .email-container {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    h2 {
      color: #555;
    }
    .email-content {
      margin-bottom: 20px;
    }
    .email-content p {
      margin: 5px 0;
    }
    .footer {
      font-size: 12px;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="email-container">
    <h2>New contact request</h2>
    <div class="email-content">
      <p><strong>Name:</strong> ${ name }</p>
      <p><strong>E-Mail:</strong> ${ email }</p>
      <p><strong>Message:</strong></p>
      <p>${ text }</p>
    </div>
    <div class="footer">
      <p>This is an automatic notification. Please do not reply to this mail.</p>
    </div>
  </div>
</body>
</html>
  `
}

function buildRecipientMail(text: string, email: string, name: string, lang: string, copy: RecipientCopy) {
  return `
  <!DOCTYPE html>
<html lang="${ lang }">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ copy.title }</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    .email-container {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    h2 {
      color: #555;
    }
    .email-content {
      margin-bottom: 20px;
    }
    .email-content p {
      margin: 5px 0;
    }
    .footer {
      font-size: 12px;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="email-container">
    <h2>${ copy.title }</h2>
    <div class="email-content">
      <p>${ copy.intro }</p>
      <p><strong>${ copy.yourMessage }</strong></p>
      <p><strong>Name:</strong> ${ name }</p>
      <p><strong>E-Mail:</strong> ${ email }</p>
      <p><strong>${ copy.message }</strong></p>
      <p>${ text }</p>
    </div>
    <div style="background-color: #f4f4f4; padding: 20px; text-align: center; font-family: Arial, sans-serif; font-size: 14px; color: #555;">
    <p style="margin: 0; padding: 10px 0;">
        &copy; ${ new Date().getFullYear() } Christian Dechant. ${ copy.rights }
    </p>
    <p style="margin: 0; padding: 10px 0;">
        <a href="https://christiandechant.de/${ lang }/imprint" style="text-decoration: none; color: #4f46e5; margin-right: 15px;">${ copy.imprint }</a>
        <a href="https://christiandechant.de/${ lang }/privacy-policy" style="text-decoration: none; color: #4f46e5;">${ copy.privacy }</a>
    </p>
    <p style="margin: 0; padding: 10px 0; font-size: 12px; color: #888;">
        ${ copy.automated }
    </p>
    </div>
  </div>
</body>
</html>
  `
}