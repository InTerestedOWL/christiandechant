import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/app/content";
import { siteUrl, wayVentureUrl } from "@/app/content/shared";
import { isLocale, locales } from "@/app/i18n/config";
import { alternates } from "@/app/i18n/metadata";
import Icon from "@/app/components/shared/materialIcon";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    return {};
  }
  const { meta, wayventurePage: page } = getContent(locale);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [
      "WayVenture",
      "travel planner app",
      "Reiseplaner App",
      "road trip planner",
      "digital travel pass",
      "camper trip planner",
      "AI travel app",
      "Christian Dechant",
    ],
    alternates: alternates(locale, '/wayventure'),
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${ siteUrl }/${ locale }/wayventure`,
      siteName: meta.siteName,
      type: "website",
      locale: meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

const primaryButton = 'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-amber-600 sm:w-auto';
const sectionTitle = 'text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl';

export default async function WayVenturePage({ params }: Props) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const page = getContent(locale).wayventurePage;

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WayVenture",
    alternateName: "WayVenture Travel Planner",
    description: page.metaDescription,
    url: wayVentureUrl,
    image: `${ siteUrl }/wayventure-insight.png`,
    applicationCategory: "TravelApplication",
    operatingSystem: "Web",
    inLanguage: [ ...locales ],
    sameAs: [ wayVentureUrl ],
    author: {
      "@type": "Person",
      name: "Christian Dechant",
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      category: "Freemium",
      availability: "https://schema.org/InStock",
    },
    featureList: page.features.map((feature) => feature.title),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    } )),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ { __html: JSON.stringify(softwareAppJsonLd) } }
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ { __html: JSON.stringify(faqJsonLd) } }
      />

      <main className="bg-white">
        {/* Hero */ }
        <section
          className="relative overflow-hidden border-b border-amber-100 bg-linear-to-b from-amber-50/60 via-white to-white py-16 lg:py-24">
          <div className="bg-dots-pattern pointer-events-none absolute inset-0 opacity-70"></div>
          <div
            className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl"></div>
          <div
            className="pointer-events-none absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-10 text-center">
              <Link href={ `/${ locale }` }
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-amber-700">
                <Icon name="arrow_back" className="text-[16px]"/>
                { page.back }
              </Link>
            </nav>

            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
              <div
                className="h-24 w-24 overflow-hidden rounded-2xl border border-amber-200/90 bg-white shadow-xl shadow-amber-500/10">
                <Image src="/wayventure.png" alt="WayVenture App Icon" width={ 192 } height={ 192 }
                       className="h-full w-full object-cover" priority/>
              </div>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                <Icon name="rocket_launch" className="text-[16px] text-amber-600"/>
                { page.badge }
              </span>

              <h1
                className="text-4xl leading-[1.12] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  { page.title }
                </span>
              </h1>
              <p className="text-xl font-semibold text-slate-700 sm:text-2xl">{ page.subtitle }</p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">{ page.intro }</p>

              <a href={ wayVentureUrl } target="_blank" rel="noopener noreferrer" className={ primaryButton }>
                <span>{ page.tryCta }</span>
                <Icon name="open_in_new" className="text-[18px]"/>
              </a>
            </div>
          </div>
        </section>

        {/* Founder story */ }
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className={ sectionTitle }>{ page.storyTitle }</h2>
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-slate-600">
              { page.story.map((paragraph) => <p key={ paragraph }>{ paragraph }</p>) }
            </div>
          </div>
        </section>

        {/* Features */ }
        <section id="features" className="border-y border-slate-200/80 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className={ sectionTitle }>{ page.featuresTitle }</h2>
              <p className="mt-3 text-base text-slate-600">{ page.featuresText }</p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              { page.features.map((feature) => (
                <div key={ feature.title }
                     className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-amber-300 hover:shadow-md">
                  { feature.badge && (
                    <span
                      className="absolute top-4 right-4 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-700">
                      { feature.badge }
                    </span>
                  ) }
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-100 bg-amber-50 text-amber-600 transition-transform group-hover:scale-105">
                    <Icon name={ feature.icon } className="text-2xl"/>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{ feature.title }</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{ feature.description }</p>
                </div>
              )) }
            </div>
          </div>
        </section>

        {/* Screenshot */ }
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-amber-200/90 bg-white p-3.5 shadow-2xl">
              <Image src="/wayventure-insight.png" alt={ page.screenshotAlt } width={ 2569 } height={ 817 }
                     className="w-full rounded-xl border border-slate-100"/>
            </div>
          </div>
        </section>

        {/* Roadmap */ }
        <section className="border-t border-slate-200/80 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className={ sectionTitle }>{ page.roadmapTitle }</h2>
              <p className="mt-3 text-base text-slate-600">{ page.roadmapText }</p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              { page.upcoming.map((item) => (
                <span key={ item.title }
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                  <Icon name={ item.icon } className="text-base text-amber-600"/>
                  { item.title }
                </span>
              )) }
            </div>

            <div
              className="mt-12 rounded-2xl border-2 border-amber-200/90 bg-linear-to-br from-amber-50/60 via-white to-orange-50/40 p-8">
              <h3 className="text-xl font-bold text-slate-900">
                { page.vaultTitle } <span className="text-amber-600">{ page.vaultSubtitle }</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{ page.vaultText }</p>
            </div>
          </div>
        </section>

        {/* FAQ */ }
        <section className="border-y border-slate-200/80 bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className={ `${ sectionTitle } text-center` }>{ page.faqTitle }</h2>

            <div className="mt-10 flex flex-col gap-3">
              { page.faq.map((item) => (
                <details key={ item.question } className="group rounded-xl border border-slate-200 bg-white px-5 py-4">
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                    { item.question }
                    <Icon name="expand_more"
                          className="shrink-0 text-2xl text-amber-600 transition-transform group-open:rotate-180"/>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{ item.answer }</p>
                </details>
              )) }
            </div>
          </div>
        </section>

        {/* CTA */ }
        <section className="py-20">
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-3.5 px-4 sm:flex-row">
            <a href={ wayVentureUrl } target="_blank" rel="noopener noreferrer" className={ primaryButton }>
              <span>{ page.visitCta }</span>
              <Icon name="open_in_new" className="text-[18px]"/>
            </a>
            <Link href={ `/${ locale }#contact` }
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-50 sm:w-auto">
              <span>{ page.talkCta }</span>
              <Icon name="chat" className="text-[18px]"/>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
