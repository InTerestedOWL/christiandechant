"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent } from "../consent";
import Icon from "./shared/materialIcon";
import { Eyebrow } from "./shared/sectionHeading";

function Toggle({ checked, disabled = false, onChange, label }: {
  checked: boolean,
  disabled?: boolean,
  onChange?: (value: boolean) => void,
  label: string,
}) {
  return (
    <button type="button" role="switch" aria-checked={ checked } aria-label={ label } disabled={ disabled }
            onClick={ () => onChange?.(!checked) }
            className={ `relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors disabled:opacity-60 ${ checked ? 'bg-brand-600' : 'bg-slate-300' }` }>
      <span
        className={ `inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${ checked ? 'translate-x-5.5' : 'translate-x-0.5' }` }></span>
    </button>
  );
}

export default function CookieBanner({ locale, content }: { locale: Locale, content: SiteContent['cookieBanner'] }) {
  const [ open, setOpen ] = useState(false);
  const [ showSettings, setShowSettings ] = useState(false);
  const [ statistics, setStatistics ] = useState(false);
  const titleId = useId();

  useEffect(() => {
    // Read storage only after mount, so server and client render the same markup.
    const consent = readConsent();
    if ( !consent ) {
      setOpen(true);
    }

    const reopen = () => {
      setStatistics(readConsent()?.statistics ?? false);
      setShowSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  if ( !open ) {
    return null;
  }

  const decide = (choice: { statistics: boolean }) => {
    saveConsent(choice);
    setOpen(false);
    setShowSettings(false);
  };

  const { categories } = content;

  return (
    <div role="dialog" aria-modal="false" aria-labelledby={ titleId }
         className="fixed inset-x-4 bottom-4 z-60 sm:right-auto sm:left-6 sm:bottom-6 sm:w-full sm:max-w-md">
      <div
        className="flex max-h-[calc(100vh-2rem)] flex-col gap-4 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            <Eyebrow icon="cookie" text={ content.eyebrow }/>
            <h2 id={ titleId } className="text-lg font-bold text-slate-900">{ content.title }</h2>
          </div>
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-600">
            <Icon name="shield_lock" className="text-xl"/>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">
          { content.text[0] }
          <Link href={ `/${ locale }/privacy-policy` } className="font-medium text-brand-600 underline hover:text-brand-700">
            { content.text[1] }
          </Link>
          { content.text[2] }
        </p>

        { showSettings && (
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5">
              <Icon name="verified_user" className="mt-0.5 text-lg text-emerald-600"/>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-900">{ categories.necessary.title }</span>
                  <span
                    className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
                    { content.alwaysActive }
                  </span>
                </div>
                <span className="mt-1 block text-xs text-slate-500">{ categories.necessary.text }</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5">
              <Icon name="query_stats" className="mt-0.5 text-lg text-brand-600"/>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-900">{ categories.statistics.title }</span>
                  <Toggle checked={ statistics } onChange={ setStatistics } label={ categories.statistics.title }/>
                </div>
                <span className="mt-1 block text-xs text-slate-500">{ categories.statistics.text }</span>
              </div>
            </div>
          </div>
        ) }

        <div className="flex flex-col gap-2.5 pt-1">
          <div className="grid grid-cols-2 gap-2.5">
            <button type="button" onClick={ () => decide({ statistics: false }) }
                    className="rounded-xl bg-slate-100 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-200">
              { content.necessaryOnly }
            </button>
            <button type="button" onClick={ () => decide({ statistics: true }) }
                    className="rounded-xl bg-brand-600 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-700">
              { content.acceptAll }
            </button>
          </div>
          { showSettings ? (
            <button type="button" onClick={ () => decide({ statistics }) }
                    className="rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-50">
              { content.save }
            </button>
          ) : (
            <button type="button" onClick={ () => setShowSettings(true) }
                    className="inline-flex items-center justify-center gap-1.5 py-1 text-xs font-semibold text-slate-500 transition-colors hover:text-brand-600">
              <Icon name="tune" className="text-sm"/>
              { content.settings }
            </button>
          ) }
        </div>
      </div>
    </div>
  );
}
