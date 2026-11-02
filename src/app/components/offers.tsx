import Link from "next/link";
import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { pagePath } from "../i18n/routes";
import SectionHeading from "./shared/sectionHeading";
import CalloutBox from "./shared/calloutBox";
import Icon from "./shared/materialIcon";
import PackageGrid from "./packageGrid";
import { contactPath } from "../contactPrefill";

export default function Offers({ locale, content }: { locale: Locale, content: SiteContent['offers'] }) {
  const contactHref = contactPath(locale, { topic: 'freelance' });

  return (
    <section aria-labelledby="services-title" className="border-b border-slate-200/80 bg-slate-50 py-20" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading content={ content } id="services-title"/>

        <PackageGrid locale={ locale } content={ content }/>

        <div className="mt-6 mb-10 flex justify-center">
          <Link href={ pagePath(locale, 'packages') }
                className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-all hover:bg-brand-50">
            <span>{ content.detailsCta }</span>
            <Icon name="arrow_forward" className="text-[18px]"/>
          </Link>
        </div>

        <CalloutBox content={ content.custom } href={ contactHref }/>
      </div>
    </section>
  );
}
