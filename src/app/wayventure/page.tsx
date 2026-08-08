import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { wayVentureFaq, wayVentureFeatures, wayVentureUpcoming } from "@/app/data";

const title = "WayVenture — Travel Planner App Built by Christian Dechant";
const description = "WayVenture is an independent travel planner app for road trips, camper journeys and spontaneous getaways, with a digital travel pass, AI trip timelines, budgeting and vehicle management. Built and shipped by Christian Dechant.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "WayVenture",
    "travel planner app",
    "road trip planner",
    "digital travel pass",
    "spontaneous trip app",
    "camper trip planner",
    "AI travel app",
    "trip budgeting app",
    "Christian Dechant",
  ],
  alternates: {
    canonical: "/wayventure",
  },
  openGraph: {
    title,
    description,
    url: "https://christiandechant.de/wayventure",
    siteName: "Christian Dechant Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/wayventure-insight.png",
        width: 2569,
        height: 817,
        alt: "Screenshot of the WayVenture travel planner app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/wayventure-insight.png"],
  },
};

export default function WayVenturePage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WayVenture",
    alternateName: "WayVenture Travel Planner",
    description,
    url: "https://wayventure.de",
    image: "https://christiandechant.de/wayventure-insight.png",
    applicationCategory: "TravelApplication",
    operatingSystem: "Web",
    inLanguage: [ "en", "de" ],
    sameAs: [ "https://wayventure.de" ],
    author: {
      "@type": "Person",
      name: "Christian Dechant",
      url: "https://christiandechant.de",
    },
    creator: {
      "@type": "Person",
      name: "Christian Dechant",
      url: "https://christiandechant.de",
    },
    offers: {
      "@type": "Offer",
      category: "Freemium",
      availability: "https://schema.org/InStock",
    },
    featureList: wayVentureFeatures.map((feature) => feature.title),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wayVentureFaq.map((item) => ( {
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
        <section className="relative overflow-hidden bg-wv-surface py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-wv-primary blur-[120px]"/>
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-wv-light blur-[120px]"/>
          </div>

          <div className="container">
            <nav aria-label="Breadcrumb" className="mb-10 text-center">
              <Link href="/" className="font-body text-sm text-grey-10 hover:text-wv-primary">
                &larr; Back to Christian Dechant&apos;s Portfolio
              </Link>
            </nav>

            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-2xl shadow-lg shadow-wv-primary/20">
                <Image
                  src="/wayventure.png"
                  alt="WayVenture app icon"
                  width={ 192 }
                  height={ 192 }
                  className="h-full w-full object-cover"
                />
              </div>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-wv-primary/20 bg-white px-4 py-2 text-sm font-semibold text-wv-primary shadow-sm"
              >
                <i className="bx bxs-rocket"></i>
                Founder Project &middot; Live Product
              </span>

              <h1
                className="mt-6 font-header text-4xl font-extrabold uppercase leading-tight text-wv-dark sm:text-5xl lg:text-6xl"
              >
                <span className="bg-gradient-to-r from-wv-primary via-[#ffaf7b] to-[#f08235] bg-clip-text text-transparent">
                  WayVenture
                </span>
                { ' ' }&mdash; Your Smart Travel Planner
              </h1>

              <p className="mt-6 font-header text-xl font-medium text-wv-dark/70 sm:text-2xl">
                From the planning to the memory.
              </p>

              <p className="mx-auto mt-6 max-w-2xl font-body text-grey-10">
                WayVenture is a mobile-first travel planner app I designed and built independently,
                alongside my freelance development work. It helps travelers leave quickly and stay
                organized without preparation overhead, whether that&apos;s a spontaneous weekend
                road trip or a fully planned multi-country camper journey.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="https://wayventure.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-wv-primary px-8 py-4 text-center font-header font-bold text-white shadow-lg shadow-wv-primary/30 transition-all hover:scale-105 hover:bg-wv-light sm:w-auto"
                >
                  Try WayVenture Free <i className="bx bx-link-external ml-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story */ }
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-header text-3xl font-bold text-wv-dark sm:text-4xl">
                Why I Built WayVenture
              </h2>
              <div className="mt-6 space-y-4 font-body leading-relaxed text-grey-10">
                <p>
                  Most travel apps assume a trip is planned weeks in advance. In practice, a lot of
                  the best trips start with almost no planning at all, a free weekend, a full tank of
                  fuel, and a rough direction. WayVenture treats spontaneous trips and planned trips
                  as equally first-class: a spontaneous trip can be created in a single step, with the
                  name, start date, budget and status filled in automatically, while a planned trip
                  gets a full itinerary with waypoints and country-aware travel advisories.
                </p>
                <p>
                  The product is guided by a few simple principles: mobile-first thinking, fast access
                  to relevant information, minimizing preparation friction, staying offline-friendly
                  where possible, and shipping features incrementally instead of chasing a big-bang
                  launch. Underneath the travel planning is a properly engineered stack: a Next.js
                  and TypeScript frontend, a Django REST Framework backend, Stripe for subscription
                  billing, and a Dockerized, containerized deployment with an eye on security hardening
                  and scalability from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Deep-Dive */ }
        <section id="features" className="border-t border-grey-70 bg-wv-surface py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-header text-3xl font-bold text-wv-dark sm:text-4xl">
                What WayVenture Does
              </h2>
              <p className="mt-4 font-body text-grey-10">
                An all-in-one travel app: plan the trip, live through it, and keep the memory.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              { wayVentureFeatures.map((feature) => (
                <div
                  key={ feature.title }
                  className="relative rounded-2xl border border-wv-primary/10 bg-white p-6 shadow-sm"
                >
                  { feature.badge && (
                    <span
                      className="absolute right-4 top-4 rounded-full border border-wv-primary/20 bg-wv-primary/10 px-2 py-0.5 text-[10px] font-bold text-wv-primary"
                    >
                      { feature.badge }
                    </span>
                  ) }
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-wv-primary/10 text-wv-primary">
                    <i className={ `bx ${ feature.icon } text-3xl` }></i>
                  </div>
                  <h3 className="mt-5 font-header text-lg font-bold text-wv-dark">{ feature.title }</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-grey-10">
                    { feature.description }
                  </p>
                </div>
              )) }
            </div>
          </div>
        </section>

        {/* Screenshot showcase */ }
        <section className="py-20">
          <div className="container">
            <div className="relative mx-auto max-w-5xl">
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-wv-primary to-wv-light opacity-40 blur-lg"
              ></div>
              <Image
                src="/wayventure-insight.png"
                alt="Screenshot of the WayVenture travel app showing trip planning, digital travel pass, and budget overview"
                width={ 2569 }
                height={ 817 }
                className="relative w-full rounded-2xl border border-wv-primary/10 shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Roadmap */ }
        <section className="border-t border-grey-70 py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-header text-3xl font-bold text-wv-dark sm:text-4xl">
                What&apos;s Next
              </h2>
              <p className="mt-4 font-body text-grey-10">
                WayVenture ships incrementally. Here is what&apos;s on the roadmap.
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
              { wayVentureUpcoming.map((item) => (
                <span
                  key={ item.title }
                  className="inline-flex items-center gap-2 rounded-full border border-wv-primary/10 bg-wv-surface px-4 py-2 text-sm font-medium text-grey-10"
                >
                  <i className={ `bx ${ item.icon } text-base text-wv-primary` }></i>
                  { item.title }
                </span>
              )) }
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-wv-primary/20 bg-wv-surface p-8">
              <h3 className="font-header text-xl font-bold text-wv-dark">
                Document Safe <span className="text-wv-primary">(Digital Vault)</span>
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-grey-10">
                A future differentiator on the roadmap: a secure, encrypted place for travel and
                vehicle documents, with offline availability, expiration reminders, travel
                checklists and OCR support, so passports, visas and vehicle papers are one tap away
                even without a connection.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */ }
        <section className="border-t border-grey-70 bg-wv-surface py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-header text-3xl font-bold text-wv-dark sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mx-auto mt-10 max-w-3xl divide-y divide-grey-70">
              { wayVentureFaq.map((item) => (
                <details key={ item.question } className="group py-5">
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between font-header text-lg font-semibold text-wv-dark"
                  >
                    { item.question }
                    <i className="bx bx-chevron-down text-2xl text-wv-primary transition-transform group-open:rotate-180"></i>
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-grey-10">
                    { item.answer }
                  </p>
                </details>
              )) }
            </div>
          </div>
        </section>

        {/* CTA */ }
        <section className="border-t border-grey-70 py-20">
          <div className="container">
            <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-4 text-center sm:flex-row">
              <Link
                href="https://wayventure.de"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-wv-primary px-8 py-4 text-center font-header font-bold text-white shadow-lg shadow-wv-primary/30 transition-all hover:scale-105 hover:bg-wv-light sm:w-auto"
              >
                Visit WayVenture <i className="bx bx-link-external ml-1"></i>
              </Link>
              <Link
                href="/#contact"
                className="w-full rounded-xl border-2 border-wv-primary/20 px-8 py-4 text-center font-header font-bold text-wv-dark transition-all hover:border-wv-primary/50 hover:bg-wv-surface sm:w-auto"
              >
                Talk to Me About It
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
