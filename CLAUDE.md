# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio/homepage for Christian Dechant (christiandechant.de / christian-dechant.de), plus a marketing landing page for his side project "WayVenture" (a travel planner app). Built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.

## Commands

```
npm run dev      # start dev server with Turbopack
npm run build    # production build
npm run start    # run the production build
npm run lint     # next lint (currently broken: eslintrc config incompatible with ESLint 10)
npm test         # Vitest (unit tests for pure logic, `src/**/*.test.ts`)
```

Business logic (routing, metadata, JSON-LD builders, form logic) is developed test-first with Vitest; tests sit next to
the file they cover. UI components are not unit-tested.

## Architecture

### Bilingual routing (de / en)

All pages live under `src/app/[locale]/` (`/de`, `/en`); `src/proxy.ts` redirects any path without a locale prefix (e.g.
`/`, `/imprint`) to the best match from `Accept-Language` (default `de`). Locale helpers are in `src/app/i18n/` (
`config.ts` for negotiation/path switching, `routes.ts` for the route registry, `metadata.ts` for canonical + hreflang
alternates and `pageMetadata()` for sub pages). `[locale]/layout.tsx` is the root layout (sets `<html lang>`, metadata)
— there is no `src/app/layout.tsx`.

Every page is registered in `routes` (`i18n/routes.ts`); slugs are English in both locales. Build internal links with
`pagePath(locale, route, anchor?)` instead of string templates. The header marks the current page via `isActivePath`;
`header.nav` entries are links or groups (`INavGroup`), rendered as an accessible disclosure dropdown on desktop.

Links to the contact form go through `contactPath(locale, { topic, package? })` (`src/app/contactPrefill.ts`), e.g.
`/de?topic=support&package=premium#contact`. The form only accepts whitelisted values (`topic` = a scope value from
`contact.form.scopes`, `package` = an id from `packagesByTopic` passed by the homepage) and never personal data.
Every merge to `main` deploys, so only link pages that exist.

### Content-driven single page

`src/app/[locale]/page.tsx` composes the homepage from section components in `src/app/components/` (Hero, Competencies,
WayVentureSpotlight, Motto, Offers, AiConsulting, Experience, VoluntaryWork, Contact). The design follows
`mock/new mock.html` 1:1.

**`src/app/content/de/` and `en/`** are the single source of truth for all copy, split into one file per area (`meta`,
`common` for header/footer/cookie banner/404, `home`, `wayventurePage`, `legal`). Never name one of these files
`layout`, `page`, `route` etc. — Next treats those as route files under `src/app/`. Each file is typed as a
`Pick<SiteContent, …>` and `index.ts` merges them into a `SiteContent` (`src/app/interfaces.ts`). `getContent(locale)` in
`content/index.ts` picks the locale. New pages get their own file in both folders. Language-independent values (URLs,
e-mail, socials) live in `content/shared.ts`. When changing site text, update **both** locales. Add new fields to
`SiteContent` first.

Shared pieces live under `src/app/components/shared/` (`materialIcon`, `sectionHeading`, `accent` class maps, `richText`
for `**bold**`/`*italic*` in content strings, `languageSwitch`, plus the sub-page kit: `pageHero` (breadcrumbs + the page's
only h1), `breadcrumbs`, `featureCard`, `iconItemGrid`, `calloutBox`, `processTimeline`, `techStack`). Sub pages close with `components/ctaBanner.tsx`;
shared JSON-LD builders (`breadcrumbJsonLd`, `faqJsonLd`, `serviceJsonLd`) live in `seo/pageJsonLd.ts`. Legal pages
render through `components/legalPage.tsx`. `[locale]/freelancing/page.tsx` is the reference layout for new sub pages.

### Accessibility (WCAG 2.1 AA)

The site sells WCAG 2.1 AA compliance, so it must meet it itself. Every page must score 100 in the Lighthouse
accessibility audit. Rules: one h1 per page, sections use `aria-labelledby` on their h2 (`SectionHeading` takes an
`id`), lists of cards/steps are real `ul`/`ol`, icons are `aria-hidden` (`Icon` does this), links opening a new tab carry
the `a11y.newTab` screen-reader hint, and text never uses `text-slate-400` or lighter on white (use `slate-500`+; white
text needs `amber-700`+ backgrounds). `ClientLayout` provides the skip link to `#main-content`; `globals.css` sets the
`:focus-visible` outline and honours `prefers-reduced-motion`. English phrases inside German text get `lang="en"`.

`src/app/context.tsx` provides `useStatus`, used to lock body scroll while the mobile drawer is open (
`ClientLayout.tsx`).

### Routes

- `[locale]/freelancing` — freelancing page (engagement models, working model, process, JagdTausch case study, FAQ)
  with `Service` + `BreadcrumbList` + `FAQPage` JSON-LD.
- `[locale]/packages` — web packages: cards (`components/packageGrid.tsx`, shared with the homepage `offers` section,
  which stays the single source of the package data), comparison table, FAQ; `Service` JSON-LD with an `OfferCatalog`
  (never prices).
- `[locale]/support` — support packages (Basic/Standard/Premium, `components/supportPackageGrid.tsx`) with profile,
  services and response time — never prices, hours or fixed response times; services, process, FAQ; `Service` JSON-LD
  with an `OfferCatalog`.
- `[locale]/wayventure` — marketing page for WayVenture with JSON-LD (`SoftwareApplication` + `FAQPage`).
- `[locale]/imprint`, `[locale]/privacy-policy` — legal pages. Keep them in sync with any new third-party service or
  data processing.
- `src/app/sitemap.ts` — generates `sitemap.xml` for all locales; add new routes to its `pages` list (by route key).

### SEO & GEO (AI discoverability)

- `src/app/seo/structuredData.ts` builds the homepage JSON-LD `@graph` (Person, ProfessionalService with offer catalog,
  WebSite, FAQPage) from the locale content.
- `meta.summary` in the locale files is the plain, factual self-description reused in JSON-LD and `llms.txt`; keep it
  accurate.
- `src/app/llms.txt/route.ts` serves `/llms.txt`, generated from the English content.
- Social preview images are generated by `[locale]/opengraph-image.tsx` and `[locale]/wayventure/opengraph-image.tsx`
  (rendered by `seo/ogImage.tsx`); don't set `openGraph.images` in metadata.
- The homepage FAQ (`faq` in content, `components/faq.tsx`) feeds the FAQPage markup — no public prices.

### API routes (`src/app/api/`)

- `send-mail/route.ts` — sends contact-form submissions via nodemailer (SMTP configured through `SMTP_SERVER_HOST`/`SMTP_SERVER_USERNAME`/`SMTP_SERVER_PASSWORD`/`SITE_MAIL_RECIEVER` env vars), sending both a notification mail to the site owner and a confirmation mail to the sender using inline HTML email templates.
- `request-videos/route.ts` — proxies the YouTube Data API (`YOUTUBE_API_KEY`/`YOUTUBE_CHANNELID` env vars) to fetch the latest channel videos for the Blog section.

Both are `'use server'` route handlers reading secrets from `process.env`; there are no `.env` files checked in, so these must be supplied at runtime/deploy time.

### Styling

Tailwind v4, configured CSS-first in `src/app/globals.css` (no `tailwind.config.ts`). Palette: Tailwind `slate`/
`indigo`/`amber`/`emerald`/`rose` plus the custom `brand-*` scale. Fonts: Geist + JetBrains Mono via
`next/font/google` (self-hosted at build time). Icons: Material Symbols as a self-hosted subset
(`src/app/fonts/material-symbols-subset.woff2`, loaded via `next/font/local`) — **after using a new icon name, run
`npm run icons`** to regenerate the subset, otherwise the icon renders as plain text. Do not load fonts or icons from
external CDNs (GDPR). The mock was written for Tailwind v3, so
`--shadow-sm` is overridden to v3's value and responsive `text-*` sizes that reset line height in v3 need an explicit
`sm:leading-*` to match.

### Deployment

Next.js is configured with `output: 'standalone'` (`next.config.ts`). The Dockerfile is the standard multi-stage Next.js standalone build. `.github/workflows/pipeline.yml` builds and pushes the Docker image to Docker Hub on every push to `main`, then dispatches a `trigger-workflow` event to a separate `YAML_Infrastructure` repo which handles actually deploying to the server — this repo has no deploy step of its own beyond publishing the image.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
