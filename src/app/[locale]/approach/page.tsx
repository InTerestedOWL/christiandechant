import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/app/content";
import { isLocale } from "@/app/i18n/config";
import { pageMetadata } from "@/app/i18n/metadata";
import { pagePath } from "@/app/i18n/routes";
import { contactPath } from "@/app/contactPrefill";
import { breadcrumbJsonLd, faqJsonLd } from "@/app/seo/pageJsonLd";
import PageHero from "@/app/components/shared/pageHero";
import SectionHeading from "@/app/components/shared/sectionHeading";
import FeatureCard from "@/app/components/shared/featureCard";
import IconItemGrid from "@/app/components/shared/iconItemGrid";
import CalloutBox from "@/app/components/shared/calloutBox";
import Faq from "@/app/components/faq";
import CtaBanner from "@/app/components/ctaBanner";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const page = getContent(locale).approachPage;

  return pageMetadata(locale, 'approach', {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  });
}

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';

export default async function ApproachPage({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale);
  const page = content.approachPage;
  const contactHref = contactPath(locale, { topic: 'freelance' });
  const trail = [
    { name: content.a11y.home, path: pagePath(locale, 'home') },
    { name: page.breadcrumb, path: pagePath(locale, 'approach') },
  ];
  const jsonLd = [ breadcrumbJsonLd(trail), faqJsonLd(page.faq.items) ];

  return (
    <main>
      { jsonLd.map((data) => (
        <script key={ data["@type"] } type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify(data) } }/>
      )) }

      <PageHero content={ page.hero } breadcrumb={ { label: content.a11y.breadcrumbLabel, trail } }
                primaryHref={ contactHref } secondaryHref="#phases"/>

      <section id="phases" aria-labelledby="phases-title" className="border-b border-slate-200/80 bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.phases } id="phases-title"/>
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            { page.phases.items.map((phase, index) => (
              <li key={ phase.title } className="flex">
                <FeatureCard item={ phase } number={ index + 1 } className="w-full"/>
              </li>
            )) }
          </ol>
        </div>
      </section>

      <section id="motto" aria-labelledby="motto-title" className="border-b border-slate-200/80 bg-white py-20">
        <div className={ container }>
          <SectionHeading content={ page.motto } id="motto-title"/>
          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            { page.motto.items.map((item) => (
              <li key={ item.title } className="flex">
                <FeatureCard item={ item } className="w-full"/>
              </li>
            )) }
          </ul>
        </div>
      </section>

      <section id="done" aria-labelledby="done-title" className="border-b border-slate-200/80 bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.done } id="done-title"/>
          <IconItemGrid items={ page.done.items } columns={ 3 }/>
        </div>
      </section>

      <section id="compliance" aria-labelledby="compliance-title" className="bg-white py-20">
        <div className={ container }>
          <SectionHeading content={ page.compliance } id="compliance-title"/>
          <IconItemGrid items={ page.compliance.items }/>
          <div className="mt-12">
            <CalloutBox content={ page.collaboration } href={ pagePath(locale, 'freelancing') } icon="handshake"/>
          </div>
        </div>
      </section>

      <Faq content={ page.faq }/>

      <CtaBanner content={ page.cta } href={ contactHref }/>
    </main>
  );
}
