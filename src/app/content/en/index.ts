import { SiteContent } from "../../interfaces";
import { metaContent } from "./meta";
import { commonContent } from "./common";
import { homeContent } from "./home";
import { wayventurePageContent } from "./wayventurePage";
import { legalContent } from "./legal";

export const en: SiteContent = {
  ...metaContent,
  ...commonContent,
  ...homeContent,
  ...wayventurePageContent,
  ...legalContent,
};
