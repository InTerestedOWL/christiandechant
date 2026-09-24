import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import SectionHeading from "./shared/sectionHeading";
import Icon from "./shared/materialIcon";

export default function Offers({ locale, content }: { locale: Locale, content: SiteContent['offers'] }) {
  const contactHref = `/${ locale }#contact`;

  return (
    <section className="border-b border-slate-200/80 bg-slate-50 py-20" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading content={ content }/>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          { content.packages.map((pkg) => (
            <div key={ pkg.title }
                 className={ `flex flex-col justify-between rounded-2xl bg-white p-6 ${ pkg.featured
                   ? 'relative border-2 border-brand-500 shadow-lg shadow-brand-500/10'
                   : 'border border-slate-200 shadow-sm transition-all hover:border-slate-300' }` }>
              { pkg.featured && (
                <div
                  className="absolute -top-3 right-4 rounded-full bg-brand-600 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                  { content.featuredBadge }
                </div>
              ) }
              <div>
                <div
                  className={ `mb-1 font-mono text-xs font-semibold uppercase ${ pkg.featured ? 'text-brand-600' : 'text-slate-500' }` }>
                  { pkg.tier }
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{ pkg.title }</h3>
                <p className="mb-6 text-xs leading-relaxed text-slate-500">{ pkg.text }</p>
                <ul className="mb-6 flex flex-col gap-2.5 text-xs text-slate-700">
                  { pkg.features.map((feature) => (
                    <li key={ feature } className="flex items-center gap-2">
                      <Icon name="check_circle" className="text-base text-emerald-600"/>
                      <span>{ feature }</span>
                    </li>
                  )) }
                </ul>
              </div>
              <Link href={ contactHref }
                    className={ `w-full rounded-xl py-2.5 text-center text-xs font-semibold transition-colors ${ pkg.featured
                      ? 'bg-brand-600 text-white hover:bg-brand-700'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200' }` }>
                { pkg.featured ? content.featuredCta : content.requestCta }
              </Link>
            </div>
          )) }
        </div>

        <div
          className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:flex-row">
          <div className="flex items-center gap-5">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-600">
              <Icon name="developer_board" className="text-2xl"/>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{ content.custom.title }</h3>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">{ content.custom.text }</p>
            </div>
          </div>
          <Link href={ contactHref }
                className="shrink-0 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-black">
            { content.custom.cta }
          </Link>
        </div>
      </div>
    </section>
  );
}
