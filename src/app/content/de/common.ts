import { SiteContent } from "../../interfaces";

export const commonContent: Pick<SiteContent, 'header' | 'cookieBanner' | 'footer' | 'notFound' | 'a11y'> = {
  header: {
    tagline: 'Full-Stack & Applied AI',
    badge: 'Senior Dev',
    nav: [
      { href: '/freelancing', title: 'Freelancing', mobileTitle: 'Freelancing & Einsatzmodelle' },
      {
        title: 'Leistungen',
        mobileTitle: 'Leistungen',
        children: [
          { href: '/packages', title: 'Webpakete', mobileTitle: 'Webpakete & Vergleich' },
          { href: '/support', title: 'Support & Wartung', mobileTitle: 'Support & Wartung' },
          { href: '/ai-development', title: 'AI Development', mobileTitle: 'AI Development & Coaching' },
        ],
      },
      { href: '/approach', title: 'Arbeitsweise', mobileTitle: 'Arbeitsweise: Idee → Produkt' },
      { href: '#why', title: 'Warum ich', mobileTitle: 'Warum mit mir arbeiten' },
      { href: '#about', title: 'Über mich', mobileTitle: 'Über mich' },
      { href: '#wayventure', title: 'WayVenture', mobileTitle: 'WayVenture (App)', highlight: 'amber', badge: 'Live' },
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
    title: 'Deine Privatsphäre zählt',
    text: [
      'Diese Website nutzt nur technisch notwendige Speicherung, z.B. um deine Auswahl hier zu merken. Optionale Dienste werden nur mit deiner Einwilligung geladen, die du jederzeit im Seitenfuß widerrufen kannst. Mehr in der ',
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
        text: 'Speichert deine Cookie-Auswahl lokal in deinem Browser. Ohne diese Speicherung funktioniert der Banner nicht.',
      },
      statistics: {
        title: 'Statistik & externe Medien',
        text: 'Derzeit sind keine solchen Dienste eingebunden. Neue Dienste werden erst nach deiner Zustimmung geladen.',
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
