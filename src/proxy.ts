import { NextRequest, NextResponse } from "next/server";
import { isLocale, negotiateLocale } from "./app/i18n/config";

/**
 * Redirects every page request without a locale prefix to the best matching
 * locale, e.g. / -> /de or /imprint -> /en/imprint (keeps old links working).
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if ( isLocale(pathname.split('/')[1]) ) {
    return NextResponse.next();
  }

  const locale = negotiateLocale(request.headers.get('accept-language'));
  const url = request.nextUrl.clone();
  url.pathname = `/${ locale }${ pathname === '/' ? '' : pathname }`;

  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next internals and any file with an extension (public assets, sitemap.xml, robots.txt).
  matcher: [ '/((?!api|_next|.*\\..*).*)' ],
};
