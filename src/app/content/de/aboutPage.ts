import { SiteContent } from "../../interfaces";

export const aboutPageContent: Pick<SiteContent, 'aboutPage'> = {
  aboutPage: {
    metaTitle: 'Über mich: Christian Dechant, Senior Full-Stack-Entwickler | Christian Dechant',
    metaDescription: 'Christian Dechant: Senior Full-Stack-Entwickler und KI-Berater aus der Region Fulda, M.Sc. Angewandte Informatik, Gründer von WayVenture und Truppführer in der Freiwilligen Feuerwehr. Werdegang, Werte und Masterarbeit.',
    keywords: [
      'Christian Dechant',
      'Senior Full-Stack Entwickler Fulda',
      'Freelance Entwickler Hofbieber',
      'Softwareentwickler Werdegang',
      'Masterarbeit Kubernetes Zero Trust',
      'Gründer WayVenture',
    ],
    breadcrumb: 'Über mich',
    hero: {
      eyebrow: 'Über mich',
      icon: 'person',
      title: 'Christian Dechant —',
      titleHighlight: 'Senior-Entwickler mit Gründer-Perspektive.',
      intro: 'Ich entwickle seit über neun Jahren Software – in der Industrie, als Gründer und als Freelancer. Mich treibt an, aus einer Idee ein Produkt zu machen, das im Alltag zuverlässig funktioniert. Neben meiner festen Position bei *Strauss GmbH & Co. KG* arbeite ich mit wenigen ausgewählten Kunden direkt zusammen.',
      primaryCta: 'Projekt anfragen',
      secondaryCta: 'Werdegang ansehen',
      facts: [
        { icon: 'school', label: 'M.Sc. Angewandte Informatik' },
        { icon: 'history_edu', label: '9+ Jahre Software Engineering' },
        { icon: 'explore', label: 'Gründer von WayVenture' },
        { icon: 'location_on', label: 'Region Fulda, remote-first' },
      ],
    },
    story: {
      eyebrow: 'Mein Weg',
      icon: 'route',
      title: 'Vom Werkstudenten zum Senior-Entwickler und Gründer',
      text: 'Drei Perspektiven, die heute jedem Projekt zugutekommen.',
      paragraphs: [
        'Angefangen habe ich als Werkstudent: Schon während des Studiums habe ich CRM-Systeme für Kunden angepasst und ein Reporting-Tool für Theater und Veranstalter mitentwickelt. Mein Master in Angewandter Informatik an der Hochschule Fulda hat mir die wissenschaftliche Tiefe gegeben – meine Masterarbeit beschäftigt sich mit der Absicherung von Kubernetes-Clustern nach dem Zero-Trust-Prinzip.',
        'Als Gründer weiß ich, wie es sich anfühlt, mit begrenztem Budget die richtigen Prioritäten zu setzen: zuerst mit einem Indoor-Navigationssystem auf Basis von Bluetooth Low Energy, heute mit meiner Reise-App WayVenture. Diese Perspektive bringe ich in jedes Kundenprojekt ein.',
        'Bei *Strauss GmbH & Co. KG* entwickle ich Core Microservices mit C# .NET und Angular, die Schritt für Schritt ein Legacy-System ablösen. Als Freelancer setze ich Projekte wie den JagdTausch-Marktplatz um und bringe Prinzipien klassischer Softwareentwicklung in KI-Workflows und MCP-Server.',
      ],
    },
    values: {
      eyebrow: 'Werte',
      icon: 'favorite',
      title: 'Worauf du dich verlassen kannst',
      text: 'So arbeite ich – in jedem Projekt, mit jedem Kunden.',
      items: [
        { icon: 'handshake', title: 'Ehrlich & transparent', text: 'Ich sage, was geht und was nicht – auch wenn es nicht die bequeme Antwort ist. Zusagen mache ich nur, wenn ich sie halten kann.' },
        { icon: 'schedule', title: 'Verlässlich', text: 'Absprachen und Termine gelten. Wenn etwas hakt, erfährst du es früh und direkt von mir.' },
        { icon: 'task_alt', title: 'Qualität mit Augenmaß', text: 'Vollständig heißt nicht überladen: lieber das Richtige gründlich als alles halb.' },
        { icon: 'lightbulb', title: 'Neugierig', text: 'Neue Technologien wie KI-Agenten probiere ich früh aus – und setze sie erst ein, wenn sie sich bewährt haben.' },
      ],
    },
    product: {
      title: 'Mein eigenes Produkt: WayVenture',
      text: 'Als Gründer von WayVenture kenne ich beide Seiten: die Technik und die Entscheidungen, die ein Produkt erfolgreich machen.',
      cta: 'WayVenture ansehen',
    },
    cta: {
      title: 'Lass uns kennenlernen',
      text: 'Erzähl mir von deinem Vorhaben. Ich melde mich innerhalb von 24 Stunden persönlich zurück.',
      cta: 'Erstgespräch vereinbaren',
    },
  },
};
