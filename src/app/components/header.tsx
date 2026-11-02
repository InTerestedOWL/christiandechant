"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useId, useRef, useState } from "react";
import { useStatus } from "../context";
import { INavGroup, INavLink, SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { isActivePath, pagePath } from "../i18n/routes";
import LanguageSwitch from "./shared/languageSwitch";
import Icon from "./shared/materialIcon";

const mobileHover: Record<NonNullable<INavLink['highlight']> | 'brand', string> = {
  brand: 'hover:bg-brand-50 hover:text-brand-700',
  amber: 'hover:bg-amber-50 hover:text-amber-700',
  rose: 'hover:bg-rose-50 hover:text-rose-700',
};

type ResolvedLink = INavLink & { active: boolean };
type ResolvedGroup = Omit<INavGroup, 'children'> & { children: ResolvedLink[], active: boolean };

function isGroup(item: INavLink | INavGroup): item is INavGroup {
  return 'children' in item;
}

const desktopLink = 'rounded-lg px-3.5 py-2 transition-colors hover:bg-slate-50 hover:text-brand-600';

/**
 * Disclosure menu: the button toggles a list of links (aria-expanded/aria-controls).
 * Closes on Escape (focus returns to the button), on a click outside and when focus leaves it.
 */
function NavDropdown({ group, pathname }: { group: ResolvedGroup, pathname: string }) {
  const [ open, setOpen ] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => setOpen(false), [ pathname ]);

  useEffect(() => {
    if ( !open ) {
      return;
    }
    const onPointerDown = (event: PointerEvent) => {
      if ( !containerRef.current?.contains(event.target as Node) ) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if ( event.key === 'Escape' ) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [ open ]);

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if ( !containerRef.current?.contains(event.relatedTarget as Node | null) ) {
      setOpen(false);
    }
  };

  return (
    <div ref={ containerRef } className="relative" onBlur={ onBlur }>
      <button ref={ buttonRef } type="button" aria-expanded={ open } aria-controls={ menuId }
              onClick={ () => setOpen((value) => !value) }
              className={ `flex items-center gap-1 ${ desktopLink } ${ group.active ? 'bg-slate-50 text-brand-600' : '' }` }>
        { group.title }
        <Icon name="expand_more" className={ `text-lg transition-transform ${ open ? 'rotate-180' : '' }` }/>
      </button>
      <ul id={ menuId } hidden={ !open }
          className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
        { group.children.map((link) => (
          <li key={ link.href }>
            <Link href={ link.href } aria-current={ link.active ? 'page' : undefined }
                  className={ `block rounded-lg px-3 py-2 transition-colors hover:bg-brand-50 hover:text-brand-700 ${ link.active ? 'bg-brand-50 text-brand-700' : 'text-slate-700' }` }>
              { link.title }
            </Link>
          </li>
        )) }
      </ul>
    </div>
  );
}

function MobileLink({ link, onNavigate }: { link: ResolvedLink, onNavigate: () => void }) {
  return (
    <Link href={ link.href } onClick={ onNavigate } aria-current={ link.active ? 'page' : undefined }
          className={ `rounded-xl px-3.5 py-2.5 transition-colors ${ mobileHover[link.highlight ?? 'brand'] } ${ link.active ? 'bg-brand-50 text-brand-700' : '' } ${ link.badge ? 'flex items-center justify-between' : 'block' }` }>
      { link.badge ? <span>{ link.mobileTitle }</span> : link.mobileTitle }
      { link.badge && (
        <span className="rounded-full bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-800">
          { link.badge }
        </span>
      ) }
    </Link>
  );
}

export default function Header({ locale, content }: { locale: Locale, content: SiteContent['header'] }) {
  const { status: isDrawerOpen, setStatus: setDrawerOpen } = useStatus();
  const pathname = usePathname();
  const home = pagePath(locale, 'home');
  const contactHref = pagePath(locale, 'contact');
  const resolve = (link: INavLink): ResolvedLink => {
    const href = `${ home }${ link.href }`;
    return { ...link, href, active: isActivePath(pathname, href) };
  };
  const navItems: (ResolvedLink | ResolvedGroup)[] = content.nav.map((item) => {
    if ( isGroup(item) ) {
      const children = item.children.map(resolve);
      return { ...item, children, active: children.some((child) => child.active) };
    }
    return resolve(item);
  });
  const closeDrawer = () => setDrawerOpen(false);

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
            { navItems.map((item) => 'children' in item
              ? <NavDropdown key={ item.title } group={ item } pathname={ pathname }/>
              : (
                <Link key={ item.href } href={ item.href } aria-current={ item.active ? 'page' : undefined }
                      className={ `${ desktopLink } ${ item.active ? 'bg-slate-50 text-brand-600' : '' } ${ item.highlight === 'amber' ? 'flex items-center gap-1.5' : '' }` }>
                  { item.highlight === 'amber' &&
                    <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500"></span> }
                  { item.title }
                </Link>
              )) }
          </nav>

          <div className="flex items-center gap-3">
            <Link href={ contactHref }
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
        <div onClick={ closeDrawer } className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm"></div>
        <aside
          className="relative z-10 flex h-full w-4/5 max-w-sm flex-col justify-between overflow-y-auto border-l border-slate-200 bg-white p-6 shadow-2xl">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <Image src="/Interestedowl.png" width={ 64 } height={ 64 }
                       className="h-8 w-8 rounded-lg border border-slate-100" alt="Logo"/>
                <span className="font-bold text-slate-900">{ content.drawerTitle }</span>
              </div>
              <button aria-label={ content.closeMenu } onClick={ closeDrawer }
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700">
                <Icon name="close" className="text-xl"/>
              </button>
            </div>
            <nav className="flex flex-col gap-1.5 font-medium text-slate-700">
              { navItems.map((item) => 'children' in item
                ? (
                  <div key={ item.title } className="flex flex-col gap-1.5">
                    <p className="px-3.5 pt-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                      { item.mobileTitle }
                    </p>
                    <ul className="flex flex-col gap-1.5 border-l-2 border-slate-100 pl-2">
                      { item.children.map((child) => (
                        <li key={ child.href }><MobileLink link={ child } onNavigate={ closeDrawer }/></li>
                      )) }
                    </ul>
                  </div>
                )
                : <MobileLink key={ item.href } link={ item } onNavigate={ closeDrawer }/>) }
            </nav>
            <LanguageSwitch locale={ locale } label={ content.languageLabel } className="flex w-fit"/>
          </div>
          <div className="border-t border-slate-100 pt-6">
            <Link href={ contactHref } onClick={ closeDrawer }
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
