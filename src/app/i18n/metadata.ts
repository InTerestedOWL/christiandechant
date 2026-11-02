import { Metadata } from "next";
import { getContent } from "../content";
import { siteUrl } from "../content/shared";
import { defaultLocale, Locale, locales } from "./config";
import { pagePath, Route } from "./routes";

/** Canonical URL plus hreflang alternates for a route. */
export function alternates(locale: Locale, route: Route): Metadata['alternates'] {
  return {
    canonical: pagePath(locale, route),
    languages: {
      ...Object.fromEntries(locales.map((l) => [ l, pagePath(l, route) ])),
      'x-default': pagePath(defaultLocale, route),
    },
  };
}

/**
 * Metadata for a sub page. Open Graph is repeated in full because a page's
 * `openGraph` replaces the one from the layout instead of merging with it.
 * Social preview images come from the route's opengraph-image file.
 */
export function pageMetadata(
  locale: Locale,
  route: Route,
  { title, description, keywords }: { title: string, description: string, keywords?: string[] },
): Metadata {
  const { meta } = getContent(locale);

  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: alternates(locale, route),
    openGraph: {
      title,
      description,
      url: `${ siteUrl }${ pagePath(locale, route) }`,
      siteName: meta.siteName,
      locale: meta.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
