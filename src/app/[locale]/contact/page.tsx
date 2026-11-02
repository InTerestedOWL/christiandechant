import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/app/content";
import { isLocale } from "@/app/i18n/config";
import { pageMetadata } from "@/app/i18n/metadata";
import { pagePath } from "@/app/i18n/routes";
import { breadcrumbJsonLd, webPageJsonLd } from "@/app/seo/pageJsonLd";
import PageHero from "@/app/components/shared/pageHero";
import SectionHeading from "@/app/components/shared/sectionHeading";
import ProcessTimeline from "@/app/components/shared/processTimeline";
import Contact from "@/app/components/contact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const page = getContent(locale).contactPage;

  return pageMetadata(locale, 'contact', {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale);
  const page = content.contactPage;
  const trail = [
    { name: content.a11y.home, path: pagePath(locale, 'home') },
    { name: page.breadcrumb, path: pagePath(locale, 'contact') },
  ];
  const jsonLd = [
    webPageJsonLd({
      type: 'ContactPage',
      name: page.metaTitle,
      description: page.metaDescription,
      path: pagePath(locale, 'contact'),
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
                primaryHref="#contact" secondaryHref="#next-steps"/>

      <Contact locale={ locale } content={ content.contact } packagesByTopic={ {
        package: content.offers.packages.map((pkg) => ({ value: pkg.id, label: pkg.title })),
        support: content.supportPage.packages.items.map((pkg) => ({ value: pkg.id, label: pkg.title })),
      } }/>

      <section id="next-steps" aria-labelledby="next-steps-title" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading content={ page.nextSteps } id="next-steps-title"/>
          <ProcessTimeline steps={ page.nextSteps.steps }/>
        </div>
      </section>
    </main>
  );
}
