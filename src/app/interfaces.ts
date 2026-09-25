export type StackGroup = 'frontend' | 'backend' | 'data' | 'cloud' | 'quality' | 'ai';

export type Accent = 'brand' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'slate';

export interface ISocial {
  name: string,
  icon: string,
  url: string,
}

export interface INavLink {
  href: string,
  title: string,
  mobileTitle: string,
  highlight?: 'amber' | 'rose',
  badge?: string,
}

export interface IStat {
  value: string,
  label: string,
  accent?: Accent,
}

export interface IIconItem {
  icon: string,
  title: string,
  text: string,
}

export interface ICompetency {
  icon: string,
  accent: Accent,
  title: string,
  text: string,
  tags: string[],
}

export interface IPillar {
  badge: string,
  icon: string,
  accent: Accent,
  title: string,
  text: string,
  points?: string[],
  cta?: string,
}

export interface IOfferPackage {
  tier: string,
  title: string,
  text: string,
  features: string[],
  featured?: boolean,
}

export interface IConsultingTrack {
  badge: string,
  icon: string,
  accent: Accent,
  title: string,
  text: string,
  items: IIconItem[],
  cta: string,
}

export interface IExperience {
  title: string,
  period: string,
  text: string,
  accent: Accent,
}

export interface IHighlightBox {
  icon: string,
  eyebrow: string,
  meta: string,
  title: string,
  text: string,
  href?: string,
  linkLabel?: string,
}

export interface IValue {
  label: string,
  value: string,
}

export interface ITestimonial {
  name: string,
  role: string,
  text: string,
  /** Avatar text; defaults to the initials of `name`. */
  initials?: string,
}

export interface IContactItem {
  label: string,
  text: string,
  icon: string,
  accent: Accent,
  href?: string,
}

export interface IOption {
  value: string,
  label: string,
}

export interface IMessage {
  name: string,
  email: string,
  text: string,
  lang?: string,
  /** Honeypot: stays empty for humans. */
  website?: string,
  /** Timestamp when the form was rendered, used to detect instant bot submissions. */
  startedAt?: number,
}

export interface IWayVentureFeature {
  icon: string,
  title: string,
  description: string,
  badge?: string,
}

export interface IWayVentureUpcoming {
  icon: string,
  title: string,
}

export interface IWayVentureFaq {
  question: string,
  answer: string,
}

export interface ILegalSection {
  heading: string,
  paragraphs?: string[],
  list?: string[],
  subsections?: ILegalSection[],
}

export interface ILegalPage {
  metaTitle: string,
  metaDescription: string,
  eyebrow: string,
  title: string,
  intro?: string,
  updated: string,
  sections: ILegalSection[],
}

export interface ISectionHeading {
  eyebrow: string,
  icon: string,
  title: string,
  text: string,
}

export interface SiteContent {
  meta: {
    title: string,
    description: string,
    ogLocale: string,
    siteName: string,
    keywords: string[],
    jobTitle: string,
    /** Plain, factual self-description for search engines and AI assistants (JSON-LD, llms.txt). */
    summary: string,
    /** Second line on the generated social preview image. */
    ogTagline: string,
    areaServed: string[],
  },
  header: {
    tagline: string,
    badge: string,
    nav: INavLink[],
    cta: string,
    mobileCta: string,
    drawerTitle: string,
    openMenu: string,
    closeMenu: string,
    languageLabel: string,
  },
  hero: {
    status: string,
    headline: string,
    headlineHighlight: string,
    intro: string,
    primaryCta: string,
    secondaryCta: string,
    imageAlt: string,
    stats: IStat[],
    code: {
      role: string,
      badge: string,
      credentials: string[],
      mantra: string,
    },
    teaserTitle: string,
    teaserText: string,
  },
  competencies: ISectionHeading & {
    badge: string,
    items: ICompetency[],
    stackTitle: string,
    stackGroups: Record<StackGroup, string>,
  },
  wayventure: {
    badge: string,
    title: string,
    titleHighlight: string,
    text: string,
    features: IIconItem[],
    primaryCta: string,
    secondaryCta: string,
    imageAlt: string,
    status: string,
  },
  motto: {
    eyebrow: string,
    quote: string,
    text: string,
    pillars: IPillar[],
  },
  offers: ISectionHeading & {
    packages: IOfferPackage[],
    requestCta: string,
    featuredCta: string,
    featuredBadge: string,
    custom: {
      title: string,
      text: string,
      cta: string,
    },
  },
  aiConsulting: ISectionHeading & {
    tracks: IConsultingTrack[],
  },
  experience: ISectionHeading & {
    items: IExperience[],
    highlights: IHighlightBox[],
  },
  volunteering: {
    badge: string,
    title: string,
    text: string,
    values: IValue[],
    quoteLabel: string,
    quote: string,
    signature: string,
  },
  faq: ISectionHeading & {
    items: IWayVentureFaq[],
  },
  contact: {
    testimonials: ITestimonial[],
    eyebrow: string,
    title: string,
    text: string,
    items: IContactItem[],
    form: {
      name: string,
      namePlaceholder: string,
      email: string,
      emailPlaceholder: string,
      scope: string,
      scopes: IOption[],
      message: string,
      messagePlaceholder: string,
      /** Rendered around a link to the privacy policy: before + link + after. */
      consent: [ string, string, string ],
      submit: string,
      sending: string,
      success: string,
      error: string,
      rateLimited: string,
    },
  },
  cookieBanner: {
    eyebrow: string,
    title: string,
    /** Rendered around a link to the privacy policy: before + link + after. */
    text: [ string, string, string ],
    acceptAll: string,
    necessaryOnly: string,
    settings: string,
    save: string,
    alwaysActive: string,
    categories: {
      necessary: { title: string, text: string },
      statistics: { title: string, text: string },
    },
  },
  footer: {
    tagline: string,
    imprint: string,
    privacy: string,
    cookieSettings: string,
    languageLabel: string,
    rights: string,
    status: string,
  },
  wayventurePage: {
    metaTitle: string,
    metaDescription: string,
    back: string,
    badge: string,
    title: string,
    subtitle: string,
    intro: string,
    tryCta: string,
    storyTitle: string,
    story: string[],
    featuresTitle: string,
    featuresText: string,
    features: IWayVentureFeature[],
    screenshotAlt: string,
    roadmapTitle: string,
    roadmapText: string,
    upcoming: IWayVentureUpcoming[],
    vaultTitle: string,
    vaultSubtitle: string,
    vaultText: string,
    faqTitle: string,
    faq: IWayVentureFaq[],
    visitCta: string,
    talkCta: string,
  },
  notFound: {
    title: string,
    text: string,
    cta: string,
  },
  imprint: ILegalPage,
  privacy: ILegalPage,
}
