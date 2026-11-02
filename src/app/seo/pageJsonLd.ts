import { Locale, locales } from "../i18n/config";
import { siteUrl } from "../content/shared";
import { businessId, personId, websiteId } from "./structuredData";

const context = "https://schema.org";

/** Breadcrumb trail of a sub page; paths are site-relative, e.g. /de/freelancing. */
export function breadcrumbJsonLd(trail: { name: string, path: string }[]) {
  return {
    "@context": context,
    "@type": "BreadcrumbList",
    itemListElement: trail.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${ siteUrl }${ path }`,
    })),
  };
}

/** A typed page (e.g. AboutPage, ContactPage) about the person, linked to the website node of the homepage graph. */
export function webPageJsonLd({ type, name, description, path, locale }: {
  type: 'AboutPage' | 'ContactPage',
  name: string,
  description: string,
  path: string,
  locale: Locale,
}) {
  return {
    "@context": context,
    "@type": type,
    name,
    description,
    url: `${ siteUrl }${ path }`,
    inLanguage: locale,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
  };
}

export function faqJsonLd(items: { question: string, answer: string }[]) {
  return {
    "@context": context,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** A service page, linked to the business node of the homepage graph. Offers are listed without prices. */
export function serviceJsonLd({ name, description, path, serviceType, areaServed, locale, offers }: {
  name: string,
  description: string,
  path: string,
  serviceType: string[],
  areaServed: string[],
  locale: Locale,
  offers?: { name: string, items: { name: string, description: string }[] },
}) {
  return {
    "@context": context,
    "@type": "Service",
    name,
    description,
    url: `${ siteUrl }${ path }`,
    serviceType,
    areaServed,
    availableLanguage: [ ...locales ],
    inLanguage: locale,
    provider: { "@id": businessId },
    ...(offers && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: offers.name,
        itemListElement: offers.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.name, description: item.description },
        })),
      },
    }),
  };
}
