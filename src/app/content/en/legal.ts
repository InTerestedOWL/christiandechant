import { SiteContent } from "../../interfaces";
import { contactEmail } from "../shared";

const legalUpdated = 'Last updated: September 2026';

export const legalContent: Pick<SiteContent, 'imprint' | 'privacy'> = {
  imprint: {
    metaTitle: 'Imprint | Christian Dechant',
    metaDescription: 'Legal notice and provider identification of Christian Dechant in accordance with § 5 DDG.',
    eyebrow: 'Legal',
    title: 'Imprint',
    intro: 'This English version is provided for convenience. The German version is legally binding.',
    updated: legalUpdated,
    sections: [
      {
        heading: 'Information according to § 5 DDG',
        paragraphs: [ 'Christian Dechant\nLangenbieberer Str. 14\n36145 Hofbieber\nGermany' ],
      },
      {
        heading: 'Contact',
        paragraphs: [ `E-mail: ${ contactEmail }` ],
      },
      {
        heading: 'VAT',
        paragraphs: [ 'Small business within the meaning of § 19 UStG (German VAT Act). No VAT is charged or shown.' ],
      },
      {
        heading: 'Responsible for content according to § 18 (2) MStV',
        paragraphs: [ 'Christian Dechant\nLangenbieberer Str. 14\n36145 Hofbieber' ],
      },
      {
        heading: 'Consumer dispute resolution',
        paragraphs: [ 'I am neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.' ],
      },
      {
        heading: 'Liability for content',
        paragraphs: [
          'The contents of these pages were created with the utmost care. However, I cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, I am responsible for my own content on these pages under general law in accordance with § 7 (1) DDG.',
          'According to §§ 8 to 10 DDG, however, I am not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. Liability in this respect is only possible from the time of knowledge of a specific infringement. As soon as I become aware of such infringements, I will remove this content immediately.',
        ],
      },
      {
        heading: 'Liability for links',
        paragraphs: [
          'This website contains links to external third-party websites over whose content I have no influence. Therefore, I cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.',
          'Permanent monitoring of the content of linked pages is not reasonable without concrete evidence of an infringement. As soon as I become aware of legal violations, I will remove such links immediately.',
        ],
      },
      {
        heading: 'Copyright',
        paragraphs: [
          'The content and works created by the site operator on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.',
          'Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Should you nevertheless become aware of a copyright infringement, please let me know. As soon as I become aware of legal violations, I will remove such content immediately.',
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Privacy Policy | Christian Dechant',
    metaDescription: 'Information on the processing of personal data on christiandechant.de in accordance with the GDPR.',
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    intro: 'Protecting your personal data is important to me. In accordance with Art. 13 GDPR, I inform you below which data is processed when you visit this website, for what purpose and on which legal basis. This English version is provided for convenience; the German version is legally binding.',
    updated: legalUpdated,
    sections: [
      {
        heading: '1. Controller',
        paragraphs: [
          'The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:',
          `Christian Dechant\nLangenbieberer Str. 14\n36145 Hofbieber\nGermany\nE-mail: ${ contactEmail }`,
          'No data protection officer has been appointed, as there is no legal obligation to do so.',
        ],
      },
      {
        heading: '2. Legal bases',
        paragraphs: [ 'I process personal data on the following legal bases:' ],
        list: [
          'Art. 6 (1) (a) GDPR – consent',
          'Art. 6 (1) (b) GDPR – performance of a contract and pre-contractual measures',
          'Art. 6 (1) (c) GDPR – compliance with a legal obligation',
          'Art. 6 (1) (f) GDPR – legitimate interests',
          '§ 25 (1) and (2) TDDDG – storing and accessing information on your device',
        ],
      },
      {
        heading: '3. Hosting',
        paragraphs: [
          'This website is hosted by Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany. When you access the website, the server log files listed below are processed on the host’s servers.',
          'The host is used in the interest of providing this website securely, quickly and efficiently (Art. 6 (1) (f) GDPR). A data processing agreement in accordance with Art. 28 GDPR has been concluded with the host.',
        ],
      },
      {
        heading: '4. Server log files',
        paragraphs: [ 'Each time this website is accessed, the web server automatically records information transmitted by your browser:' ],
        list: [
          'IP address of the requesting device',
          'date and time of access',
          'requested page or file and HTTP status code',
          'amount of data transferred',
          'referrer URL (previously visited page)',
          'browser type, browser version and operating system (user agent)',
        ],
        subsections: [
          {
            heading: 'Purpose, legal basis and storage period',
            paragraphs: [
              'This processing is necessary to deliver the website, ensure its stability and security and prevent misuse. The legal basis is Art. 6 (1) (f) GDPR. The data is not merged with other data sources. The log files are deleted as soon as they are no longer required for these purposes.',
            ],
          },
        ],
      },
      {
        heading: '5. Contact form and e-mail',
        paragraphs: [
          'If you send me a request via the contact form or by e-mail, I process the data you provide (name, e-mail address, selected project area and your message) in order to handle your request and reply to you. After submitting the form, you receive an automatic confirmation with a copy of your details at the e-mail address you entered.',
          'The legal basis is Art. 6 (1) (b) GDPR if your request relates to the initiation or performance of a contract, and otherwise Art. 6 (1) (f) GDPR (legitimate interest in answering requests).',
          'The e-mails are sent via the SMTP server of my e-mail provider, which processes the data as a processor. The data is not otherwise passed on to third parties.',
          'Your data will be deleted once your request has been fully processed, unless statutory retention obligations (e.g. for business letters under § 257 HGB or § 147 AO) prevent this.',
        ],
      },
      {
        heading: '6. Cookies and consent management',
        paragraphs: [
          'This website does not use any tracking or advertising cookies and currently does not embed any optional third-party services. On your first visit, a banner asks for your consent to optional services, so that any new service is only loaded after you agree.',
          'Your choice (granted categories, version and time) is stored exclusively in your browser’s local storage (localStorage, key “cd-consent”) and is not transmitted to my server or third parties. You will be asked again after 12 months.',
          'This storage is strictly necessary to respect your decision (§ 25 (2) no. 2 TDDDG); the legal basis for the processing is Art. 6 (1) (c) GDPR in conjunction with Art. 7 (1) GDPR. You can change or withdraw your choice at any time via the “Cookie settings” link in the footer, or remove it by deleting the site data in your browser.',
        ],
      },
      {
        heading: '7. Fonts and icons',
        paragraphs: [
          'The fonts (Geist, JetBrains Mono) and icons (Material Symbols) used on this website are served locally from my own server. No connection to servers of Google or other third parties is established.',
        ],
      },
      {
        heading: '8. Links to external websites and social networks',
        paragraphs: [
          'This website contains simple links to external services, e.g. LinkedIn, XING, GitHub, wayventure.de and jagdtausch.de. These are not embedded plugins: merely visiting this website does not transfer any data to these providers. Only when you click a link are you taken to the respective provider’s website, where its privacy policy applies.',
        ],
      },
      {
        heading: '9. SSL/TLS encryption',
        paragraphs: [
          'For security reasons and to protect the transmission of confidential content, such as requests sent via the contact form, this website uses TLS encryption. You can recognize an encrypted connection by “https://” in your browser’s address bar.',
        ],
      },
      {
        heading: '10. Your rights',
        paragraphs: [ 'You have the following rights regarding your personal data:' ],
        list: [
          'access to the processed data (Art. 15 GDPR)',
          'rectification of inaccurate data (Art. 16 GDPR)',
          'erasure of your data (Art. 17 GDPR)',
          'restriction of processing (Art. 18 GDPR)',
          'data portability (Art. 20 GDPR)',
          'withdrawal of consent with effect for the future (Art. 7 (3) GDPR)',
        ],
        subsections: [
          {
            heading: 'Right to object (Art. 21 GDPR)',
            paragraphs: [
              'Where I process your data on the basis of legitimate interests (Art. 6 (1) (f) GDPR), you have the right to object to this processing at any time on grounds relating to your particular situation.',
            ],
          },
          {
            heading: 'Right to lodge a complaint with a supervisory authority',
            paragraphs: [
              'You have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The competent authority is: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden, Germany, https://datenschutz.hessen.de',
            ],
          },
          {
            heading: 'Exercising your rights',
            paragraphs: [ `An informal message to ${ contactEmail } is sufficient to exercise your rights.` ],
          },
        ],
      },
      {
        heading: '11. Obligation to provide data and automated decision-making',
        paragraphs: [
          'You are under no legal or contractual obligation to provide me with personal data. Without a name and e-mail address, however, I cannot answer a request sent via the contact form. There is no automated decision-making, including profiling (Art. 22 GDPR).',
        ],
      },
      {
        heading: '12. Changes to this privacy policy',
        paragraphs: [
          'I update this privacy policy whenever changes to the website or the legal situation make it necessary. The version published here applies.',
        ],
      },
    ],
  },
};
