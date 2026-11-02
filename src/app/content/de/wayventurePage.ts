import { SiteContent } from "../../interfaces";

export const wayventurePageContent: Pick<SiteContent, 'wayventurePage'> = {
  wayventurePage: {
    metaTitle: 'WayVenture — Reiseplaner-App von Christian Dechant',
    metaDescription: 'WayVenture ist eine unabhängige Reiseplaner-App für Roadtrips, Camper-Reisen und spontane Kurztrips – mit digitalem Reisepass, KI-Reise-Timeline, Budgetplanung und Fahrzeugverwaltung. Entwickelt von Christian Dechant.',
    back: 'Zurück zur Startseite',
    badge: 'Gründerprojekt · Live-Produkt',
    title: 'WayVenture',
    subtitle: 'Dein smarter Reiseplaner – von der Planung bis zur Erinnerung.',
    intro: 'WayVenture ist eine Mobile-First Reiseplaner-App, die ich unabhängig neben meiner Freelance-Tätigkeit konzipiert und entwickelt habe. Sie hilft Reisenden, schnell loszukommen und ohne Vorbereitungsaufwand organisiert zu bleiben – egal ob spontaner Wochenend-Roadtrip oder durchgeplante Camper-Reise durch mehrere Länder.',
    tryCta: 'WayVenture kostenlos testen',
    storyTitle: 'Warum ich WayVenture gebaut habe',
    story: [
      'Die meisten Reise-Apps gehen davon aus, dass eine Reise Wochen im Voraus geplant wird. In der Praxis beginnen viele der besten Reisen fast ohne Planung: ein freies Wochenende, ein voller Tank und eine grobe Richtung. WayVenture behandelt spontane und geplante Reisen gleichwertig: Eine spontane Reise ist in einem Schritt angelegt – Name, Startdatum, Budget und Status werden automatisch gesetzt –, während eine geplante Reise eine vollständige Route mit Wegpunkten und länderspezifischen Reisehinweisen erhält.',
      'Das Produkt folgt ein paar einfachen Prinzipien: Mobile-First, schneller Zugriff auf relevante Informationen, möglichst wenig Vorbereitungsaufwand, offline-freundlich wo möglich und inkrementelle Releases statt eines großen Launches. Darunter steckt ein sauber entwickelter Stack: ein Next.js- und TypeScript-Frontend, ein Django-REST-Framework-Backend, Stripe für Abonnements und ein containerisiertes Docker-Deployment mit Fokus auf Sicherheit und Skalierbarkeit von Tag eins an.',
    ],
    featuresTitle: 'Was WayVenture kann',
    featuresText: 'Eine All-in-One Reise-App: Reise planen, erleben und die Erinnerung bewahren.',
    features: [
      { icon: 'badge', title: 'Digitaler Reisepass', description: 'Jedes bereiste Land wird im digitalen Reisepass abgestempelt – so wird deine Reisehistorie zu etwas, auf das du wirklich zurückblicken kannst.', badge: 'USP' },
      { icon: 'payments', title: 'Reise-Budget Planer', description: 'Ausgaben pro Reise und pro Wegpunkt erfassen, damit du schon vorher weißt, was ein spontaner Umweg kostet.' },
      { icon: 'map', title: 'Wegpunkte & Reisehinweise', description: 'Wegpunkte spontan hinzufügen, länderspezifische Reisehinweise erhalten und Routen per Link mit Mitreisenden teilen.' },
      { icon: 'auto_awesome', title: 'KI-Reise-Timeline', description: 'Eine KI-generierte Zusammenfassung macht aus Wegpunkten und Daten automatisch eine lesbare Geschichte deiner Reise.', badge: 'KI' },
      { icon: 'group', title: 'Teilen & Einladen', description: 'Reisen per Freigabe- oder Einladungslink teilen, damit Freunde und Familie auch ohne Konto mitverfolgen können.' },
      { icon: 'directions_car', title: 'Fahrzeug-Management', description: 'Fahrzeuge – vom Alltagsauto bis zum Wohnmobil – direkt den passenden Reisen zuordnen.' },
    ],
    screenshotAlt: 'Screenshot der WayVenture Reise-App mit Reiseplanung, digitalem Reisepass und Budgetübersicht',
    roadmapTitle: 'Was als Nächstes kommt',
    roadmapText: 'WayVenture wird inkrementell ausgeliefert. Das steht auf der Roadmap:',
    upcoming: [
      { icon: 'favorite', title: 'Community-Funktionen' },
      { icon: 'dashboard_customize', title: 'Creator-Modus' },
      { icon: 'checklist', title: 'Ausrüstungs-Checklisten' },
      { icon: 'camping', title: 'Stellplätze' },
      { icon: 'smart_toy', title: 'KI-Reiseagent' },
      { icon: 'photo_album', title: 'Reise-Fotobuch' },
    ],
    vaultTitle: 'Document Safe',
    vaultSubtitle: '(Digitaler Tresor)',
    vaultText: 'Ein geplantes Alleinstellungsmerkmal: ein sicherer, verschlüsselter Ort für Reise- und Fahrzeugdokumente mit Offline-Verfügbarkeit, Ablauf-Erinnerungen, Reise-Checklisten und OCR – damit Reisepass, Visa und Fahrzeugpapiere auch ohne Verbindung nur einen Tipp entfernt sind.',
    faqTitle: 'Häufige Fragen',
    faq: [
      {
        question: 'Was ist WayVenture?',
        answer: 'WayVenture ist eine Mobile-First Reisebegleiter-App zum Planen und Erleben von Roadtrips und spontanen Kurztrips. Sie kombiniert digitalen Reisepass, Budgetplanung, KI-generierte Reise-Timelines, wegpunktbasierte Reisehinweise und Fahrzeugverwaltung in einer All-in-One-App.',
      },
      {
        question: 'Wer hat WayVenture entwickelt?',
        answer: 'WayVenture ist ein unabhängiges Produkt, das Christian Dechant als Full-Stack-Entwickler neben seiner Freelance-Tätigkeit konzipiert und entwickelt hat.',
      },
      {
        question: 'Was unterscheidet WayVenture von anderen Reiseplanern?',
        answer: 'WayVenture behandelt geplante und spontane Reisen gleichwertig. Eine spontane Reise ist in einem Schritt angelegt – Name, Startdatum und Budget werden automatisch ausgefüllt –, während geplante Reisen eine vollständige Route mit Wegpunkten und länderspezifischen Reisehinweisen erhalten.',
      },
      {
        question: 'Ist WayVenture kostenlos?',
        answer: 'WayVenture bietet einen kostenlosen Tarif sowie die kostenpflichtigen Tarife Weltenbummler und Globetrotter, die z.B. Reisehinweise pro Wegpunkt und höhere Nutzungslimits freischalten.',
      },
      {
        question: 'Was kommt als Nächstes?',
        answer: 'Auf der Roadmap stehen Community-Funktionen, ein Creator-Modus, Ausrüstungs-Checklisten, Stellplatzsuche, ein KI-Reiseagent, ein Reise-Fotobuch und ein „Document Safe“ zur sicheren Ablage von Reise- und Fahrzeugdokumenten mit OCR und Ablauf-Erinnerungen.',
      },
      {
        question: 'Wo kann ich WayVenture ausprobieren?',
        answer: 'WayVenture ist live auf wayventure.de – auf Deutsch und Englisch, ohne Kreditkarte für den Start.',
      },
    ],
    visitCta: 'WayVenture besuchen',
    talkCta: 'Lass uns darüber sprechen',
  },
};
