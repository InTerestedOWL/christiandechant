# Plan: Vom One-Pager zur Multi-Page-Website

Stand: 2026-11-02 · Status-Legende: `[ ]` offen · `[~]` in Arbeit · `[x]` erledigt

## Ziel

Professioneller Auftritt mit dedizierten Seiten statt One-Pager. Freelancing rückt in den Fokus.
Klar beantworten: **Warum Christian?**

1. **Individualität:** so individuell wie du als Kunde bist, keine Baukastenlösung
2. **Exklusivität:** wenige parallele Projekte, direkter Draht zum Senior-Entwickler, keine Subunternehmer, Quellcode gehört dem Kunden
3. **Compliance:** DSGVO, EU-Hosting, Barrierefreiheit, KI-Governance (nur belegbare Aussagen, siehe offene Punkte)
4. **Support:** Betreuung nach dem Go-live, Support-Pakete
5. **Idee → produktiv nutzbares Produkt:** Scoping → Prototyp → MVP → Go-live → Betrieb

Leitsatz überall: **„Deliver fast, but deliver complete.“** (ersetzt „Publish early, but publish complete.“)

## Getroffene Entscheidungen

| Thema | Entscheidung |
|---|---|
| Anstellung | Weiterhin angestellt bei Strauss. Positiv formulieren: Freelancing neben fester Senior-Position = aktuelle Industriepraxis + bewusst begrenzte Kapazität (Exklusivität). |
| Kapazität | 10–15 Std./Woche. **Keine exakte Stundenzahl auf der Website**, stattdessen „begrenzte Kapazität für ausgewählte Projekte“. Details im Erstgespräch. |
| Preise | Keine öffentlichen Preise (Individualität). Gilt auch für Support-Pakete. |
| Support | Neues Angebot mit 3 Support-Paketen und eigener Paketanfrage im Kontaktformular. |
| URLs | Englische Slugs für beide Sprachen (wie `/imprint`), z. B. `/de/packages` und `/en/packages`. |
| Design | Neue Seiten direkt im bestehenden Design, kein separater Mock. Bei Bedarf neuer Entwurf via Stitch. |
| Reaktionszeiten | **Keine fixen Zahlen** auf der Website: „definierte Reaktionszeiten, garantiert im Premium-Paket“. Zahlen nur im Angebot. |
| Compliance | Zusagbar: AV-Vertrag (AVV), Hosting in der EU, Barrierefreiheit nach WCAG 2.1 AA (BFSG), DSGVO, KI-Governance. |
| Referenzen | JagdTausch als Fallbeispiel. MCT vorerst ausgeklammert (Rückfrage beim Kunden offen). |
| Ansprache | Deutsch durchgehend „du“. Ausnahme: Rechtstexte (Impressum, Datenschutz) bleiben formell. |
| Erstgespräch | Darf „unverbindlich“ genannt werden. |

### Support-Pakete (Inhalt ohne Preise)

| | Basis | Standard | Premium |
|---|---|---|---|
| Für | Einsteigerprojekte | mittelgroße Projekte | große / geschäftskritische Projekte |
| Profil | geringe Nutzerzahl, 1–2 Kernkomponenten, unkritischer Ausfall, seltene Änderungen | moderate Nutzerzahl, 2–4 Kernkomponenten, mittlere Kritikalität, regelmäßige Änderungen | hohe Nutzerzahl, 4+ Kernkomponenten, geschäftskritisch (SLA-relevant), häufige Änderungen |
| Leistungen | Monitoring, Security-Updates, Paket-Aktualisierungen, Funktionstests | wie Basis, erweitert | wie Standard, erweitert |
| Reaktionszeit | definiert | definiert | garantiert |
| Inklusiv-Kontingent | monatliches Stundenkontingent | größeres Kontingent | größtes Kontingent |

Preise, Stundenzahlen, Stundensätze und konkrete Reaktionszeiten **nicht** auf der Website, sondern im Angebot.

## Seitenstruktur

| Route (`/de`, `/en`) | Inhalt |
|---|---|
| `/` | Hero mit Freelancing-Fokus, „Warum ich“, Leistungs-Teaser, Referenzen, CTA |
| `/freelancing` | Einsatzmodelle (Projekt, Team-Verstärkung, Interim CTO, Gründerberatung), Kapazität, Remote/vor Ort, Stack, Ablauf, FAQ |
| `/packages` | 4 Webpakete ausführlich, Vergleichstabelle, Ablauf, FAQ |
| `/support` | 3 Support-Pakete, Leistungen, Reaktionszeiten, Paketanfrage |
| `/ai-development` | KI-Features in Produkten, Agenten & MCP, KI-Audit & Governance, 1:1-Coaching |
| `/approach` | Idee → Produkt (Phasen-Timeline), Deliver fast/complete, Compliance |
| `/about` | Werdegang, Masterarbeit, Ehrenamt, Werte |
| `/contact` | Formular (vorbelegbar per `?topic=…&package=…`), Ablauf nach Anfrage |
| `/wayventure` | bleibt, wird als Produkt-Beleg verlinkt |

Navigation: Freelancing · Leistungen ▾ (Webpakete, Support, AI Development) · Arbeitsweise · Über mich · WayVenture · [Projekt anfragen]

## Phasen

Jede Phase = eigener Branch + PR. Jede Seite wird **komplett** ausgeliefert: Metadaten, OG-Bild, JSON-LD, Sitemap-Eintrag, beide Sprachen.
Jeder Merge auf `main` wird automatisch deployed, daher muss jede Phase für sich auslieferbar sein: Navigation verlinkt nur existierende Seiten, Startseiten-Abschnitte verschwinden erst, wenn ihre Seite live ist.
Gemeinsame Bausteine (`PageHero`, `CtaBanner`, `WhyMe`, `ProcessTimeline`, Leistungen-Dropdown) entstehen in der Phase, die sie zuerst braucht, damit kein ungenutzter Code entsteht.

- [x] **0 Fundament:** Vitest, Routen-Registry + aktive Navigation (TDD), Content pro Bereich aufteilen, gemeinsamer Metadaten-Helper für Unterseiten (TDD)
- [x] **1 Positionierung & Startseite:** Freelancing-Hero, „Warum ich“ (#why), neues Motto, FAQ „Warum statt Agentur?“, Ehrenamt aus Hauptnavigation. Startseite wird schrittweise verschlankt, sobald die jeweilige Seite live ist (Anker-IDs bleiben)
- [x] **2 `/freelancing`** (erste Unterseite: `PageHero`, `CtaBanner`, Breadcrumbs, Service-/Breadcrumb-/FAQ-JSON-LD per TDD; JagdTausch-Referenz; seitenweite Barrierefreiheit: Skip-Link, Fokus, reduzierte Bewegung, Kontraste → Lighthouse a11y 100 auf allen Seiten)
- [x] **3 `/packages`** (Paketkarten mit „Ideal für“, barrierefreie Vergleichstabelle, Standards in jedem Paket, Ablauf, FAQ, OfferCatalog-Markup per TDD; Startseite verlinkt den Vergleich)
- [x] **4 `/support`** + Support-Paketanfrage im Kontaktformular (Topic/Package-Vorbelegung per TDD, Paket-CTAs füllen das Formular vor; Navigation mit barrierefreiem „Leistungen“-Dropdown)
- [x] **5 `/ai-development`** (4 Leistungen, Grundsätze, Ablauf, WayVenture als KI-Referenz, FAQ, OfferCatalog; Startseite verlinkt die Seite, Track-CTAs füllen das Formular mit KI/Coaching vor)
- [x] **6 `/approach`** (5 Phasen, Leitsatz Fast/Complete, Definition of Done, Compliance, FAQ; Navigation: „Arbeitsweise“ ersetzt „Erfahrung“, das in `/about` aufgeht; Motto-Abschnitt verlinkt die Seite)
- [x] **7 `/about` + `/contact`** (Werdegang, Werte, Ehrenamt bzw. Formular + Ablauf nach der Anfrage; alle Kontakt-Links führen auf `/contact`, per TDD; Startseite ohne Werdegang/Ehrenamt)
- [x] **8 Querschnitt & QA:** (Footer-Navigation, Neuer-Tab-Hinweise, `aria-labelledby` überall, DE/EN-Strukturtest, kein horizontales Scrollen bei 375 px und 640 px, ein h1 pro Seite, keine toten Links, Lighthouse a11y/SEO/Best Practices 100 auf allen 22 Seiten, Rechtstexte geprüft) interne Verlinkung, `llms.txt`, Lighthouse, a11y, Mobile, beide Sprachen, Rechtstexte prüfen, `npm run build`

Texte werden pro Phase in DE + EN entworfen und im PR reviewt.

## Offene Punkte

- [ ] MCT (zurückgestellt, Christian fragt nach): Wer/was ist das, was wurde umgesetzt, gibt es ein Zitat und darf der Name genannt werden?
