import { notFound } from "next/navigation";
import Hero from "@/app/components/hero";
import Competencies from "@/app/components/competencies";
import WayVentureSpotlight from "@/app/components/wayventureSpotlight";
import Motto from "@/app/components/motto";
import Offers from "@/app/components/offers";
import AiConsulting from "@/app/components/aiConsulting";
import Experience from "@/app/components/experience";
import VoluntaryWork from "@/app/components/voluntaryWork";
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
      <Competencies content={ content.competencies }/>
      <WayVentureSpotlight locale={ locale } content={ content.wayventure }/>
      <Motto locale={ locale } content={ content.motto }/>
      <Offers locale={ locale } content={ content.offers }/>
      <AiConsulting locale={ locale } content={ content.aiConsulting }/>
      <Experience content={ content.experience }/>
      <VoluntaryWork content={ content.volunteering }/>
      <Faq content={ content.faq }/>
      <Contact locale={ locale } content={ content.contact }/>
    </main>
  );
}
