import { SiteContent } from "../interfaces";
import { Locale, locales } from "../i18n/config";
import { contactEmail, profileUrls, siteUrl, techStack } from "../content/shared";

const personId = `${ siteUrl }/#person`;
const businessId = `${ siteUrl }/#business`;
const websiteId = `${ siteUrl }/#website`;

const address = {
  "@type": "PostalAddress",
  streetAddress: "Langenbieberer Str. 14",
  postalCode: "36145",
  addressLocality: "Hofbieber",
  addressRegion: "Hessen",
  addressCountry: "DE",
};

function service(name: string, description: string) {
  return { "@type": "Offer", itemOffered: { "@type": "Service", name, description, provider: { "@id": businessId } } };
}

/** schema.org graph for the homepage: who Christian is, what he offers, where and in which languages. */
export function homepageJsonLd(locale: Locale, content: SiteContent) {
  const { meta } = content;
  const pageUrl = `${ siteUrl }/${ locale }`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Christian Dechant",
        url: pageUrl,
        image: `${ siteUrl }/Interestedowl.png`,
        email: `mailto:${ contactEmail }`,
        jobTitle: meta.jobTitle,
        description: meta.summary,
        address: { "@type": "PostalAddress", addressLocality: "Hofbieber", addressRegion: "Hessen", addressCountry: "DE" },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Hochschule Fulda",
          url: "https://www.hs-fulda.de",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Master of Science (M.Sc.) Applied Computer Science",
          recognizedBy: { "@type": "CollegeOrUniversity", name: "Hochschule Fulda" },
        },
        worksFor: [
          { "@id": businessId },
          { "@type": "Organization", name: "Strauss GmbH & Co. KG" },
        ],
        knowsAbout: [
          "Software engineering",
          "Web development",
          "AI consulting",
          "AI-agent-driven software development",
          "Model Context Protocol (MCP)",
          "Kubernetes security",
          "Zero Trust architecture",
          ...Object.values(techStack).flat(),
        ],
        knowsLanguage: [ "de", "en" ],
        sameAs: profileUrls,
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: "Christian Dechant – Software Engineering & AI Consulting",
        url: pageUrl,
        image: `${ siteUrl }/Interestedowl.png`,
        logo: `${ siteUrl }/Interestedowl.png`,
        description: meta.summary,
        email: contactEmail,
        address,
        areaServed: meta.areaServed.map((name) => ( { "@type": "Place", name } )),
        availableLanguage: [ "de", "en" ],
        founder: { "@id": personId },
        sameAs: profileUrls,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: content.offers.title,
          itemListElement: [
            ...content.offers.packages.map((pkg) => service(pkg.title, pkg.text)),
            service(content.offers.custom.title, content.offers.custom.text),
            ...content.aiConsulting.tracks.map((track) => service(track.title, track.text)),
            ...content.motto.pillars.filter((pillar) => pillar.cta).map((pillar) => service(pillar.title, pillar.text)),
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: meta.siteName,
        description: meta.description,
        inLanguage: [ ...locales ],
        publisher: { "@id": personId },
      },
      {
        "@type": "FAQPage",
        "@id": `${ pageUrl }#faq`,
        inLanguage: locale,
        mainEntity: content.faq.items.map((item) => ( {
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        } )),
      },
    ],
  };
}
