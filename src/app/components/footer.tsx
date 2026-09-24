"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { socials, wayVentureUrl } from "../content/shared";
import { openCookieSettings } from "../consent";
import Icon from "./shared/materialIcon";
import LanguageSwitch from "./shared/languageSwitch";

export default function Footer({ locale, content }: { locale: Locale, content: SiteContent['footer'] }) {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-slate-100 pb-8 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/Interestedowl.png" width={ 64 } height={ 64 }
                   className="h-8 w-8 rounded-lg border border-slate-100" alt="Logo"/>
            <div>
              <span className="block text-sm font-bold text-slate-900">Christian Dechant</span>
              <span className="text-xs text-slate-500">{ content.tagline }</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-500">
            { socials.map((social) => (
              <a key={ social.url } href={ social.url } target="_blank" rel="noreferrer"
                 className="flex items-center gap-1 transition-colors hover:text-brand-600">
                <Icon name={ social.icon } className="text-lg"/> { social.name }
              </a>
            )) }
            <a href={ wayVentureUrl } target="_blank" rel="noreferrer"
               className="flex items-center gap-1 transition-colors hover:text-amber-600">
              <Icon name="explore" className="text-lg"/> WayVenture
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-slate-500">
            <Link className="transition-colors hover:text-slate-900" href={ `/${ locale }/imprint` }>
              { content.imprint }
            </Link>
            <span>•</span>
            <Link className="transition-colors hover:text-slate-900" href={ `/${ locale }/privacy-policy` }>
              { content.privacy }
            </Link>
            <span>•</span>
            <button type="button" onClick={ openCookieSettings }
                    className="cursor-pointer transition-colors hover:text-slate-900">
              { content.cookieSettings }
            </button>
            <LanguageSwitch locale={ locale } label={ content.languageLabel } className="flex"/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-slate-400 sm:flex-row">
          <span>© { new Date().getFullYear() } Christian Dechant. { content.rights }</span>
          <span className="flex items-center gap-1.5 font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> { content.status }
          </span>
        </div>
      </div>
    </footer>
  );
}
