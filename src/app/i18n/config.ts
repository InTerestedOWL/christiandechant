export const locales = [ 'de', 'en' ] as const;

export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'de';

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/**
 * Picks the best supported locale from an Accept-Language header,
 * honouring the q-weights and falling back to the default locale.
 */
export function negotiateLocale(acceptLanguage: string | null | undefined): Locale {
  if ( !acceptLanguage ) {
    return defaultLocale;
  }

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [ tag, ...params ] = part.trim().split(';');
      const quality = params.find((param) => param.trim().startsWith('q='));
      return {
        language: tag.trim().toLowerCase().split('-')[0],
        q: quality ? Number.parseFloat(quality.trim().slice(2)) || 0 : 1,
      };
    })
    .filter((entry) => entry.language && entry.q > 0)
    .sort((a, b) => b.q - a.q);

  return ranked.find((entry) => isLocale(entry.language))?.language as Locale ?? defaultLocale;
}

/** Replaces the locale segment of a pathname, e.g. /de/imprint -> /en/imprint. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split('/');
  if ( isLocale(segments[1]) ) {
    segments[1] = target;
    return segments.join('/') || `/${ target }`;
  }
  return `/${ target }${ pathname === '/' ? '' : pathname }`;
}
