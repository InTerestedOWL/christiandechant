import { SiteContent } from "../../interfaces";

export const contactPageContent: Pick<SiteContent, 'contactPage'> = {
  contactPage: {
    metaTitle: 'Kontakt: Projekt anfragen | Christian Dechant',
    metaDescription: 'Projekt, Support-Paket oder KI-Beratung anfragen: Christian Dechant meldet sich innerhalb von 24 Stunden persönlich. Unverbindliches Erstgespräch auf Deutsch oder Englisch.',
    keywords: [
      'Christian Dechant Kontakt',
      'Freelance Entwickler anfragen',
      'Projekt anfragen Softwareentwicklung',
      'Erstgespräch Webentwicklung',
      'KI Beratung anfragen',
    ],
    breadcrumb: 'Kontakt',
    hero: {
      eyebrow: 'Kontakt',
      icon: 'mail',
      title: 'Lass uns über dein Vorhaben sprechen —',
      titleHighlight: 'persönlich und unverbindlich.',
      intro: 'Erzähl mir kurz, worum es geht. Ich melde mich innerhalb von 24 Stunden persönlich bei dir – mit ersten Gedanken und einem Vorschlag für ein unverbindliches Erstgespräch.',
      primaryCta: 'Zum Formular',
      secondaryCta: 'So geht es weiter',
      facts: [
        { icon: 'schedule', label: 'Antwort innerhalb von 24 Stunden' },
        { icon: 'chat', label: 'Unverbindliches Erstgespräch' },
        { icon: 'translate', label: 'Deutsch & Englisch' },
        { icon: 'verified_user', label: 'DSGVO-konforme Verarbeitung' },
      ],
    },
    nextSteps: {
      eyebrow: 'Nach deiner Anfrage',
      icon: 'route',
      title: 'So geht es weiter',
      text: 'Von der ersten Nachricht bis zum Projektstart – ohne Umwege.',
      steps: [
        { icon: 'send', title: 'Anfrage', text: 'Du schickst mir dein Anliegen über das Formular oder per E-Mail.' },
        { icon: 'forum', title: 'Persönliche Antwort', text: 'Innerhalb von 24 Stunden melde ich mich persönlich bei dir.' },
        { icon: 'chat', title: 'Erstgespräch', text: 'Wir sprechen unverbindlich über Ziele, Rahmen und Zeitplan.' },
        { icon: 'assignment', title: 'Angebot', text: 'Du erhältst ein transparentes Angebot mit klaren Meilensteinen.' },
        { icon: 'rocket_launch', title: 'Start', text: 'Passt alles, legen wir los – mit einem klaren Plan für die ersten Schritte.' },
      ],
    },
  },
};
