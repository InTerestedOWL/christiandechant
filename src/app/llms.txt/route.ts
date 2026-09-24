import { getContent } from "../content";
import { contactEmail, profileUrls, siteUrl, techStack, wayVentureUrl } from "../content/shared";

export const dynamic = 'force-static';

/**
 * /llms.txt (https://llmstxt.org): a compact, factual Markdown summary for AI assistants and crawlers.
 * Generated from the same content as the website, so it never drifts out of date.
 */
export function GET() {
  const en = getContent('en');
  const de = getContent('de');
  const list = (items: string[]) => items.map((item) => `- ${ item }`).join('\n');

  const body = `# Christian Dechant

> ${ en.meta.summary }

German version: ${ de.meta.summary }

## Key facts

${ list([
    'Role: Freelance Senior Full-Stack Developer & AI Consultant',
    'Education: M.Sc. Applied Computer Science (Angewandte Informatik), Hochschule Fulda',
    'Experience: 9+ years of software development',
    'Location: Hofbieber near Fulda, Hesse, Germany – remote-first for clients in Germany, Austria, Switzerland and internationally',
    'Languages: German, English',
    `Contact: ${ contactEmail } or ${ siteUrl }/en#contact (reply within 24 hours)`,
    'Pricing: individual quotes after a short initial call, no public price list',
  ]) }

## Services

${ list([
    ...en.offers.packages.map((pkg) => `${ pkg.title }: ${ pkg.text }`),
    `${ en.offers.custom.title } ${ en.offers.custom.text }`,
    ...en.aiConsulting.tracks.map((track) => `${ track.title }: ${ track.text }`),
    ...en.motto.pillars.filter((pillar) => pillar.cta).map((pillar) => `${ pillar.title }: ${ pillar.text }`),
  ]) }

## Tech stack

${ list(Object.entries(techStack).map(([ group, items ]) => `${ en.competencies.stackGroups[group as keyof typeof techStack] }: ${ items.join(', ') }`)) }

## Career

${ list(en.experience.items.map((item) => `${ item.title } (${ item.period }): ${ item.text }`)) }

## FAQ

${ en.faq.items.map((item) => `### ${ item.question }\n\n${ item.answer }`).join('\n\n') }

## Pages

- [Homepage (English)](${ siteUrl }/en): services, experience, contact
- [Startseite (Deutsch)](${ siteUrl }/de): Leistungen, Werdegang, Kontakt
- [WayVenture](${ siteUrl }/en/wayventure): founder project, a travel planner app (${ wayVentureUrl })
- [Master’s thesis (PDF, German)](${ siteUrl }/Masterthesis.pdf): Effectiveness of Zero Trust architectures in Kubernetes clusters
- [Imprint](${ siteUrl }/de/imprint)

## Profiles

${ list(profileUrls) }
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
