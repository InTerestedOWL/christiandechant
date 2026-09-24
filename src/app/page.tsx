import About from "@/app/components/about";
import WayVenture from "@/app/components/wayventure";
import Portfolio from "@/app/components/portfolio";
import Experience from "@/app/components/experience";
import FinishedProjects from "@/app/components/finishedprojects";
import Blog from "@/app/components/blog";
import Contact from "@/app/components/contact";
import SoftwareTechnologies from "./components/softwaretechnologies";
import Map from "./components/map";
import SubFooter from "./components/subfooter";
import {
  aiConsultingTracks,
  contactBoxes,
  experiences,
  skills,
  socials,
  startupConsultingTracks,
  technologies,
  voluntaryWorks
} from "./data";
import Offers from "./components/offers";
import AiConsulting from "@/app/components/aiConsulting";
import Consulting from "@/app/components/consulting";
import CustomerTestimonials from "@/app/components/testimonials";
import VoluntaryWork from "@/app/components/voluntaryWork";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christian Dechant",
    url: "https://christiandechant.de",
    image: "https://christiandechant.de/Interestedowl.png",
    jobTitle: "Freelance App, Web and Mobile Developer",
    description: "Freelance App, Web and Mobile Developer with 6+ years of experience building scalable software with C#, Next.js, TypeScript and more. Also consults businesses and developers on AI strategy and the migration to AI-agent-driven development.",
    knowsAbout: [
      "AI strategy",
      "AI-agent-driven development",
      "Web development",
      "Mobile development",
    ],
    sameAs: socials.map((social) => social.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ { __html: JSON.stringify(personJsonLd) } }
      />
      <About
        socials={ socials }
        skills={ skills }></About>
      <WayVenture></WayVenture>
      <CustomerTestimonials/>
      <VoluntaryWork
        voluntaryWorks={ voluntaryWorks }></VoluntaryWork>
      <Offers></Offers>
      <AiConsulting
        tracks={ aiConsultingTracks }></AiConsulting>
      <Consulting
        tracks={ startupConsultingTracks }></Consulting>

      <Portfolio></Portfolio>
      <SoftwareTechnologies
        technologies={ technologies }></SoftwareTechnologies>
      <Experience
        experiences={ experiences }></Experience>
      <FinishedProjects></FinishedProjects>
      <Blog></Blog>
      <Contact
        contactBoxes={ contactBoxes }></Contact>
      <Map></Map>
      <SubFooter></SubFooter>
    </>
  );
}
