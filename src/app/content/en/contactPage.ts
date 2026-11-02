import { SiteContent } from "../../interfaces";

export const contactPageContent: Pick<SiteContent, 'contactPage'> = {
  contactPage: {
    metaTitle: 'Contact: Start a Project | Christian Dechant',
    metaDescription: 'Request a project, support package or AI consulting: Christian Dechant gets back to you personally within 24 hours. Free initial call in German or English.',
    keywords: [
      'Christian Dechant contact',
      'hire freelance developer',
      'request software development project',
      'initial call web development',
      'request AI consulting',
    ],
    breadcrumb: 'Contact',
    hero: {
      eyebrow: 'Contact',
      icon: 'mail',
      title: 'Let’s talk about your project —',
      titleHighlight: 'personal and free of obligation.',
      intro: 'Tell me briefly what it’s about. I’ll get back to you personally within 24 hours – with first thoughts and a suggestion for a free initial call.',
      primaryCta: 'Go to the form',
      secondaryCta: 'What happens next',
      facts: [
        { icon: 'schedule', label: 'Reply within 24 hours' },
        { icon: 'chat', label: 'Free initial call' },
        { icon: 'translate', label: 'German & English' },
        { icon: 'verified_user', label: 'GDPR-compliant processing' },
      ],
    },
    nextSteps: {
      eyebrow: 'After your request',
      icon: 'route',
      title: 'What happens next',
      text: 'From the first message to the project start – no detours.',
      steps: [
        { icon: 'send', title: 'Request', text: 'You send me your request via the form or by email.' },
        { icon: 'forum', title: 'Personal reply', text: 'I get back to you personally within 24 hours.' },
        { icon: 'chat', title: 'Initial call', text: 'We talk about goals, scope and timeline – free of obligation.' },
        { icon: 'assignment', title: 'Quote', text: 'You receive a transparent quote with clear milestones.' },
        { icon: 'rocket_launch', title: 'Kick-off', text: 'If everything fits, we get started – with a clear plan for the first steps.' },
      ],
    },
  },
};
