import { SiteContent } from "../../interfaces";

export const wayventurePageContent: Pick<SiteContent, 'wayventurePage'> = {
  wayventurePage: {
    metaTitle: 'WayVenture — Travel Planner App Built by Christian Dechant',
    metaDescription: 'WayVenture is an independent travel planner app for road trips, camper journeys and spontaneous getaways, with a digital travel pass, AI trip timelines, budgeting and vehicle management. Built and shipped by Christian Dechant.',
    back: 'Back to the homepage',
    badge: 'Founder project · Live product',
    title: 'WayVenture',
    subtitle: 'Your smart travel planner – from the planning to the memory.',
    intro: 'WayVenture is a mobile-first travel planner app I designed and built independently, alongside my freelance development work. It helps travelers leave quickly and stay organized without preparation overhead, whether that’s a spontaneous weekend road trip or a fully planned multi-country camper journey.',
    tryCta: 'Try WayVenture for free',
    storyTitle: 'Why I built WayVenture',
    story: [
      'Most travel apps assume a trip is planned weeks in advance. In practice, a lot of the best trips start with almost no planning at all: a free weekend, a full tank of fuel and a rough direction. WayVenture treats spontaneous trips and planned trips as equally first-class: a spontaneous trip can be created in a single step, with the name, start date, budget and status filled in automatically, while a planned trip gets a full itinerary with waypoints and country-aware travel advisories.',
      'The product is guided by a few simple principles: mobile-first thinking, fast access to relevant information, minimizing preparation friction, staying offline-friendly where possible, and shipping features incrementally instead of chasing a big-bang launch. Underneath is a properly engineered stack: a Next.js and TypeScript frontend, a Django REST Framework backend, Stripe for subscription billing and a containerized Docker deployment with an eye on security and scalability from day one.',
    ],
    featuresTitle: 'What WayVenture does',
    featuresText: 'An all-in-one travel app: plan the trip, live through it, and keep the memory.',
    features: [
      { icon: 'badge', title: 'Digital Travel Pass', description: 'Every country you visit gets stamped into a digital passport, so your travel history becomes something you can actually look back on.', badge: 'USP' },
      { icon: 'payments', title: 'Trip Budget Planner', description: 'Track spending per trip and per waypoint, so you always know what a spontaneous detour is going to cost before you take it.' },
      { icon: 'map', title: 'Waypoints & Travel Notices', description: 'Add waypoints on the fly, get country-specific travel advisories, and share a route via link with fellow travelers.' },
      { icon: 'auto_awesome', title: 'AI Trip Timeline', description: 'An AI-generated summary turns raw waypoints and dates into a readable story of the trip, automatically.', badge: 'AI' },
      { icon: 'group', title: 'Sharing & Invites', description: 'Share a trip with shared-link or invite-link access, so friends and family can follow along without an account.' },
      { icon: 'directions_car', title: 'Vehicle Management', description: 'Keep vehicles, from the daily car to the camper van, attached to the trips they belong to.' },
    ],
    screenshotAlt: 'Screenshot of the WayVenture travel app showing trip planning, digital travel pass and budget overview',
    roadmapTitle: 'What’s next',
    roadmapText: 'WayVenture ships incrementally. Here is what’s on the roadmap:',
    upcoming: [
      { icon: 'favorite', title: 'Community Features' },
      { icon: 'dashboard_customize', title: 'Creator Mode' },
      { icon: 'checklist', title: 'Equipment Checklists' },
      { icon: 'camping', title: 'Camp Spots' },
      { icon: 'smart_toy', title: 'AI Travel Agent' },
      { icon: 'photo_album', title: 'Trip Photobook' },
    ],
    vaultTitle: 'Document Safe',
    vaultSubtitle: '(Digital Vault)',
    vaultText: 'A future differentiator on the roadmap: a secure, encrypted place for travel and vehicle documents, with offline availability, expiration reminders, travel checklists and OCR support, so passports, visas and vehicle papers are one tap away even without a connection.',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        question: 'What is WayVenture?',
        answer: 'WayVenture is a mobile-first travel companion app for planning and living through road trips and spontaneous getaways. It combines a digital travel pass, trip budgeting, AI-generated trip timelines, waypoint-based travel advisories and vehicle management in a single all-in-one travel app.',
      },
      {
        question: 'Who built WayVenture?',
        answer: 'WayVenture is an independent product designed and built by Christian Dechant, a full-stack developer, as a self-initiated venture alongside his freelance work.',
      },
      {
        question: 'What makes WayVenture different from other travel planners?',
        answer: 'WayVenture supports both planned trips and spontaneous trips as first-class citizens. A spontaneous trip can be created in a single step with everything else – name, start date, budget – filled in automatically, while planned trips get a full itinerary with waypoints and country-aware travel advisories.',
      },
      {
        question: 'Is WayVenture free to use?',
        answer: 'WayVenture offers a free tier alongside paid Weltenbummler and Globetrotter tiers that unlock features like per-waypoint travel advice and higher usage limits.',
      },
      {
        question: 'What is coming next for WayVenture?',
        answer: 'The roadmap includes community features, a creator mode, equipment checklists, camp spot discovery, an AI travel agent, a trip photobook and a “Document Safe” for securely storing travel and vehicle documents with OCR and expiry reminders.',
      },
      {
        question: 'Where can I try WayVenture?',
        answer: 'WayVenture is live at wayventure.de in both German and English, with no credit card required to start.',
      },
    ],
    visitCta: 'Visit WayVenture',
    talkCta: 'Talk to me about it',
  },
};
