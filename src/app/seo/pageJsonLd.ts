import { Locale, locales } from "../i18n/config";
import { siteUrl } from "../content/shared";
import { businessId } from "./structuredData";

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

/** A service page, linked to the business node of the homepage graph. */
export function serviceJsonLd({ name, description, path, serviceType, areaServed, locale }: {
  name: string,
  description: string,
  path: string,
  serviceType: string[],
  areaServed: string[],
  locale: Locale,
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
  };
}
