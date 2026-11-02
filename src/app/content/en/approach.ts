import { SiteContent } from "../../interfaces";

export const approachPageContent: Pick<SiteContent, 'approachPage'> = {
  approachPage: {
    metaTitle: 'Approach: From Idea to Production-Ready Product | Christian Dechant',
    metaDescription: 'How your software comes to life: scoping, prototype, MVP, go-live and operations from a single source. Delivered fast and built complete – with tests, WCAG 2.1 AA accessibility, GDPR compliance and EU hosting.',
    keywords: [
      'software development process',
      'MVP development',
      'prototype development',
      'from idea to app',
      'GDPR compliant software development',
      'accessible software development',
      'test-driven development',
      'freelance developer approach',
    ],
    breadcrumb: 'Approach',
    hero: {
      eyebrow: 'Approach',
      icon: 'route',
      title: 'From idea to production-ready product —',
      titleHighlight: 'delivered fast, built complete.',
      intro: 'You don’t need to know how software is made – only what it should do. I guide you through every phase, from the first idea to stable operation. Fast enough to learn from real users early, and thorough enough that every release holds up.',
      primaryCta: 'Book an initial call',
      secondaryCta: 'See the phases',
      facts: [
        { icon: 'person', label: 'One contact for the whole journey' },
        { icon: 'rocket_launch', label: 'Early, working releases' },
        { icon: 'fact_check', label: 'Tests from version 1' },
        { icon: 'verified_user', label: 'GDPR, EU hosting & WCAG 2.1 AA' },
      ],
    },
    phases: {
      eyebrow: 'From idea to product',
      icon: 'route',
      title: 'Five phases, one contact',
      text: 'Every phase ends with a tangible result that the next one builds on. You can join at any phase.',
      items: [
        {
          icon: 'lightbulb',
          accent: 'brand',
          title: 'Scoping',
          text: 'We sharpen the idea: who uses the product, which problem does it solve, and what really belongs in the first version?',
          points: [ 'Goals, users & requirements', 'Prioritised feature scope', 'Technology recommendation & quote' ],
        },
        {
          icon: 'palette',
          accent: 'indigo',
          title: 'Prototype',
          text: 'A clickable design or technical spike makes the idea tangible – before much budget is spent.',
          points: [ 'Clickable prototype or proof of concept', 'Early feedback from real users', 'Technical risks resolved' ],
        },
        {
          icon: 'construction',
          accent: 'amber',
          title: 'MVP',
          text: 'The first usable version with the core of your product – minimal in scope, but complete in quality.',
          points: [ 'Core features production-ready', 'Auth, error handling & tests', 'Regular progress updates' ],
        },
        {
          icon: 'rocket_launch',
          accent: 'emerald',
          title: 'Go-live',
          text: 'Your product goes live: tested on every device, secured and documented.',
          points: [ 'Accessibility, performance & security check', 'Hosting in the EU', 'Handover of source code & access' ],
        },
        {
          icon: 'support_agent',
          accent: 'rose',
          title: 'Operations & further development',
          text: 'Go-live is not the end: monitoring, updates and new features based on real usage.',
          points: [ 'Support packages as needed', 'Further development based on feedback', 'One fixed contact' ],
        },
      ],
    },
    motto: {
      eyebrow: 'My guiding principle',
      icon: 'bolt',
      title: 'Ship fast – and still complete',
      text: 'Speed is worthless if the MVP breaks at the first real customer contact. That’s why every project needs both at once.',
      items: [
        {
          icon: 'rocket_launch',
          accent: 'brand',
          title: 'Deliver fast',
          text: 'No months of building in a vacuum: test assumptions with real users early and base decisions on feedback.',
          points: [ 'Early, working releases', 'Feedback loops from day one', 'Clear priorities instead of an endless feature list' ],
        },
        {
          icon: 'verified',
          accent: 'amber',
          title: 'Deliver complete',
          text: 'Minimal never means broken. Every release is secure, tested and pleasant to use – edge cases included.',
          points: [ 'Well-handled edge cases & error states', 'Automated tests as a safety net', 'Consistent UX on mobile & desktop' ],
        },
      ],
    },
    done: {
      eyebrow: 'Quality',
      icon: 'task_alt',
      title: 'What “done” means to me',
      text: 'These belong in every release – not just in version 2.',
      items: [
        { icon: 'fact_check', title: 'Automated tests', text: 'Business logic is built test-first, and the tests run automatically on every change.' },
        { icon: 'security', title: 'Security', text: 'Proper authentication, up-to-date dependencies and secure defaults.' },
        { icon: 'accessibility_new', title: 'Accessibility', text: 'Built to WCAG 2.1 AA so that everyone can use your product.' },
        { icon: 'speed', title: 'Performance', text: 'Fast load times and careful use of resources on every device.' },
        { icon: 'article', title: 'Documentation', text: 'Clear documentation, so your product doesn’t depend on a single person.' },
        { icon: 'key', title: 'Complete handover', text: 'Source code and access belong to you – no dependency on me.' },
      ],
    },
    compliance: {
      eyebrow: 'Compliance',
      icon: 'verified_user',
      title: 'Compliance from day one',
      text: 'Data protection, accessibility and the responsible use of AI are planned in from the start – not retrofitted later.',
      items: [
        { icon: 'gavel', title: 'GDPR & DPA', text: 'GDPR-compliant implementation, with a data processing agreement (DPA) wherever personal data is processed.' },
        { icon: 'dns', title: 'Hosting in the EU', text: 'Servers and services in the EU – for legal clarity when handling data.' },
        { icon: 'accessibility_new', title: 'Accessibility (BFSG)', text: 'Built to WCAG 2.1 AA, so you’re ready for the German Accessibility Strengthening Act (BFSG).' },
        { icon: 'policy', title: 'AI governance', text: 'Clear guidelines on which data goes to which AI model – using locally run models where needed.' },
      ],
    },
    collaboration: {
      title: 'What working together looks like',
      text: 'Engagement models, the project process and a real-world reference are on the freelancing page.',
      cta: 'Go to freelancing',
    },
    faq: {
      eyebrow: 'FAQ',
      icon: 'help',
      title: 'Questions about my approach',
      text: 'The essentials on process, quality and getting started – and if your question is missing, just write to me.',
      items: [
        {
          question: 'I only have an idea – is that too early?',
          answer: 'No, that’s exactly what scoping is for. Together we sharpen the goal, the users and the first feature scope before a single line of code is written.',
        },
        {
          question: 'How early will I see results?',
          answer: 'Early: the prototype already makes the idea tangible. After that, you get working progress updates regularly instead of a big surprise at the end.',
        },
        {
          question: 'Isn’t an MVP unfinished by definition?',
          answer: 'An MVP is small in scope, not in quality. Authentication, error handling, tests and accessibility are part of it from the first version.',
        },
        {
          question: 'Do I have to book every phase?',
          answer: 'No. You can join at any phase, for example with an existing prototype or a running application that needs further development.',
        },
        {
          question: 'What happens after go-live?',
          answer: 'If you like, I keep looking after your product – with support packages for monitoring, updates and further development.',
        },
      ],
    },
    cta: {
      title: 'Ready for the first step?',
      text: 'Tell me about your idea. I’ll get back to you personally within 24 hours.',
      cta: 'Book an initial call',
    },
  },
};
