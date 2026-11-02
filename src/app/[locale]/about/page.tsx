import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/app/content";
import { isLocale } from "@/app/i18n/config";
import { pageMetadata } from "@/app/i18n/metadata";
import { pagePath } from "@/app/i18n/routes";
import { breadcrumbJsonLd, webPageJsonLd } from "@/app/seo/pageJsonLd";
import PageHero from "@/app/components/shared/pageHero";
import SectionHeading from "@/app/components/shared/sectionHeading";
import IconItemGrid from "@/app/components/shared/iconItemGrid";
import CalloutBox from "@/app/components/shared/calloutBox";
import RichText from "@/app/components/shared/richText";
import Experience from "@/app/components/experience";
import VoluntaryWork from "@/app/components/voluntaryWork";
import CtaBanner from "@/app/components/ctaBanner";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const page = getContent(locale).aboutPage;

  return pageMetadata(locale, 'about', {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  });
}

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale);
  const page = content.aboutPage;
  const contactHref = pagePath(locale, 'contact');
  const trail = [
    { name: content.a11y.home, path: pagePath(locale, 'home') },
    { name: page.breadcrumb, path: pagePath(locale, 'about') },
  ];
  const jsonLd = [
    webPageJsonLd({
      type: 'AboutPage',
      name: page.metaTitle,
      description: page.metaDescription,
      path: pagePath(locale, 'about'),
      locale,
    }),
    breadcrumbJsonLd(trail),
  ];

  return (
    <main>
      { jsonLd.map((data) => (
        <script key={ data["@type"] } type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify(data) } }/>
      )) }

      <PageHero content={ page.hero } breadcrumb={ { label: content.a11y.breadcrumbLabel, trail } }
                primaryHref={ contactHref } secondaryHref="#experience"/>

      <section id="story" aria-labelledby="story-title" className="border-b border-slate-200/80 bg-white py-20">
        <div className={ container }>
          <SectionHeading content={ page.story } id="story-title"/>
          <div className="flex max-w-3xl flex-col gap-5 text-base leading-relaxed text-slate-700">
            { page.story.paragraphs.map((paragraph) => <p key={ paragraph }><RichText text={ paragraph }/></p>) }
          </div>
        </div>
      </section>

      <Experience content={ content.experience } newTabHint={ content.a11y.newTab }/>

      <section id="values" aria-labelledby="values-title" className="border-b border-slate-200/80 bg-white py-20">
        <div className={ container }>
          <SectionHeading content={ page.values } id="values-title"/>
          <IconItemGrid items={ page.values.items }/>
          <div className="mt-12">
            <CalloutBox content={ page.product } href={ pagePath(locale, 'wayventure') } icon="explore"/>
          </div>
        </div>
      </section>

      <VoluntaryWork content={ content.volunteering }/>

      <CtaBanner content={ page.cta } href={ contactHref }/>
    </main>
  );
}
