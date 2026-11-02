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
| URLs | Englische Slugs für beide Sprachen (wie `/imprint`). |
| Design | Neue Seiten direkt im bestehenden Design, kein separater Mock. |

### Support-Pakete (Inhalt ohne Preise)

| | Basis | Standard | Premium |
|---|---|---|---|
| Für | Einsteigerprojekte | mittelgroße Projekte | große / geschäftskritische Projekte |
| Profil | geringe Nutzerzahl, 1–2 Kernkomponenten, unkritischer Ausfall, seltene Änderungen | moderate Nutzerzahl, 2–4 Kernkomponenten, mittlere Kritikalität, regelmäßige Änderungen | hohe Nutzerzahl, 4+ Kernkomponenten, geschäftskritisch (SLA-relevant), häufige Änderungen |
| Leistungen | Monitoring, Security-Updates, Paket-Aktualisierungen, Funktionstests | wie Basis, erweitert | wie Standard, erweitert |
| Reaktionszeit | Ø < 120 h | Ø < 120 h | garantiert < 72 h |
| Inklusiv-Kontingent | monatliches Stundenkontingent | größeres Kontingent | größtes Kontingent |

Preise, Stundenzahlen und Stundensätze **nicht** auf der Website, sondern im Angebot. Ob Reaktionszeiten öffentlich genannt werden: offener Punkt.

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

- [ ] **0 Fundament:** Vitest, Content pro Seite aufteilen, `PageHero`/`CtaBanner`/`WhyMe`/`ProcessTimeline`/Breadcrumbs, Header mit Routen + aktiver Seite + Dropdown, Footer-Sitemap
- [ ] **1 Positionierung & Startseite:** Freelancing-Hero, „Warum ich“, neues Motto, Startseite verschlanken (Anker-IDs bleiben)
- [ ] **2 `/freelancing`**
- [ ] **3 `/packages`** (OfferCatalog-Markup)
- [ ] **4 `/support`** + Support-Paketanfrage im Kontaktformular (Topic/Package-Vorbelegung, TDD)
- [ ] **5 `/ai-development`**
- [ ] **6 `/approach`**
- [ ] **7 `/about` + `/contact`**
- [ ] **8 Querschnitt & QA:** interne Verlinkung, `llms.txt`, Lighthouse, a11y, Mobile, beide Sprachen, Rechtstexte prüfen, `npm run build`

Texte werden pro Phase in DE + EN entworfen und im PR reviewt.

## Offene Punkte

- [ ] Compliance: Was kann konkret zugesagt werden (AV-Vertrag, EU-Hosting, WCAG 2.1 AA / BFSG, …)?
- [ ] Referenzen: JagdTausch o. a. als Fallbeispiel nutzbar? Weitere Testimonials?
- [ ] Support-Reaktionszeiten öffentlich nennen (Ø < 120 h / < 72 h) oder nur „definierte Reaktionszeiten“?
