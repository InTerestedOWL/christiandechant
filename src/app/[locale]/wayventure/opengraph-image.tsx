import { getContent } from "@/app/content";
import { defaultLocale, isLocale } from "@/app/i18n/config";
import { ogImageSize, renderOgImage } from "@/app/seo/ogImage";

export const size = ogImageSize;
export const contentType = 'image/png';
export const alt = 'WayVenture – travel planner app by Christian Dechant';

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { wayventurePage: page } = getContent(isLocale(locale) ? locale : defaultLocale);

  return renderOgImage({
    title: page.title,
    tagline: page.subtitle,
    subline: `${ page.badge } · wayventure.de`,
    chips: page.features.slice(0, 3).map((feature) => feature.title),
    variant: 'amber',
  });
}
