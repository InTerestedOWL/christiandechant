import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { pagePath } from "../i18n/routes";
import SectionHeading from "./shared/sectionHeading";
import FeatureCard from "./shared/featureCard";
import Icon from "./shared/materialIcon";

export default function WhyMe({ locale, content }: { locale: Locale, content: SiteContent['whyMe'] }) {
  return (
    <section aria-labelledby="why-title" className="border-b border-slate-200/80 bg-white py-20" id="why">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading content={ content } id="why-title"/>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          { content.reasons.map((reason, index) => (
            <li key={ reason.title }
                className={ `flex ${ index < 3 ? 'lg:col-span-2' : 'lg:col-span-3' } ${ index === content.reasons.length - 1 && index % 2 === 0 ? 'md:col-span-2' : '' }` }>
              <FeatureCard item={ reason } number={ index + 1 } className="w-full"/>
            </li>
          )) }
        </ul>

        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 lg:flex-row">
          <p lang="en" className="text-center font-mono text-sm font-semibold text-brand-800 lg:text-left">
            „{ content.mantra }“
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={ pagePath(locale, 'freelancing') }
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-all hover:bg-brand-50">
              <span>{ content.secondaryCta }</span>
              <Icon name="arrow_forward" className="text-[18px]"/>
            </Link>
            <Link href={ pagePath(locale, 'contact') }
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700">
              <span>{ content.cta }</span>
              <Icon name="arrow_forward" className="text-[18px]"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
