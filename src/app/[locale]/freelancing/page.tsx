import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/app/content";
import { jagdTauschUrl } from "@/app/content/shared";
import { isLocale } from "@/app/i18n/config";
import { pageMetadata } from "@/app/i18n/metadata";
import { pagePath } from "@/app/i18n/routes";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/app/seo/pageJsonLd";
import PageHero from "@/app/components/shared/pageHero";
import SectionHeading from "@/app/components/shared/sectionHeading";
import FeatureCard from "@/app/components/shared/featureCard";
import ProcessTimeline from "@/app/components/shared/processTimeline";
import TechStack from "@/app/components/shared/techStack";
import IconItemGrid from "@/app/components/shared/iconItemGrid";
import CaseStudy from "@/app/components/caseStudy";
import Faq from "@/app/components/faq";
import CtaBanner from "@/app/components/ctaBanner";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const page = getContent(locale).freelancingPage;

  return pageMetadata(locale, 'freelancing', {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  });
}

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';

export default async function FreelancingPage({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale);
  const page = content.freelancingPage;
  const contactHref = pagePath(locale, 'home', 'contact');
  const trail = [
    { name: content.a11y.home, path: pagePath(locale, 'home') },
    { name: page.breadcrumb, path: pagePath(locale, 'freelancing') },
  ];
  const jsonLd = [
    serviceJsonLd({
      name: page.service.name,
      description: page.metaDescription,
      path: pagePath(locale, 'freelancing'),
      serviceType: page.service.serviceType,
      areaServed: content.meta.areaServed,
      locale,
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
                primaryHref={ contactHref } secondaryHref="#models"/>

      <section id="models" aria-labelledby="models-title" className="border-b border-slate-200/80 bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.models } id="models-title"/>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            { page.models.items.map((model) => (
              <li key={ model.title } className="flex">
                <FeatureCard item={ model } className="w-full"/>
              </li>
            )) }
          </ul>
        </div>
      </section>

      <section id="working-model" aria-labelledby="working-model-title" className="border-b border-slate-200/80 bg-white py-20">
        <div className={ container }>
          <SectionHeading content={ page.workingModel } id="working-model-title"/>
          <IconItemGrid items={ page.workingModel.items }/>
        </div>
      </section>

      <section id="process" aria-labelledby="process-title" className="border-b border-slate-200/80 bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.process } id="process-title"/>
          <ProcessTimeline steps={ page.process.steps }/>
        </div>
      </section>

      <CaseStudy content={ page.caseStudy } href={ jagdTauschUrl } newTabHint={ content.a11y.newTab }/>

      <section id="stack" aria-labelledby="stack-title" className="bg-slate-50 py-20">
        <div className={ container }>
          <SectionHeading content={ page.stack } id="stack-title"/>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <TechStack groups={ content.competencies.stackGroups }/>
          </div>
        </div>
      </section>

      <Faq content={ page.faq }/>

      <CtaBanner content={ page.cta } href={ contactHref }/>
    </main>
  );
}
