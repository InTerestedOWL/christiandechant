import Link from "next/link";
import { Accent, SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import Icon from "./shared/materialIcon";
import { accentText } from "./shared/accent";

// The motto cards use slightly different badge/link shades than the shared accent maps.
const pillarBadge: Partial<Record<Accent, string>> = {
  brand: 'text-brand-600 bg-brand-50 border-brand-100',
  amber: 'text-amber-700 bg-amber-50 border-amber-200',
  indigo: 'text-indigo-700 bg-indigo-50 border-indigo-100',
  emerald: 'text-emerald-800 bg-emerald-50 border-emerald-200',
};

const pillarLink: Partial<Record<Accent, string>> = {
  indigo: 'text-brand-600 hover:text-brand-700',
  emerald: 'text-emerald-700 hover:text-emerald-800',
};

export default function Motto({ locale, content }: { locale: Locale, content: SiteContent['motto'] }) {
  return (
    <section className="bg-linear-to-r from-brand-700 via-brand-800 to-indigo-900 py-20 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <span
          className="rounded-full border border-brand-500/30 bg-brand-900/50 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-brand-200">
          { content.eyebrow }
        </span>
        <blockquote className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          „{ content.quote }“
        </blockquote>
        <p className="max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg sm:leading-7">{ content.text }</p>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 text-slate-900 md:grid-cols-2 lg:grid-cols-4">
          { content.pillars.map((pillar) => (
            <div key={ pillar.title }
                 className="group flex flex-col justify-between rounded-2xl border border-indigo-100 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className={ `rounded border px-2 py-0.5 font-mono text-[11px] font-bold ${ pillarBadge[pillar.accent] }` }>
                    { pillar.badge }
                  </span>
                  <Icon name={ pillar.icon }
                        className={ `text-2xl transition-transform group-hover:scale-105 ${ accentText[pillar.accent] }` }/>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{ pillar.title }</h3>
                <p className="text-xs leading-relaxed text-slate-600">{ pillar.text }</p>
                { pillar.points && (
                  <ul className="flex flex-col gap-2 pt-2 text-xs font-medium text-slate-700">
                    { pillar.points.map((point) => (
                      <li key={ point } className="flex items-start gap-2">
                        <Icon name="check_circle" className="shrink-0 text-base text-emerald-600"/>
                        <span>{ point }</span>
                      </li>
                    )) }
                  </ul>
                ) }
              </div>
              { pillar.cta && (
                <div className="mt-2 border-t border-slate-100 pt-4">
                  <Link href={ `/${ locale }#contact` }
                        className={ `inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${ pillarLink[pillar.accent] }` }>
                    <span>{ pillar.cta }</span>
                    <Icon name="arrow_forward" className="text-sm"/>
                  </Link>
                </div>
              ) }
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}
