import { getContent } from "@/app/content";
import { defaultLocale, isLocale } from "@/app/i18n/config";
import { ogImageSize, renderOgImage } from "@/app/seo/ogImage";

export const size = ogImageSize;
export const contentType = 'image/png';
export const alt = 'Christian Dechant – Freelance Full-Stack Developer & AI Consultant';

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { hero, meta } = getContent(isLocale(locale) ? locale : defaultLocale);
  const [ years, , degree ] = hero.stats;

  return renderOgImage({
    title: hero.headline.replace(/\s*—\s*$/, ''),
    tagline: meta.ogTagline,
    subline: `${ degree.value } ${ degree.label } · ${ years.value }`,
    chips: [ 'Next.js', 'Nuxt', 'C# .NET', 'Laravel', 'Claude Code & MCP' ],
  });
}
