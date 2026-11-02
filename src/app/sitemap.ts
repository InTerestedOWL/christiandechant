import type { MetadataRoute } from "next";
import { siteUrl } from "./content/shared";
import { locales } from "./i18n/config";
import { pagePath, Route } from "./i18n/routes";

const pages: { route: Route, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number }[] = [
  { route: 'home', changeFrequency: 'weekly', priority: 1 },
  { route: 'wayventure', changeFrequency: 'weekly', priority: 0.9 },
  { route: 'imprint', changeFrequency: 'yearly', priority: 0.3 },
  { route: 'privacy', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ route, changeFrequency, priority }) => locales.map((locale) => ({
    url: `${ siteUrl }${ pagePath(locale, route) }`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [ l, `${ siteUrl }${ pagePath(l, route) }` ])),
    },
  })));
}
