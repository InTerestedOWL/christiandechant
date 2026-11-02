import { getContent } from "@/app/content";
import { defaultLocale, isLocale } from "@/app/i18n/config";
import { ogImageSize, renderOgImage } from "@/app/seo/ogImage";

export const size = ogImageSize;
export const contentType = 'image/png';
export const alt = 'Web packages by Christian Dechant';

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { packagesPage: page, offers } = getContent(isLocale(locale) ? locale : defaultLocale);

  return renderOgImage({
    title: page.hero.eyebrow,
    tagline: `${ page.hero.title.replace(/\s*—$/, '') } – ${ page.hero.titleHighlight }`,
    subline: 'Christian Dechant · christiandechant.de',
    chips: offers.packages.slice(0, 3).map((pkg) => pkg.title),
  });
}
