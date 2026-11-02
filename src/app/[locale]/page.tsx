import { notFound } from "next/navigation";
import Hero from "@/app/components/hero";
import WhyMe from "@/app/components/whyMe";
import Competencies from "@/app/components/competencies";
import WayVentureSpotlight from "@/app/components/wayventureSpotlight";
import Motto from "@/app/components/motto";
import Offers from "@/app/components/offers";
import AiConsulting from "@/app/components/aiConsulting";
import Faq from "@/app/components/faq";
import Contact from "@/app/components/contact";
import { getContent } from "@/app/content";
import { isLocale } from "@/app/i18n/config";
import { homepageJsonLd } from "@/app/seo/structuredData";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ { __html: JSON.stringify(homepageJsonLd(locale, content)) } }
      />
      <Hero locale={ locale } content={ content.hero }/>
      <WhyMe locale={ locale } content={ content.whyMe }/>
      <Competencies locale={ locale } content={ content.competencies }/>
      <WayVentureSpotlight locale={ locale } content={ content.wayventure } newTabHint={ content.a11y.newTab }/>
      <Motto locale={ locale } content={ content.motto }/>
      <Offers locale={ locale } content={ content.offers }/>
      <AiConsulting locale={ locale } content={ content.aiConsulting }/>
      <Faq content={ content.faq }/>
      <Contact locale={ locale } content={ content.contact }/>
    </main>
  );
}
