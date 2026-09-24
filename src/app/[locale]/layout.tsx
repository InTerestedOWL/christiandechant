import { Geist, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import React from "react";
import { notFound } from "next/navigation";
import { Metadata, Viewport } from "next";
import { StatusProvider } from "../context";
import ClientLayout from "@/app/components/ClientLayout";
import { getContent } from "@/app/content";
import { siteUrl } from "@/app/content/shared";
import { isLocale, Locale, locales } from "@/app/i18n/config";
import { alternates } from "@/app/i18n/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: [ "latin" ],
});

// Self-hosted icon subset (regenerate with `npm run icons`), so no request goes to Google Fonts (GDPR).
const materialSymbols = localFont({
  src: "../fonts/material-symbols-subset.woff2",
  variable: "--font-material-symbols",
  weight: "400",
  display: "block",
  adjustFontFallback: false,
});

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const { meta } = getContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: alternates(locale, ''),
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/Interestedowl.png", type: "image/png" },
      ],
      apple: [
        { url: "/Interestedowl.png" },
      ],
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${ siteUrl }/${ locale }`,
      siteName: meta.siteName,
      locale: meta.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    manifest: "/manifest.json",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export default async function RootLayout({ children, params }: Props & { children: React.ReactNode }) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale as Locale);

  return (
    <html lang={ locale }
          className={ `light scroll-smooth ${ geistSans.variable } ${ jetBrainsMono.variable } ${ materialSymbols.variable }` }>
    <StatusProvider>
      <ClientLayout locale={ locale as Locale } header={ content.header } footer={ content.footer }
                   cookieBanner={ content.cookieBanner }>
        { children }
      </ClientLayout>
    </StatusProvider>
    </html>
  );
}
