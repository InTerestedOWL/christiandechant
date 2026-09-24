"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, locales, switchLocalePath } from "../../i18n/config";

export default function LanguageSwitch({ locale, label, className = '' }: { locale: Locale, label: string, className?: string }) {
  const pathname = usePathname();

  return (
    <div role="group" aria-label={ label }
         className={ `items-center gap-0.5 rounded-xl border border-slate-200 p-1 font-mono text-[11px] font-semibold ${ className }` }>
      { locales.map((target) => (
        <Link key={ target } href={ switchLocalePath(pathname, target) } hrefLang={ target } lang={ target }
              aria-current={ target === locale ? 'true' : undefined }
              className={ `rounded-lg px-2 py-1 uppercase transition-colors ${ target === locale
                ? 'bg-brand-50 text-brand-700'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900' }` }>
          { target }
        </Link>
      )) }
    </div>
  );
}
