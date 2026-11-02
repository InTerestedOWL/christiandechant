import { IOption } from "./interfaces";
import { Locale } from "./i18n/config";
import { pagePath } from "./i18n/routes";

/** What a call to action wants preselected in the contact form. Never personal data. */
export type ContactPrefill = { topic: string, package?: string };

/** Link to the contact form, e.g. /de?topic=support&package=premium#contact. */
export function contactPath(locale: Locale, prefill?: ContactPrefill): string {
  if ( !prefill ) {
    return pagePath(locale, 'home', 'contact');
  }
  const query = new URLSearchParams({ topic: prefill.topic });
  if ( prefill.package ) {
    query.set('package', prefill.package);
  }
  return `${ pagePath(locale, 'home') }?${ query.toString() }#contact`;
}

/**
 * Turns the query string into a form prefill. Only whitelisted values are accepted:
 * the topic must be a known scope, the package a known package of that topic.
 */
export function resolveContactPrefill(
  search: string,
  scopes: IOption[],
  packagesByTopic: Partial<Record<string, IOption[]>>,
  packageIntro: string,
): { scope: string, message: string } | null {
  const params = new URLSearchParams(search);
  const scope = scopes.find((option) => option.value === params.get('topic'));
  if ( !scope ) {
    return null;
  }
  const pkg = packagesByTopic[scope.value]?.find((option) => option.value === params.get('package'));

  return { scope: scope.value, message: pkg ? `${ packageIntro } ${ pkg.label }\n\n` : '' };
}
