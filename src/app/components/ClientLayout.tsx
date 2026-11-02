"use client";

import React from "react";
import { useStatus } from "../context";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import CookieBanner from "@/app/components/cookieBanner";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";

export default function ClientLayout({ children, locale, header, footer, cookieBanner, a11y }: Readonly<{
  children: React.ReactNode,
  locale: Locale,
  header: SiteContent['header'],
  footer: SiteContent['footer'],
  cookieBanner: SiteContent['cookieBanner'],
  a11y: SiteContent['a11y'],
}>) {
  const { status } = useStatus();

  return (
    <body
      className={ `bg-white font-sans text-slate-800 antialiased selection:bg-brand-100 selection:text-brand-700 ${
        status ? "overflow-hidden" : ""
      }` }
    >
    <a href="#main-content"
       className="sr-only rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]">
      { a11y.skipToContent }
    </a>
    <Header locale={ locale } content={ header }/>
    <div id="main-content" tabIndex={ -1 } className="pt-20 outline-none">{ children }</div>
    <Footer locale={ locale } content={ footer }/>
    <CookieBanner locale={ locale } content={ cookieBanner }/>
    </body>
  );
}
