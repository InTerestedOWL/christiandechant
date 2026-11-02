import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { contactPath } from "../contactPrefill";
import Icon from "./shared/materialIcon";

/** Support package cards: who a package fits, what it covers and its response time. Never prices. */
export default function SupportPackageGrid({ locale, content }: {
  locale: Locale,
  content: SiteContent['supportPage']['packages'],
}) {
  return (
    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      { content.items.map((pkg) => (
        <li key={ pkg.id }
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
            <h3 className="mb-1 text-xl font-bold text-slate-900">{ pkg.title }</h3>
            <p className="mb-5 text-sm text-slate-600">{ pkg.idealFor }</p>

            <h4 className="mb-2 font-mono text-xs font-semibold uppercase text-slate-500">{ content.profileLabel }</h4>
            <ul className="mb-5 flex flex-col gap-2 text-sm text-slate-700">
              { pkg.profile.map((item) => (
                <li key={ item } className="flex items-center gap-2">
                  <Icon name="arrow_right" className="text-base text-slate-500"/>
                  <span>{ item }</span>
                </li>
              )) }
            </ul>

            <h4 className="mb-2 font-mono text-xs font-semibold uppercase text-slate-500">{ content.servicesLabel }</h4>
            <ul className="mb-5 flex flex-col gap-2 text-sm text-slate-700">
              { pkg.services.map((item) => (
                <li key={ item } className="flex items-center gap-2">
                  <Icon name="check_circle" className="text-base text-emerald-600"/>
                  <span>{ item }</span>
                </li>
              )) }
            </ul>

            <p className="mb-6 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
              <Icon name="schedule" className="text-base text-brand-600"/>
              <span><span className="font-semibold">{ content.responseLabel }:</span> { pkg.response }</span>
            </p>
          </div>
          <Link href={ contactPath(locale, { topic: 'support', package: pkg.id }) }
                className={ `w-full rounded-xl py-2.5 text-center text-sm font-semibold transition-colors ${ pkg.featured
                  ? 'bg-brand-600 text-white hover:bg-brand-700'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200' }` }>
            { content.requestCta }
            <span className="sr-only">: { pkg.title }</span>
          </Link>
        </li>
      )) }
    </ul>
  );
}
