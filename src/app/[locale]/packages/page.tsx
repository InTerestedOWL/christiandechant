import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/app/content";
import { isLocale } from "@/app/i18n/config";
import { pageMetadata } from "@/app/i18n/metadata";
import { pagePath } from "@/app/i18n/routes";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/app/seo/pageJsonLd";
import PageHero from "@/app/components/shared/pageHero";
import SectionHeading from "@/app/components/shared/sectionHeading";
import ProcessTimeline from "@/app/components/shared/processTimeline";
import IconItemGrid from "@/app/components/shared/iconItemGrid";
import CalloutBox from "@/app/components/shared/calloutBox";
import PackageGrid from "@/app/components/packageGrid";
import ComparisonTable from "@/app/components/comparisonTable";
import Faq from "@/app/components/faq";
import CtaBanner from "@/app/components/ctaBanner";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const page = getContent(locale).packagesPage;

  return pageMetadata(locale, 'packages', {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  });
}

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';

export default async function PackagesPage({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale);
  const page = content.packagesPage;
  const contactHref = pagePath(locale, 'home', 'contact');
  const trail = [
    { name: content.a11y.home, path: pagePath(locale, 'home') },
    { name: page.breadcrumb, path: pagePath(locale, 'packages') },
  ];
  const jsonLd = [
    serviceJsonLd({
      name: page.service.name,
      description: page.metaDescription,
      path: pagePath(locale, 'packages'),
      serviceType: page.service.serviceType,
      areaServed: content.meta.areaServed,
      locale,
      offers: {
        name: page.service.catalogName,
        items: content.offers.packages.map((pkg) => ({ name: pkg.title, description: pkg.text })),
      },
    }),
    breadcrumbJsonLd(trail),
    faqJsonLd(page.faq.items),
  ];

  return (
    <main>
      { jsonLd.map((data) => (
        <script key={ data["@type"] } type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify(data) } }/>
      )) }

      <PageHero content={ page.hero } breadcrumb={ { label: content.a11y.breadcrumbLabel, trail } }
                primaryHref={ contactHref } secondaryHref="#comparison"/>

      <section id="packages" aria-labelledby="packages-title" className="border-b border-slate-200/80 bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.packages } id="packages-title"/>
          <PackageGrid content={ content.offers } contactHref={ contactHref } showIdealFor/>
        </div>
      </section>

      <section id="comparison" aria-labelledby="comparison-title" className="border-b border-slate-200/80 bg-white py-20">
        <div className={ container }>
          <SectionHeading content={ page.comparison } id="comparison-title"/>
          <ComparisonTable content={ page.comparison } packages={ content.offers.packages.map((pkg) => pkg.title) }/>
        </div>
      </section>

      <section id="included" aria-labelledby="included-title" className="border-b border-slate-200/80 bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.included } id="included-title"/>
          <IconItemGrid items={ page.included.items }/>
        </div>
      </section>

      <section id="process" aria-labelledby="process-title" className="bg-white py-20">
        <div className={ container }>
          <SectionHeading content={ page.process } id="process-title"/>
          <ProcessTimeline steps={ page.process.steps }/>
          <div className="mt-12">
            <CalloutBox content={ page.custom } href={ pagePath(locale, 'freelancing') }/>
          </div>
        </div>
      </section>

      <Faq content={ page.faq }/>

      <CtaBanner content={ page.cta } href={ contactHref }/>
    </main>
  );
}
