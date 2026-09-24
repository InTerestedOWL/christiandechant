"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getContent } from "@/app/content";
import { defaultLocale, isLocale } from "@/app/i18n/config";
import Icon from "@/app/components/shared/materialIcon";

export default function NotFound() {
  const segment = usePathname().split('/')[1];
  const locale = isLocale(segment) ? segment : defaultLocale;
  const { notFound } = getContent(locale);

  return (
    <main className="relative overflow-hidden bg-linear-to-b from-brand-50/40 via-white to-white py-24 lg:py-32">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-60"></div>
      <div className="relative mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center">
        <span
          className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 font-mono text-xs font-semibold text-brand-700">
          404
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{ notFound.title }</h1>
        <p className="text-base text-slate-600">{ notFound.text }</p>
        <Link href={ `/${ locale }` }
              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-700">
          <span>{ notFound.cta }</span>
          <Icon name="arrow_forward" className="text-[18px]"/>
        </Link>
      </div>
    </main>
  );
}
