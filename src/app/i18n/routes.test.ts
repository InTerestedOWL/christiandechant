import { describe, expect, it } from "vitest";
import { isActivePath, pagePath } from "./routes";

describe("pagePath", () => {
  it("builds the locale root for the homepage", () => {
    expect(pagePath("de", "home")).toBe("/de");
  });

  it("prefixes sub pages with the locale", () => {
    expect(pagePath("en", "wayventure")).toBe("/en/wayventure");
    expect(pagePath("de", "privacy")).toBe("/de/privacy-policy");
  });

  it("appends an anchor", () => {
    expect(pagePath("de", "home", "contact")).toBe("/de#contact");
    expect(pagePath("en", "wayventure", "faq")).toBe("/en/wayventure#faq");
  });
});

describe("isActivePath", () => {
  it("marks the exact page as active", () => {
    expect(isActivePath("/de/wayventure", "/de/wayventure")).toBe(true);
  });

  it("marks a parent page as active on nested pages", () => {
    expect(isActivePath("/de/wayventure/details", "/de/wayventure")).toBe(true);
  });

  it("does not match pages that merely share a prefix", () => {
    expect(isActivePath("/de/wayventure-old", "/de/wayventure")).toBe(false);
  });

  it("marks the homepage only on the homepage itself", () => {
    expect(isActivePath("/de", "/de")).toBe(true);
    expect(isActivePath("/de/wayventure", "/de")).toBe(false);
  });

  it("ignores a trailing slash", () => {
    expect(isActivePath("/de/wayventure/", "/de/wayventure")).toBe(true);
  });

  it("never marks anchor links as active", () => {
    expect(isActivePath("/de", "/de#contact")).toBe(false);
  });
});
