import { notFound } from "next/navigation";
import Hero from "@/app/components/hero";
import Competencies from "@/app/components/competencies";
import WayVentureSpotlight from "@/app/components/wayventureSpotlight";
import Motto from "@/app/components/motto";
import Offers from "@/app/components/offers";
import AiConsulting from "@/app/components/aiConsulting";
import Experience from "@/app/components/experience";
import VoluntaryWork from "@/app/components/voluntaryWork";
import Contact from "@/app/components/contact";
import { getContent } from "@/app/content";
import { profileUrls, siteUrl } from "@/app/content/shared";
import { isLocale } from "@/app/i18n/config";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if ( !isLocale(locale) ) {
    notFound();
  }
  const content = getContent(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christian Dechant",
    url: siteUrl,
    image: `${ siteUrl }/Interestedowl.png`,
    jobTitle: content.meta.jobTitle,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Hochschule Fulda",
      url: "https://www.hs-fulda.de",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Master of Science (M.Sc.) Applied Computer Science",
    },
    description: content.meta.description,
    knowsAbout: [
      "AI strategy",
      "AI-agent-driven development",
      "Web development",
      "Mobile development",
    ],
    sameAs: profileUrls,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ { __html: JSON.stringify(personJsonLd) } }
      />
      <Hero locale={ locale } content={ content.hero }/>
      <Competencies content={ content.competencies }/>
      <WayVentureSpotlight locale={ locale } content={ content.wayventure }/>
      <Motto locale={ locale } content={ content.motto }/>
      <Offers locale={ locale } content={ content.offers }/>
      <AiConsulting locale={ locale } content={ content.aiConsulting }/>
      <Experience content={ content.experience }/>
      <VoluntaryWork content={ content.volunteering }/>
      <Contact locale={ locale } content={ content.contact }/>
    </main>
  );
}
