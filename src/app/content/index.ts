import { SiteContent } from "../interfaces";
import { Locale } from "../i18n/config";
import { de } from "./de";
import { en } from "./en";

const content: Record<Locale, SiteContent> = { de, en };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
