import { Locale } from "./config";

/** All page routes, relative to the locale root. Slugs are English in every locale. */
export const routes = {
  home: '',
  freelancing: '/freelancing',
  wayventure: '/wayventure',
  imprint: '/imprint',
  privacy: '/privacy-policy',
} as const;

export type Route = keyof typeof routes;

/** Absolute path of a page for a locale, e.g. pagePath('de', 'wayventure', 'faq') -> /de/wayventure#faq. */
export function pagePath(locale: Locale, route: Route, anchor?: string): string {
  return `/${ locale }${ routes[route] }${ anchor ? `#${ anchor }` : '' }`;
}

function trimTrailingSlash(path: string): string {
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

/**
 * Whether a navigation link points to the current page (or one of its parents).
 * Anchor links are never active; the locale root only matches itself.
 */
export function isActivePath(pathname: string, href: string): boolean {
  if ( href.includes('#') ) {
    return false;
  }
  const current = trimTrailingSlash(pathname);
  const target = trimTrailingSlash(href);
  const isLocaleRoot = target.split('/').length === 2;

  if ( isLocaleRoot ) {
    return current === target;
  }
  return current === target || current.startsWith(`${ target }/`);
}
