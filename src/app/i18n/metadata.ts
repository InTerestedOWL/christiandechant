import { Metadata } from "next";
import { defaultLocale, Locale, locales } from "./config";

/** Canonical URL plus hreflang alternates for a page path such as '' or '/imprint'. */
export function alternates(locale: Locale, path: string): Metadata['alternates'] {
  return {
    canonical: `/${ locale }${ path }`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [ l, `/${ l }${ path }` ])),
      'x-default': `/${ defaultLocale }${ path }`,
    },
  };
}
