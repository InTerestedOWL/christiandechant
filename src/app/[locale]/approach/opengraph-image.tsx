import { getContent } from "@/app/content";
import { defaultLocale, isLocale } from "@/app/i18n/config";
import { ogImageSize, renderOgImage } from "@/app/seo/ogImage";

export const size = ogImageSize;
export const contentType = 'image/png';
export const alt = 'Approach of Christian Dechant: from idea to production-ready product';

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { approachPage: page } = getContent(isLocale(locale) ? locale : defaultLocale);

  return renderOgImage({
    title: page.hero.eyebrow,
    tagline: `${ page.hero.title.replace(/\s*—$/, '') } – ${ page.hero.titleHighlight }`,
    subline: 'Christian Dechant · christiandechant.de',
    chips: page.phases.items.slice(0, 4).map((phase) => phase.title),
  });
}
