import { SiteContent } from "../../interfaces";

export const aiDevelopmentPageContent: Pick<SiteContent, 'aiDevelopmentPage'> = {
  aiDevelopmentPage: {
    metaTitle: 'AI Development & KI-Beratung: Agenten, MCP & KI-Integration | Christian Dechant',
    metaDescription: 'KI-Entwicklung und KI-Beratung aus Fulda: KI-Features in Software, eigene Agenten und MCP-Server, KI-Audit mit Governance für Datenschutz und IP-Schutz sowie 1:1 Coaching für Entwickler.',
    keywords: [
      'KI Entwicklung',
      'KI Beratung',
      'KI Integration Software',
      'KI Agenten Entwicklung',
      'MCP Server Entwicklung',
      'Claude Code Coaching',
      'KI Governance DSGVO',
      'lokale KI Ollama',
      'AI Consulting Fulda',
    ],
    breadcrumb: 'AI Development',
    hero: {
      eyebrow: 'AI Development',
      icon: 'psychology',
      title: 'KI, die im Alltag funktioniert —',
      titleHighlight: 'sicher, messbar, unter Kontrolle.',
      intro: 'Ich setze KI dort ein, wo sie echten Nutzen bringt: als Feature in deinem Produkt, als Agent mit Zugriff auf deine Systeme oder als Werkzeug im Entwicklungsalltag deines Teams. Kein Hype, sondern Handwerk – mit klaren Leitplanken für Datenschutz und Qualität.',
      primaryCta: 'KI-Projekt anfragen',
      secondaryCta: 'Leistungen ansehen',
      facts: [
        { icon: 'smart_toy', label: 'Claude, OpenAI & lokale Modelle' },
        { icon: 'hub', label: 'Eigene MCP-Server' },
        { icon: 'policy', label: 'Datenschutz & IP-Schutz im Blick' },
        { icon: 'school', label: '1:1 Coaching für Entwickler' },
      ],
    },
    services: {
      eyebrow: 'Leistungen',
      icon: 'auto_awesome',
      title: 'Vier Wege, KI sinnvoll einzusetzen',
      text: 'Ob neues Feature, interner Agent oder schnellere Entwicklung: Wir starten mit dem Anwendungsfall, der für dich den größten Unterschied macht.',
      items: [
        {
          icon: 'smart_toy',
          accent: 'brand',
          title: 'KI-Features in deinem Produkt',
          text: 'Assistenten, Zusammenfassungen, Textgenerierung oder Klassifikation – direkt in deine bestehende Anwendung integriert, mit sauberen Schnittstellen statt Prompt-Basteleien.',
          points: [ 'Anbindung von Claude, OpenAI oder lokalen Modellen', 'Robuste Schnittstellen mit Fehlerbehandlung', 'Datenfluss vorab festgelegt' ],
        },
        {
          icon: 'hub',
          accent: 'indigo',
          title: 'Agenten & MCP-Server',
          text: 'Eigene MCP-Server verbinden Datenbanken, APIs und interne Tools mit KI-Agenten. So arbeiten Agenten mit deinen echten Daten – mit klar begrenzten Berechtigungen.',
          points: [ 'MCP-Server für deine Systeme', 'Agenten-Workflows für Entwicklung & Betrieb', 'Berechtigungen nach dem Need-to-know-Prinzip' ],
        },
        {
          icon: 'policy',
          accent: 'emerald',
          title: 'KI-Audit & Governance',
          text: 'Wo sparen Agenten wirklich Zeit, und wo schaden sie? Ich analysiere eure Entwicklungsprozesse und schaffe klare Leitlinien für den sicheren Einsatz von KI-Tools.',
          points: [ 'Engineering-Bottleneck-Audit', 'Leitlinien für Datenschutz & IP-Schutz', 'Cloud-Modell oder lokal mit Ollama' ],
        },
        {
          icon: 'terminal',
          accent: 'amber',
          title: '1:1 Coaching für Entwickler',
          text: 'Claude Code, Terminal-Agenten und MCP im echten Projektalltag: Du lernst, schneller zu liefern und trotzdem die volle architektonische Kontrolle zu behalten.',
          points: [ 'Kontextfenster & Sub-Tasking', 'Eigene MCP-Server programmieren', 'TDD als Leitplanke für KI-Code' ],
        },
      ],
    },
    principles: {
      eyebrow: 'Kein Hype, sondern Handwerk',
      icon: 'verified',
      title: 'Wie ich KI einsetze',
      text: 'KI ist ein Werkzeug, kein Selbstzweck. Diese Grundsätze gelten in jedem Projekt.',
      items: [
        { icon: 'person', title: 'Der Mensch entscheidet', text: 'Agenten schlagen vor, Menschen entscheiden. Code-Reviews und Verantwortung bleiben im Team.' },
        { icon: 'shield_lock', title: 'Datenschutz von Anfang an', text: 'Welche Daten an welches Modell gehen, legen wir vorab fest – bei Bedarf mit lokal betriebenen Modellen.' },
        { icon: 'query_stats', title: 'Messbarer Nutzen', text: 'Wir starten dort, wo KI nachweislich Zeit spart, und prüfen das Ergebnis – statt KI um jeden Preis.' },
        { icon: 'fact_check', title: 'Tests als Leitplanke', text: 'Automatisierte Tests sichern KI-generierten Code ab, bevor er in den produktiven Einsatz geht.' },
      ],
    },
    process: {
      eyebrow: 'Ablauf',
      icon: 'route',
      title: 'Vom Anwendungsfall zum produktiven Einsatz',
      text: 'Klein anfangen, schnell lernen, vollständig ausliefern.',
      steps: [
        { icon: 'chat', title: 'Erstgespräch', text: 'Wir sprechen über deine Ziele, Daten und Rahmenbedingungen – unverbindlich und persönlich.' },
        { icon: 'search', title: 'Analyse', text: 'Ich prüfe Prozesse, Datenlage und Systeme und finde den Anwendungsfall mit dem größten Nutzen.' },
        { icon: 'rocket_launch', title: 'Pilot', text: 'Ein konkreter Anwendungsfall wird schnell lauffähig – so siehst du früh, was KI für dich leistet.' },
        { icon: 'construction', title: 'Ausbau & Übergabe', text: 'Produktiver Einsatz mit Tests, Dokumentation und Leitlinien für den sicheren Betrieb.' },
        { icon: 'school', title: 'Befähigung', text: 'Auf Wunsch coache ich dein Team, damit es selbstständig mit den neuen Werkzeugen weiterarbeitet.' },
      ],
    },
    reference: {
      title: 'KI im Produktiveinsatz: WayVenture',
      text: 'In meiner Reise-App WayVenture macht KI aus Wegpunkten und Reisedaten automatisch eine lesbare Reise-Timeline – ein KI-Feature in einer Live-App.',
      cta: 'WayVenture ansehen',
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      icon: 'help',
      title: 'Fragen zu KI-Projekten',
      text: 'Das Wichtigste zu Datenschutz, Werkzeugen und Ablauf – und falls deine Frage fehlt, schreib mir einfach.',
      items: [
        {
          question: 'Was kostet ein KI-Projekt oder Coaching?',
          answer: 'Jedes Vorhaben wird individuell kalkuliert. Nach dem Erstgespräch erhältst du ein transparentes Angebot mit klaren Meilensteinen.',
        },
        {
          question: 'Werden meine Daten an KI-Anbieter übertragen?',
          answer: 'Nur die Daten, die wir vorher gemeinsam festlegen. Wo nötig, setzen wir lokal betriebene Modelle ein, etwa mit Ollama, sodass Daten dein Netzwerk nicht verlassen.',
        },
        {
          question: 'Mit welchen Modellen und Werkzeugen arbeitest du?',
          answer: 'Unter anderem mit Claude und Claude Code, der OpenAI API, lokalen Modellen über Ollama und dem Model Context Protocol (MCP). Die Auswahl richtet sich nach deinen Anforderungen an Qualität, Datenschutz und Betrieb.',
        },
        {
          question: 'Ersetzt KI meine Entwickler?',
          answer: 'Nein. KI macht erfahrene Entwickler schneller. Architektur, Code-Reviews und Verantwortung bleiben beim Menschen – genau darauf zielen Audit und Coaching ab.',
        },
        {
          question: 'Findet das Coaching remote statt?',
          answer: 'Ja, remote auf Deutsch oder Englisch. Vor Ort in Fulda ist es nach Absprache ebenfalls möglich.',
        },
      ],
    },
    cta: {
      title: 'Lass uns herausfinden, was KI für dich leisten kann',
      text: 'Erzähl mir von deinem Vorhaben. Ich melde mich innerhalb von 24 Stunden persönlich mit einer ersten Einschätzung.',
      cta: 'KI-Projekt anfragen',
    },
    service: {
      name: 'AI Development & KI-Beratung',
      serviceType: [ 'KI-Integration', 'KI-Agenten', 'MCP-Server-Entwicklung', 'KI-Beratung', 'Entwickler-Coaching' ],
      catalogName: 'KI-Leistungen',
    },
  },
};
