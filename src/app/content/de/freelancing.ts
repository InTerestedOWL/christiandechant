import { SiteContent } from "../../interfaces";

export const freelancingPageContent: Pick<SiteContent, 'freelancingPage'> = {
  freelancingPage: {
    metaTitle: 'Freelance Senior-Entwickler für Web & Software | Christian Dechant',
    metaDescription: 'Freelance Senior Full-Stack-Entwickler aus Fulda: Projektentwicklung, Team-Verstärkung, Interim CTO und Team-Enablement. Persönlich, remote im DACH-Raum, von der Idee bis zum produktiven Betrieb.',
    keywords: [
      'Freelance Entwickler',
      'Freelancer Softwareentwicklung',
      'Senior Full-Stack Entwickler Freelance',
      'Freelance Next.js Entwickler',
      'Freelance C# .NET Entwickler',
      'Interim CTO',
      'Entwickler Team-Verstärkung',
      'MVP Entwicklung',
      'Freelancer Fulda',
    ],
    breadcrumb: 'Freelancing',
    hero: {
      eyebrow: 'Freelancing',
      icon: 'handshake',
      title: 'Senior-Entwicklung, die zu dir passt —',
      titleHighlight: 'persönlich, fokussiert, vollständig.',
      intro: 'Als freiberuflicher Senior Full-Stack-Entwickler unterstütze ich Unternehmen, Gründer und Entwicklungsteams dort, wo es gerade zählt: als Entwickler für dein Projekt, als Verstärkung im Team oder als technischer Sparringspartner. Du arbeitest direkt mit mir – von der ersten Idee bis zur Software im produktiven Einsatz.',
      primaryCta: 'Projekt anfragen',
      secondaryCta: 'Einsatzmodelle ansehen',
      facts: [
        { icon: 'public', label: 'Remote-first im DACH-Raum & international' },
        { icon: 'translate', label: 'Deutsch & Englisch' },
        { icon: 'location_on', label: 'Vor Ort in Fulda nach Absprache' },
        { icon: 'event_available', label: 'Begrenzte Kapazität für ausgewählte Projekte' },
      ],
    },
    models: {
      eyebrow: 'Einsatzmodelle',
      icon: 'tune',
      title: 'So kann ich dich unterstützen',
      text: 'Jedes Vorhaben ist anders. Deshalb gibt es kein Standardpaket, sondern das Modell, das zu deinem Ziel, deinem Team und deinem Zeitplan passt.',
      items: [
        {
          icon: 'deployed_code',
          accent: 'brand',
          title: 'Projektentwicklung',
          text: 'Ich setze dein Vorhaben eigenverantwortlich um – von der Website über die Web-App bis zur individuellen Software. Mit klaren Meilensteinen, frühen Releases und vollständiger Übergabe.',
          points: [ 'Websites, Web-Apps & Portale', 'APIs, Schnittstellen & Microservices', 'Quellcode & Dokumentation gehören dir' ],
        },
        {
          icon: 'group_add',
          accent: 'indigo',
          title: 'Team-Verstärkung',
          text: 'Dein Team braucht Senior-Erfahrung auf Zeit? Ich arbeite mich schnell in bestehende Codebasen ein und bringe Architektur, Code-Qualität und Tempo in dein Projekt.',
          points: [ 'Mitarbeit in deinen Prozessen & Tools', 'Code-Reviews & Architekturentscheidungen', 'Wissenstransfer statt Abhängigkeit' ],
        },
        {
          icon: 'lightbulb',
          accent: 'amber',
          title: 'Interim CTO & Gründerberatung',
          text: 'Für nicht-technische Gründer und junge Unternehmen: tragfähige technische Entscheidungen von Anfang an – und die Sicherheit, dass der Quellcode in deinen Händen liegt.',
          points: [ 'MVP-Scoping & Priorisierung', 'Make-or-Buy & Tech-Stack-Auswahl', 'Quellcode bleibt in deinen Händen' ],
        },
        {
          icon: 'groups',
          accent: 'emerald',
          title: 'Team-Enablement & Prozess-Setup',
          text: 'Saubere Branching-Strategien, CI/CD-Pipelines, agile Rituale und technische Interviews bei Neueinstellungen – damit dein Team auch ohne mich schnell und sicher liefert.',
          points: [ 'CI/CD & Branching-Strategien', 'Agile Prozesse & Code-Review-Kultur', 'Technische Interviews' ],
        },
      ],
    },
    workingModel: {
      eyebrow: 'Arbeitsweise',
      icon: 'work',
      title: 'Freelancing neben fester Senior-Position',
      text: 'Ich bin parallel als Senior-Entwickler in der Industrie angestellt. Für dich heißt das: aktuelle Praxis aus großen Systemen, Unabhängigkeit von deinem Projekt und eine bewusst kleine Zahl an Kunden.',
      items: [
        { icon: 'factory', title: 'Aktuelle Industriepraxis', text: 'Microservices, Cloud und Qualitätsprozesse aus dem täglichen Einsatz – keine Theorie aus dem Lehrbuch.' },
        { icon: 'diamond', title: 'Wenige Kunden, volle Aufmerksamkeit', text: 'Ich nehme nur so viele Projekte an, wie ich mit voller Sorgfalt betreuen kann. Kapazität und Starttermin klären wir offen im Erstgespräch.' },
        { icon: 'event_note', title: 'Verlässliche Planung', text: 'Feste Zeitfenster, klare Meilensteine und transparente Kommunikation statt Überraschungen beim Liefertermin.' },
        { icon: 'forum', title: 'Direkter Draht', text: 'Du sprichst immer mit mir. Fragen beantworte ich persönlich, Entscheidungen treffen wir gemeinsam.' },
      ],
    },
    process: {
      eyebrow: 'Ablauf',
      icon: 'route',
      title: 'Von der Anfrage bis zum produktiven Betrieb',
      text: 'Fünf klare Schritte – damit du jederzeit weißt, wo dein Projekt steht.',
      steps: [
        { icon: 'chat', title: 'Erstgespräch', text: 'Wir sprechen über dein Ziel, deine Nutzer und den Rahmen – unverbindlich und persönlich.' },
        { icon: 'assignment', title: 'Scoping & Angebot', text: 'Ich schneide den Umfang zu, priorisiere das MVP und erstelle ein individuelles Angebot mit klaren Meilensteinen.' },
        { icon: 'construction', title: 'Umsetzung in Iterationen', text: 'Frühe, lauffähige Zwischenstände und regelmäßige Abstimmung: Du siehst den Fortschritt, statt auf ihn zu warten.' },
        { icon: 'rocket_launch', title: 'Go-live', text: 'Vollständig ausgeliefert: Authentifizierung, Fehlerbehandlung, Tests, Dokumentation und Übergabe des Quellcodes.' },
        { icon: 'support_agent', title: 'Betrieb & Support', text: 'Auf Wunsch bleibe ich an Bord: Monitoring, Updates und Weiterentwicklung über Support-Pakete.' },
      ],
    },
    caseStudy: {
      eyebrow: 'Referenz',
      icon: 'workspace_premium',
      title: 'JagdTausch: Marktplatz-MVP von der Idee bis zur fertigen Plattform',
      client: 'JagdTausch',
      period: 'Juli 2025 – Okt. 2026',
      text: 'Als freiberuflicher Lead Developer habe ich die Marktplatz-Plattform für gebrauchte Jagdausrüstung konzipiert und schlüsselfertig umgesetzt – als Progressive Web App mit Echtzeit-Chat, Filtersystem und Admin-Dashboard.',
      deliverables: [ 'Konzeption & Architektur', 'Progressive Web App', 'Echtzeit-Chat', 'Filtersystem', 'Admin-Dashboard' ],
      quote: {
        name: 'Caroline Grabowski',
        role: 'JagdTausch',
        text: 'Tolle Zusammenarbeit – immer zuverlässig, pünktlich und mit Leidenschaft bei der Sache. Er hat sich für alles Zeit genommen und einen fantastischen Job gemacht!',
      },
      linkLabel: 'jagdtausch.de besuchen',
    },
    stack: {
      eyebrow: 'Technologien',
      icon: 'stacks',
      title: 'Tech-Stack',
      text: 'Die Technologie richtet sich nach deinem Vorhaben. In diesen Bereichen habe ich produktive Projekterfahrung:',
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      icon: 'help',
      title: 'Fragen zum Freelancing',
      text: 'Das Wichtigste zur Zusammenarbeit – und falls deine Frage fehlt, schreib mir einfach.',
      items: [
        {
          question: 'Wie viel Kapazität hast du für mein Projekt?',
          answer: 'Ich arbeite freiberuflich neben meiner festen Position und nehme bewusst nur wenige Projekte parallel an. Wie viel Zeit dein Vorhaben braucht und wann wir starten können, klären wir offen im Erstgespräch. Zusagen mache ich nur, wenn ich sie auch einhalten kann.',
        },
        {
          question: 'Arbeitest du remote oder vor Ort?',
          answer: 'Remote-first für Kunden in Deutschland, Österreich, der Schweiz und international, auf Deutsch und Englisch. Termine vor Ort in Fulda und Umgebung sind nach Absprache möglich.',
        },
        {
          question: 'Wem gehört der Quellcode?',
          answer: 'Dir. Quellcode, Dokumentation und Zugänge werden vollständig übergeben, sodass du nicht von mir abhängig bist.',
        },
        {
          question: 'Wie wird abgerechnet?',
          answer: 'Jedes Projekt wird individuell kalkuliert. Nach dem Erstgespräch erhältst du ein transparentes Angebot mit klaren Meilensteinen. Für eine laufende Zusammenarbeit, etwa als Team-Verstärkung, vereinbaren wir ein passendes Modell.',
        },
        {
          question: 'Unterstützt du auch nach dem Go-live?',
          answer: 'Ja. Über Support-Pakete übernehme ich Monitoring, Security- und Paket-Updates, Funktionstests und Weiterentwicklung – mit definierten Reaktionszeiten, im Premium-Paket garantiert.',
        },
      ],
    },
    cta: {
      title: 'Bereit für den nächsten Schritt?',
      text: 'Erzähl mir von deinem Vorhaben. Ich antworte innerhalb von 24 Stunden persönlich.',
      cta: 'Projekt anfragen',
    },
    service: {
      name: 'Freelance Senior Full-Stack-Entwicklung',
      serviceType: [ 'Softwareentwicklung', 'Webentwicklung', 'Team-Verstärkung', 'Interim CTO', 'Technische Beratung' ],
    },
  },
};
