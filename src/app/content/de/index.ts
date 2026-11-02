import { SiteContent } from "../../interfaces";
import { metaContent } from "./meta";
import { commonContent } from "./common";
import { homeContent } from "./home";
import { wayventurePageContent } from "./wayventurePage";
import { legalContent } from "./legal";
import { freelancingPageContent } from "./freelancing";
import { packagesPageContent } from "./packages";
import { supportPageContent } from "./support";
import { aiDevelopmentPageContent } from "./aiDevelopment";

export const de: SiteContent = {
  ...metaContent,
  ...commonContent,
  ...homeContent,
  ...wayventurePageContent,
  ...legalContent,
  ...freelancingPageContent,
  ...packagesPageContent,
  ...supportPageContent,
  ...aiDevelopmentPageContent,
};
