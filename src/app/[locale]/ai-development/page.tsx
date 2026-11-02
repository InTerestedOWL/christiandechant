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
import FeatureCard from "@/app/components/shared/featureCard";
import IconItemGrid from "@/app/components/shared/iconItemGrid";
import ProcessTimeline from "@/app/components/shared/processTimeline";
import CalloutBox from "@/app/components/shared/calloutBox";
import Faq from "@/app/components/faq";
import CtaBanner from "@/app/components/ctaBanner";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const page = getContent(locale).aiDevelopmentPage;

  return pageMetadata(locale, 'aiDevelopment', {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  });
}

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';

export default async function AiDevelopmentPage({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale);
  const page = content.aiDevelopmentPage;
  const contactHref = contactPath(locale, { topic: 'ai' });
  const trail = [
    { name: content.a11y.home, path: pagePath(locale, 'home') },
    { name: page.breadcrumb, path: pagePath(locale, 'aiDevelopment') },
  ];
  const jsonLd = [
    serviceJsonLd({
      name: page.service.name,
      description: page.metaDescription,
      path: pagePath(locale, 'aiDevelopment'),
      serviceType: page.service.serviceType,
      areaServed: content.meta.areaServed,
      locale,
      offers: {
        name: page.service.catalogName,
        items: page.services.items.map((item) => ({ name: item.title, description: item.text })),
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
                primaryHref={ contactHref } secondaryHref="#services"/>

      <section id="services" aria-labelledby="services-title" className="border-b border-slate-200/80 bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.services } id="services-title"/>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            { page.services.items.map((item) => (
              <li key={ item.title } className="flex">
                <FeatureCard item={ item } className="w-full"/>
              </li>
            )) }
          </ul>
        </div>
      </section>

      <section id="principles" aria-labelledby="principles-title" className="border-b border-slate-200/80 bg-white py-20">
        <div className={ container }>
          <SectionHeading content={ page.principles } id="principles-title"/>
          <IconItemGrid items={ page.principles.items }/>
        </div>
      </section>

      <section id="process" aria-labelledby="process-title" className="bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.process } id="process-title"/>
          <ProcessTimeline steps={ page.process.steps }/>
          <div className="mt-12">
            <CalloutBox content={ page.reference } href={ pagePath(locale, 'wayventure') } icon="auto_awesome"/>
          </div>
        </div>
      </section>

      <Faq content={ page.faq }/>

      <CtaBanner content={ page.cta } href={ contactHref }/>
    </main>
  );
}
