import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { pagePath } from "../i18n/routes";
import SectionHeading from "./shared/sectionHeading";
import Icon from "./shared/materialIcon";
import { accentHoverBorder, accentIconBox } from "./shared/accent";

export default function WhyMe({ locale, content }: { locale: Locale, content: SiteContent['whyMe'] }) {
  return (
    <section className="border-b border-slate-200/80 bg-white py-20" id="why">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading content={ content }/>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          { content.reasons.map((reason, index) => (
            <div key={ reason.title }
                 className={ `group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md ${ accentHoverBorder[reason.accent] } ${ index < 3 ? 'lg:col-span-2' : 'lg:col-span-3' } ${ index === content.reasons.length - 1 && index % 2 === 0 ? 'md:col-span-2' : '' }` }>
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={ `flex h-12 w-12 items-center justify-center rounded-xl border transition-transform group-hover:scale-105 ${ accentIconBox[reason.accent] }` }>
                  <Icon name={ reason.icon } className="text-2xl"/>
                </div>
                <span className="font-mono text-xs font-semibold text-slate-400">
                  { String(index + 1).padStart(2, '0') }
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{ reason.title }</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">{ reason.text }</p>
              <ul className="mt-auto flex flex-col gap-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                { reason.points.map((point) => (
                  <li key={ point } className="flex items-start gap-2">
                    <Icon name="check_circle" className="shrink-0 text-base text-emerald-600"/>
                    <span>{ point }</span>
                  </li>
                )) }
              </ul>
            </div>
          )) }
        </div>

        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 sm:flex-row">
          <p className="text-center font-mono text-sm font-semibold text-brand-800 sm:text-left">„{ content.mantra }“</p>
          <Link href={ pagePath(locale, 'home', 'contact') }
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700">
            <span>{ content.cta }</span>
            <Icon name="arrow_forward" className="text-[18px]"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
