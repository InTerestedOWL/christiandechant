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
    ...en.freelancingPage.models.items.map((model) => `Freelance – ${ model.title }: ${ model.text }`),
  ]) }

## Tech stack

${ list(Object.entries(techStack).map(([ group, items ]) => `${ en.competencies.stackGroups[group as keyof typeof techStack] }: ${ items.join(', ') }`)) }

## Career

${ list(en.experience.items.map((item) => `${ item.title } (${ item.period }): ${ item.text }`)) }

## FAQ

${ en.faq.items.map((item) => `### ${ item.question }\n\n${ item.answer }`).join('\n\n') }

## Pages

- [Homepage (English)](${ siteUrl }/en): positioning, services overview, FAQ, contact
- [Startseite (Deutsch)](${ siteUrl }/de): Positionierung, Leistungsüberblick, FAQ, Kontakt
- [Freelancing](${ siteUrl }/en/freelancing): engagement models, working model, process, JagdTausch case study
- [Web packages](${ siteUrl }/en/packages): four website packages, feature comparison, standards included in every package, process, FAQ
- [Support & maintenance](${ siteUrl }/en/support): support packages (Basic, Standard, Premium) for websites and software: monitoring, security and dependency updates, functional testing, defined response times
- [AI development](${ siteUrl }/en/ai-development): AI features in software, custom agents and MCP servers, AI audit & governance, 1:1 coaching for developers
- [Approach](${ siteUrl }/en/approach): from idea to production in five phases (scoping, prototype, MVP, go-live, operations), definition of done, compliance (GDPR with DPA, EU hosting, WCAG 2.1 AA, AI governance)
- [About](${ siteUrl }/en/about): career, master’s thesis, values, volunteer fire brigade
- [Contact](${ siteUrl }/en/contact): contact form and what happens after a request
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
