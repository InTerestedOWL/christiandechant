import { SiteContent } from "../../interfaces";

export const commonContent: Pick<SiteContent, 'header' | 'cookieBanner' | 'footer' | 'notFound' | 'a11y'> = {
  header: {
    tagline: 'Full-Stack & Applied AI',
    badge: 'Senior Dev',
    nav: [
      { href: '/freelancing', title: 'Freelancing', mobileTitle: 'Freelancing & engagement models' },
      { href: '#why', title: 'Why me', mobileTitle: 'Why work with me' },
      { href: '#about', title: 'About', mobileTitle: 'About me' },
      { href: '#wayventure', title: 'WayVenture', mobileTitle: 'WayVenture (App)', highlight: 'amber', badge: 'Live' },
      { href: '/packages', title: 'Web packages', mobileTitle: 'Web packages & comparison' },
      { href: '#ai-consulting', title: 'AI Consulting', mobileTitle: 'AI Consulting & Coaching' },
      { href: '#experience', title: 'Experience', mobileTitle: 'Experience & Career' },
    ],
    cta: 'Start a project',
    mobileCta: 'Start a project',
    drawerTitle: 'Navigation',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    languageLabel: 'Choose language',
  },
  cookieBanner: {
    eyebrow: 'Cookies & privacy',
    title: 'Your privacy matters',
    text: [
      'This website only uses technically necessary storage, e.g. to remember your choice here. Optional services are only loaded with your consent, which you can withdraw at any time in the footer. Learn more in the ',
      'Privacy Policy',
      '.',
    ],
    acceptAll: 'Accept all',
    necessaryOnly: 'Necessary only',
    settings: 'Settings',
    save: 'Save selection',
    alwaysActive: 'Always active',
    categories: {
      necessary: {
        title: 'Necessary',
        text: 'Stores your cookie choice locally in your browser. The banner cannot work without it.',
      },
      statistics: {
        title: 'Statistics & external media',
        text: 'No such services are currently in use. New services will only be loaded after you consent.',
      },
    },
  },
  footer: {
    tagline: 'InterestedOWL · M.Sc. Applied Computer Science · Senior Full-Stack & Applied AI',
    imprint: 'Imprint',
    privacy: 'Privacy',
    languageLabel: 'Choose language',
    cookieSettings: 'Cookie settings',
    rights: 'All rights reserved.',
    status: 'Available for selected new projects',
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you requested does not exist (anymore). Maybe the homepage helps.',
    cta: 'Go to the homepage',
  },
  a11y: {
    skipToContent: 'Skip to content',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    newTab: '(opens in a new tab)',
  },
};
