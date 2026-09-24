import type { MetadataRoute } from "next";
import { siteUrl } from "./content/shared";
import { locales } from "./i18n/config";

const pages: { path: string, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/wayventure', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/imprint', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) => locales.map((locale) => ({
    url: `${ siteUrl }/${ locale }${ path }`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [ l, `${ siteUrl }/${ l }${ path }` ])),
    },
  })));
}
