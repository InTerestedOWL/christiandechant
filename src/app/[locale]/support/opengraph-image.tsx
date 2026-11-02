import { getContent } from "@/app/content";
import { defaultLocale, isLocale } from "@/app/i18n/config";
import { ogImageSize, renderOgImage } from "@/app/seo/ogImage";

export const size = ogImageSize;
export const contentType = 'image/png';
export const alt = 'Support & maintenance by Christian Dechant';

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { supportPage: page } = getContent(isLocale(locale) ? locale : defaultLocale);

  return renderOgImage({
    title: page.hero.eyebrow,
    tagline: `${ page.hero.title.replace(/\s*—$/, '') } – ${ page.hero.titleHighlight }`,
    subline: 'Christian Dechant · christiandechant.de',
    chips: page.packages.items.map((pkg) => pkg.title),
  });
}
