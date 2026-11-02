import { describe, expect, it } from "vitest";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "./pageJsonLd";

describe("breadcrumbJsonLd", () => {
  it("lists the trail with positions and absolute URLs", () => {
    expect(breadcrumbJsonLd([
      { name: "Home", path: "/en" },
      { name: "Freelancing", path: "/en/freelancing" },
    ])).toEqual({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://christiandechant.de/en" },
        { "@type": "ListItem", position: 2, name: "Freelancing", item: "https://christiandechant.de/en/freelancing" },
      ],
    });
  });
});

describe("faqJsonLd", () => {
  it("maps questions and answers", () => {
    expect(faqJsonLd([ { question: "Q?", answer: "A." } ])).toEqual({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Q?", acceptedAnswer: { "@type": "Answer", text: "A." } },
      ],
    });
  });
});

describe("serviceJsonLd", () => {
  it("describes a service provided by the business from the homepage graph", () => {
    expect(serviceJsonLd({
      name: "Freelance development",
      description: "Senior engineering",
      path: "/de/freelancing",
      serviceType: [ "Software development" ],
      areaServed: [ "Deutschland" ],
      locale: "de",
    })).toEqual({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Freelance development",
      description: "Senior engineering",
      url: "https://christiandechant.de/de/freelancing",
      serviceType: [ "Software development" ],
      areaServed: [ "Deutschland" ],
      availableLanguage: [ "de", "en" ],
      inLanguage: "de",
      provider: { "@id": "https://christiandechant.de/#business" },
    });
  });
});
