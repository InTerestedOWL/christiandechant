"use client";

import Image from "next/image";
import Link from "next/link";
import { useStatus } from "../context";
import { INavLink, SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import LanguageSwitch from "./shared/languageSwitch";
import Icon from "./shared/materialIcon";

const mobileHover: Record<NonNullable<INavLink['highlight']> | 'brand', string> = {
  brand: 'hover:bg-brand-50 hover:text-brand-700',
  amber: 'hover:bg-amber-50 hover:text-amber-700',
  rose: 'hover:bg-rose-50 hover:text-rose-700',
};

export default function Header({ locale, content }: { locale: Locale, content: SiteContent['header'] }) {
  const { status: isDrawerOpen, setStatus: setDrawerOpen } = useStatus();
  const home = `/${ locale }`;

  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link className="group flex items-center gap-3" href={ home }>
            <div
              className="h-10 w-10 overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm transition-transform group-hover:scale-105">
              <Image src="/Interestedowl.png" width={ 80 } height={ 80 } className="h-full w-full object-cover"
                     alt="Christian Dechant Owl Logo" priority/>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className="text-base font-bold tracking-tight text-slate-900 transition-colors group-hover:text-brand-600">
                  Christian Dechant
                </span>
                <span
                  className="rounded-full border border-brand-200/60 bg-brand-50 px-2 py-0.5 font-mono text-[10px] font-medium text-brand-700">
                  { content.badge }
                </span>
              </div>
              <span className="text-xs font-normal text-slate-500">{ content.tagline }</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 lg:flex">
            { content.nav.map((link) => (
              <Link key={ link.href } href={ `${ home }${ link.href }` }
                    className={ `rounded-lg px-3.5 py-2 transition-colors hover:bg-slate-50 hover:text-brand-600 ${ link.highlight === 'amber' ? 'flex items-center gap-1.5' : '' }` }>
                { link.highlight === 'amber' &&
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500"></span> }
                { link.title }
              </Link>
            )) }
          </nav>

          <div className="flex items-center gap-3">
            <Link href={ `${ home }#contact` }
                  className="hidden items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/20 sm:inline-flex">
              <span>{ content.cta }</span>
              <Icon name="arrow_forward" className="text-[16px]"/>
            </Link>
            <button aria-label={ content.openMenu } onClick={ () => setDrawerOpen(true) }
                    className="rounded-xl border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden">
              <Icon name="menu" className="text-2xl"/>
            </button>
          </div>
        </div>
      </header>

      <div
        className={ `fixed inset-0 z-50 flex transform justify-end transition-transform duration-300 ease-in-out lg:hidden ${ isDrawerOpen ? 'translate-x-0' : 'translate-x-full' }` }
        inert={ !isDrawerOpen }>
        <div onClick={ () => setDrawerOpen(false) } className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm"></div>
        <aside
          className="relative z-10 flex h-full w-4/5 max-w-sm flex-col justify-between overflow-y-auto border-l border-slate-200 bg-white p-6 shadow-2xl">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <Image src="/Interestedowl.png" width={ 64 } height={ 64 }
                       className="h-8 w-8 rounded-lg border border-slate-100" alt="Logo"/>
                <span className="font-bold text-slate-900">{ content.drawerTitle }</span>
              </div>
              <button aria-label={ content.closeMenu } onClick={ () => setDrawerOpen(false) }
                      className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                <Icon name="close" className="text-xl"/>
              </button>
            </div>
            <nav className="flex flex-col gap-1.5 font-medium text-slate-700">
              { content.nav.map((link) => (
                <Link key={ link.href } href={ `${ home }${ link.href }` } onClick={ () => setDrawerOpen(false) }
                      className={ `rounded-xl px-3.5 py-2.5 transition-colors ${ mobileHover[link.highlight ?? 'brand'] } ${ link.badge ? 'flex items-center justify-between' : '' }` }>
                  { link.badge ? <span>{ link.mobileTitle }</span> : link.mobileTitle }
                  { link.badge && (
                    <span
                      className="rounded-full bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-800">
                      { link.badge }
                    </span>
                  ) }
                </Link>
              )) }
            </nav>
            <LanguageSwitch locale={ locale } label={ content.languageLabel } className="flex w-fit"/>
          </div>
          <div className="border-t border-slate-100 pt-6">
            <Link href={ `${ home }#contact` } onClick={ () => setDrawerOpen(false) }
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-medium text-white shadow-md">
              <span>{ content.mobileCta }</span>
              <Icon name="chat" className="text-[16px]"/>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
