import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/app/content";
import { isLocale } from "@/app/i18n/config";
import { pageMetadata } from "@/app/i18n/metadata";
import { pagePath } from "@/app/i18n/routes";
import { contactPath } from "@/app/contactPrefill";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/app/seo/pageJsonLd";
import PageHero from "@/app/components/shared/pageHero";
import SectionHeading from "@/app/components/shared/sectionHeading";
import ProcessTimeline from "@/app/components/shared/processTimeline";
import IconItemGrid from "@/app/components/shared/iconItemGrid";
import SupportPackageGrid from "@/app/components/supportPackageGrid";
import Faq from "@/app/components/faq";
import CtaBanner from "@/app/components/ctaBanner";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const page = getContent(locale).supportPage;

  return pageMetadata(locale, 'support', {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  });
}

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';

export default async function SupportPage({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale);
  const page = content.supportPage;
  const contactHref = contactPath(locale, { topic: 'support' });
  const trail = [
    { name: content.a11y.home, path: pagePath(locale, 'home') },
    { name: page.breadcrumb, path: pagePath(locale, 'support') },
  ];
  const jsonLd = [
    serviceJsonLd({
      name: page.service.name,
      description: page.metaDescription,
      path: pagePath(locale, 'support'),
      serviceType: page.service.serviceType,
      areaServed: content.meta.areaServed,
      locale,
      offers: {
        name: page.service.catalogName,
        items: page.packages.items.map((pkg) => ({ name: pkg.title, description: pkg.idealFor })),
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
                primaryHref={ contactHref } secondaryHref="#packages"/>

      <section id="packages" aria-labelledby="packages-title" className="border-b border-slate-200/80 bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.packages } id="packages-title"/>
          <SupportPackageGrid locale={ locale } content={ page.packages }/>
        </div>
      </section>

      <section id="services" aria-labelledby="services-title" className="border-b border-slate-200/80 bg-white py-20">
        <div className={ container }>
          <SectionHeading content={ page.services } id="services-title"/>
          <IconItemGrid items={ page.services.items }/>
        </div>
      </section>

      <section id="process" aria-labelledby="process-title" className="bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.process } id="process-title"/>
          <ProcessTimeline steps={ page.process.steps }/>
        </div>
      </section>

      <Faq content={ page.faq }/>

      <CtaBanner content={ page.cta } href={ contactHref }/>
    </main>
  );
}
