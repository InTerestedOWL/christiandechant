import { SiteContent } from "../../interfaces";

export const commonContent: Pick<SiteContent, 'header' | 'cookieBanner' | 'footer' | 'notFound' | 'a11y'> = {
  header: {
    tagline: 'Full-Stack & Applied AI',
    badge: 'Senior Dev',
    nav: [
      { href: '/freelancing', title: 'Freelancing', mobileTitle: 'Freelancing & Einsatzmodelle' },
      { href: '#why', title: 'Warum ich', mobileTitle: 'Warum mit mir arbeiten' },
      { href: '#about', title: 'Über mich', mobileTitle: 'Über mich' },
      { href: '#wayventure', title: 'WayVenture', mobileTitle: 'WayVenture (App)', highlight: 'amber', badge: 'Live' },
      { href: '#services', title: 'Angebote', mobileTitle: 'Angebote & Webpakete' },
      { href: '#ai-consulting', title: 'AI Consulting', mobileTitle: 'AI Consulting & Coaching' },
      { href: '#experience', title: 'Erfahrung', mobileTitle: 'Erfahrung & Werdegang' },
    ],
    cta: 'Projekt anfragen',
    mobileCta: 'Projekt starten',
    drawerTitle: 'Navigation',
    openMenu: 'Navigation öffnen',
    closeMenu: 'Navigation schließen',
    languageLabel: 'Sprache wählen',
  },
  cookieBanner: {
    eyebrow: 'Cookies & Datenschutz',
    title: 'Ihre Privatsphäre zählt',
    text: [
      'Diese Website nutzt nur technisch notwendige Speicherung, z.B. um Ihre Auswahl hier zu merken. Optionale Dienste werden nur mit Ihrer Einwilligung geladen, die Sie jederzeit im Seitenfuß widerrufen können. Mehr in der ',
      'Datenschutzerklärung',
      '.',
    ],
    acceptAll: 'Alle akzeptieren',
    necessaryOnly: 'Nur notwendige',
    settings: 'Einstellungen',
    save: 'Auswahl speichern',
    alwaysActive: 'Immer aktiv',
    categories: {
      necessary: {
        title: 'Notwendig',
        text: 'Speichert Ihre Cookie-Auswahl lokal in Ihrem Browser. Ohne diese Speicherung funktioniert der Banner nicht.',
      },
      statistics: {
        title: 'Statistik & externe Medien',
        text: 'Derzeit sind keine solchen Dienste eingebunden. Neue Dienste werden erst nach Ihrer Zustimmung geladen.',
      },
    },
  },
  footer: {
    tagline: 'InterestedOWL · M.Sc. Angewandte Informatik · Senior Full-Stack & Applied AI',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    languageLabel: 'Sprache wählen',
    cookieSettings: 'Cookie-Einstellungen',
    rights: 'Alle Rechte vorbehalten.',
    status: 'Bereit für ausgewählte Neuprojekte',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Die angeforderte Seite existiert nicht (mehr). Vielleicht hilft ein Blick auf die Startseite.',
    cta: 'Zur Startseite',
  },
  a11y: {
    skipToContent: 'Zum Inhalt springen',
    breadcrumbLabel: 'Brotkrümelnavigation',
    home: 'Startseite',
    newTab: '(öffnet in neuem Tab)',
  },
};
