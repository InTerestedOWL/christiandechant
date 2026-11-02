import { describe, expect, it } from "vitest";
import { alternates, pageMetadata } from "./metadata";

describe("alternates", () => {
  it("builds canonical and hreflang links for a route", () => {
    expect(alternates("en", "wayventure")).toEqual({
      canonical: "/en/wayventure",
      languages: { de: "/de/wayventure", en: "/en/wayventure", "x-default": "/de/wayventure" },
    });
  });

  it("uses the locale root for the homepage", () => {
    expect(alternates("de", "home")?.canonical).toBe("/de");
  });
});

describe("pageMetadata", () => {
  const metadata = pageMetadata("en", "wayventure", {
    title: "WayVenture",
    description: "Travel planner",
    keywords: [ "travel" ],
  });

  it("sets title, description, keywords and alternates", () => {
    expect(metadata.title).toBe("WayVenture");
    expect(metadata.description).toBe("Travel planner");
    expect(metadata.keywords).toEqual([ "travel" ]);
    expect(metadata.alternates?.canonical).toBe("/en/wayventure");
  });

  it("repeats the site-wide Open Graph fields, since nested Open Graph replaces the layout's", () => {
    expect(metadata.openGraph).toEqual({
      title: "WayVenture",
      description: "Travel planner",
      url: "https://christiandechant.de/en/wayventure",
      siteName: "Christian Dechant",
      locale: "en_US",
      type: "website",
    });
  });

  it("adds a large-image Twitter card", () => {
    expect(metadata.twitter).toEqual({ card: "summary_large_image", title: "WayVenture", description: "Travel planner" });
  });
});
