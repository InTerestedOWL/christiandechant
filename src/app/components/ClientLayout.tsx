"use client";

import React from "react";
import { useStatus } from "../context";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import CookieBanner from "@/app/components/cookieBanner";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";

export default function ClientLayout({ children, locale, header, footer, cookieBanner }: Readonly<{
  children: React.ReactNode,
  locale: Locale,
  header: SiteContent['header'],
  footer: SiteContent['footer'],
  cookieBanner: SiteContent['cookieBanner'],
}>) {
  const { status } = useStatus();

  return (
    <body
      className={ `bg-white font-sans text-slate-800 antialiased selection:bg-brand-100 selection:text-brand-700 ${
        status ? "overflow-hidden" : ""
      }` }
    >
    <Header locale={ locale } content={ header }/>
    <div className="pt-20">{ children }</div>
    <Footer locale={ locale } content={ footer }/>
    <CookieBanner locale={ locale } content={ cookieBanner }/>
    </body>
  );
}
