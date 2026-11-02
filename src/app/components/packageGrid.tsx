import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { contactPath } from "../contactPrefill";
import Icon from "./shared/materialIcon";

/** The web package cards, shared by the homepage teaser and the packages page. */
export default function PackageGrid({ locale, content, showIdealFor = false }: {
  locale: Locale,
  content: SiteContent['offers'],
  showIdealFor?: boolean,
}) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      { content.packages.map((pkg) => (
        <li key={ pkg.title }
            className={ `relative flex flex-col justify-between rounded-2xl bg-white p-6 ${ pkg.featured
              ? 'border-2 border-brand-500 shadow-lg shadow-brand-500/10'
              : 'border border-slate-200 shadow-sm transition-all hover:border-slate-300' }` }>
          { pkg.featured && (
            <p className="absolute -top-3 right-4 rounded-full bg-brand-600 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
              { content.featuredBadge }
            </p>
          ) }
          <div>
            <p className={ `mb-1 font-mono text-xs font-semibold uppercase ${ pkg.featured ? 'text-brand-600' : 'text-slate-500' }` }>
              { pkg.tier }
            </p>
            <h3 className="mb-2 text-xl font-bold text-slate-900">{ pkg.title }</h3>
            <p className="mb-4 text-xs leading-relaxed text-slate-600">{ pkg.text }</p>
            { showIdealFor && (
              <p className="mb-6 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-700">
                <span className="font-semibold">{ content.idealForLabel }:</span> { pkg.idealFor }
              </p>
            ) }
            <ul className="mb-6 flex flex-col gap-2.5 text-xs text-slate-700">
              { pkg.features.map((feature) => (
                <li key={ feature } className="flex items-center gap-2">
                  <Icon name="check_circle" className="text-base text-emerald-600"/>
                  <span>{ feature }</span>
                </li>
              )) }
            </ul>
          </div>
          <Link href={ contactPath(locale, { topic: 'package', package: pkg.id }) }
                className={ `w-full rounded-xl py-2.5 text-center text-xs font-semibold transition-colors ${ pkg.featured
                  ? 'bg-brand-600 text-white hover:bg-brand-700'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200' }` }>
            { pkg.featured ? content.featuredCta : content.requestCta }
            <span className="sr-only">: { pkg.title }</span>
          </Link>
        </li>
      )) }
    </ul>
  );
}
