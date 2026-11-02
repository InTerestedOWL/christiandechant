import { describe, expect, it } from "vitest";
import { contactPath, resolveContactPrefill } from "./contactPrefill";

describe("contactPath", () => {
  it("links to the contact section without a prefill", () => {
    expect(contactPath("de")).toBe("/de#contact");
  });

  it("adds the topic as query parameter", () => {
    expect(contactPath("en", { topic: "ai" })).toBe("/en?topic=ai#contact");
  });

  it("adds topic and package", () => {
    expect(contactPath("de", { topic: "support", package: "premium" })).toBe("/de?topic=support&package=premium#contact");
  });
});

describe("resolveContactPrefill", () => {
  const scopes = [
    { value: "freelance", label: "Freelance" },
    { value: "support", label: "Support package" },
  ];
  const packages = {
    support: [ { value: "basic", label: "Basic" }, { value: "premium", label: "Premium" } ],
  };
  const intro = "Interested in:";

  it("returns nothing without parameters", () => {
    expect(resolveContactPrefill("", scopes, packages, intro)).toBeNull();
  });

  it("ignores unknown topics", () => {
    expect(resolveContactPrefill("?topic=<script>", scopes, packages, intro)).toBeNull();
  });

  it("selects a known topic", () => {
    expect(resolveContactPrefill("?topic=freelance", scopes, packages, intro)).toEqual({ scope: "freelance", message: "" });
  });

  it("prefills the message with a known package of the topic", () => {
    expect(resolveContactPrefill("?topic=support&package=premium", scopes, packages, intro))
      .toEqual({ scope: "support", message: "Interested in: Premium\n\n" });
  });

  it("ignores unknown packages", () => {
    expect(resolveContactPrefill("?topic=support&package=gold", scopes, packages, intro))
      .toEqual({ scope: "support", message: "" });
  });

  it("ignores packages that belong to another topic", () => {
    expect(resolveContactPrefill("?topic=freelance&package=premium", scopes, packages, intro))
      .toEqual({ scope: "freelance", message: "" });
  });
});
