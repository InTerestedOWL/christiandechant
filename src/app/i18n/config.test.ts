import { describe, expect, it } from "vitest";
import { negotiateLocale, switchLocalePath } from "./config";

describe("negotiateLocale", () => {
  it("falls back to the default locale without a header", () => {
    expect(negotiateLocale(null)).toBe("de");
  });

  it("picks the supported language with the highest q-weight", () => {
    expect(negotiateLocale("fr;q=1, en-US;q=0.9, de;q=0.5")).toBe("en");
  });
});

describe("switchLocalePath", () => {
  it("replaces the locale segment", () => {
    expect(switchLocalePath("/de/imprint", "en")).toBe("/en/imprint");
  });
});
