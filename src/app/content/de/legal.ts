import { SiteContent } from "../../interfaces";
import { contactEmail } from "../shared";

const legalUpdated = 'Stand: September 2026';

export const legalContent: Pick<SiteContent, 'imprint' | 'privacy'> = {
  imprint: {
    metaTitle: 'Impressum | Christian Dechant',
    metaDescription: 'Impressum und Anbieterkennzeichnung von Christian Dechant gemäß § 5 DDG.',
    eyebrow: 'Rechtliches',
    title: 'Impressum',
    updated: legalUpdated,
    sections: [
      {
        heading: 'Angaben gemäß § 5 DDG',
        paragraphs: [ 'Christian Dechant\nLangenbieberer Str. 14\n36145 Hofbieber\nDeutschland' ],
      },
      {
        heading: 'Kontakt',
        paragraphs: [ `E-Mail: ${ contactEmail }` ],
      },
      {
        heading: 'Umsatzsteuer',
        paragraphs: [ 'Kleinunternehmer im Sinne von § 19 UStG. Es wird keine Umsatzsteuer berechnet und ausgewiesen.' ],
      },
      {
        heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
        paragraphs: [ 'Christian Dechant\nLangenbieberer Str. 14\n36145 Hofbieber' ],
      },
      {
        heading: 'Verbraucherstreitbeilegung',
        paragraphs: [ 'Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.' ],
      },
      {
        heading: 'Haftung für Inhalte',
        paragraphs: [
          'Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
          'Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.',
        ],
      },
      {
        heading: 'Haftung für Links',
        paragraphs: [
          'Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
          'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.',
        ],
      },
      {
        heading: 'Urheberrecht',
        paragraphs: [
          'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
          'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.',
        ],
      },
    ],
  },
  privacy: {
    metaTitle: 'Datenschutzerklärung | Christian Dechant',
    metaDescription: 'Informationen zur Verarbeitung personenbezogener Daten auf christiandechant.de gemäß DSGVO.',
    eyebrow: 'Rechtliches',
    title: 'Datenschutzerklärung',
    intro: 'Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Nachfolgend informiere ich Sie gemäß Art. 13 DSGVO darüber, welche Daten beim Besuch dieser Website verarbeitet werden, zu welchem Zweck und auf welcher Rechtsgrundlage.',
    updated: legalUpdated,
    sections: [
      {
        heading: '1. Verantwortlicher',
        paragraphs: [
          'Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
          `Christian Dechant\nLangenbieberer Str. 14\n36145 Hofbieber\nDeutschland\nE-Mail: ${ contactEmail }`,
          'Ein Datenschutzbeauftragter ist nicht benannt, da hierzu keine gesetzliche Pflicht besteht.',
        ],
      },
      {
        heading: '2. Rechtsgrundlagen',
        paragraphs: [ 'Ich verarbeite personenbezogene Daten auf Grundlage der folgenden Rechtsgrundlagen:' ],
        list: [
          'Art. 6 Abs. 1 lit. a DSGVO – Einwilligung',
          'Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung und vorvertragliche Maßnahmen',
          'Art. 6 Abs. 1 lit. c DSGVO – Erfüllung einer rechtlichen Verpflichtung',
          'Art. 6 Abs. 1 lit. f DSGVO – berechtigte Interessen',
          '§ 25 Abs. 1 und 2 TDDDG – Speicherung von und Zugriff auf Informationen in Ihrem Endgerät',
        ],
      },
      {
        heading: '3. Hosting',
        paragraphs: [
          'Diese Website wird bei der Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland, gehostet. Beim Aufruf der Website werden die unten genannten Server-Logfiles auf den Servern des Hosters verarbeitet.',
          'Die Nutzung des Hosters erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung dieser Website (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Hoster besteht ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO.',
        ],
      },
      {
        heading: '4. Server-Logfiles',
        paragraphs: [ 'Bei jedem Aufruf dieser Website erfasst der Webserver automatisch Informationen, die Ihr Browser übermittelt:' ],
        list: [
          'IP-Adresse des anfragenden Geräts',
          'Datum und Uhrzeit des Zugriffs',
          'aufgerufene Seite bzw. Datei und HTTP-Statuscode',
          'übertragene Datenmenge',
          'Referrer-URL (zuvor besuchte Seite)',
          'Browsertyp, Browserversion und Betriebssystem (User Agent)',
        ],
        subsections: [
          {
            heading: 'Zweck, Rechtsgrundlage und Speicherdauer',
            paragraphs: [
              'Die Verarbeitung ist erforderlich, um die Website auszuliefern, ihre Stabilität und Sicherheit zu gewährleisten und Missbrauch abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine Zusammenführung mit anderen Datenquellen findet nicht statt. Die Logfiles werden gelöscht, sobald sie für diese Zwecke nicht mehr erforderlich sind.',
            ],
          },
        ],
      },
      {
        heading: '5. Kontaktformular und E-Mail',
        paragraphs: [
          'Wenn Sie mir über das Kontaktformular oder per E-Mail eine Anfrage senden, verarbeite ich die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, gewählter Projektbereich und Ihre Nachricht), um Ihre Anfrage zu bearbeiten und Ihnen zu antworten. Nach dem Absenden erhalten Sie an die angegebene E-Mail-Adresse eine automatische Eingangsbestätigung mit einer Kopie Ihrer Angaben.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Anbahnung oder Durchführung eines Vertrags zusammenhängt, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).',
          'Der Versand der E-Mails erfolgt über den SMTP-Server meines E-Mail-Anbieters, der die Daten als Auftragsverarbeiter verarbeitet. Eine sonstige Weitergabe an Dritte findet nicht statt.',
          'Ihre Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten (z.B. für Geschäftsbriefe nach § 257 HGB bzw. § 147 AO) entgegenstehen.',
        ],
      },
      {
        heading: '6. Cookies und Einwilligungsverwaltung',
        paragraphs: [
          'Diese Website setzt keine Tracking- oder Werbe-Cookies ein und bindet derzeit keine optionalen Dienste Dritter ein. Beim ersten Besuch fragt ein Banner nach Ihrer Einwilligung für optionale Dienste, damit neue Dienste erst nach Ihrer Zustimmung geladen werden.',
          'Ihre Auswahl (erteilte Kategorien, Version und Zeitpunkt) wird ausschließlich lokal im Speicher Ihres Browsers (localStorage, Schlüssel „cd-consent“) abgelegt und nicht an meinen Server oder Dritte übertragen. Nach 12 Monaten werden Sie erneut gefragt.',
          'Die Speicherung ist unbedingt erforderlich, um Ihre Entscheidung zu berücksichtigen (§ 25 Abs. 2 Nr. 2 TDDDG); Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. c DSGVO i.V.m. Art. 7 Abs. 1 DSGVO. Sie können Ihre Auswahl jederzeit über den Link „Cookie-Einstellungen“ im Seitenfuß ändern oder widerrufen oder sie durch Löschen der Websitedaten in Ihrem Browser entfernen.',
        ],
      },
      {
        heading: '7. Schriftarten und Icons',
        paragraphs: [
          'Die auf dieser Website verwendeten Schriftarten (Geist, JetBrains Mono) und Icons (Material Symbols) werden lokal von meinem eigenen Server ausgeliefert. Es wird keine Verbindung zu Servern von Google oder anderen Drittanbietern aufgebaut.',
        ],
      },
      {
        heading: '8. Links zu externen Websites und sozialen Netzwerken',
        paragraphs: [
          'Diese Website enthält einfache Links zu externen Angeboten, z.B. LinkedIn, XING, GitHub, wayventure.de und jagdtausch.de. Es handelt sich nicht um eingebundene Plugins: Beim bloßen Besuch dieser Website werden keine Daten an diese Anbieter übertragen. Erst wenn Sie einen Link anklicken, gelangen Sie auf die Website des jeweiligen Anbieters, für die dessen Datenschutzbestimmungen gelten.',
        ],
      },
      {
        heading: '9. SSL- bzw. TLS-Verschlüsselung',
        paragraphs: [
          'Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie z.B. Anfragen über das Kontaktformular, eine TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.',
        ],
      },
      {
        heading: '10. Ihre Rechte',
        paragraphs: [ 'Ihnen stehen hinsichtlich Ihrer personenbezogenen Daten folgende Rechte zu:' ],
        list: [
          'Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)',
          'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
          'Löschung Ihrer Daten (Art. 17 DSGVO)',
          'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
          'Datenübertragbarkeit (Art. 20 DSGVO)',
          'Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)',
        ],
        subsections: [
          {
            heading: 'Widerspruchsrecht (Art. 21 DSGVO)',
            paragraphs: [
              'Soweit ich Ihre Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeite, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen.',
            ],
          },
          {
            heading: 'Beschwerderecht bei einer Aufsichtsbehörde',
            paragraphs: [
              'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig ist: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden, https://datenschutz.hessen.de',
            ],
          },
          {
            heading: 'Geltendmachung',
            paragraphs: [ `Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an ${ contactEmail }.` ],
          },
        ],
      },
      {
        heading: '11. Pflicht zur Bereitstellung und automatisierte Entscheidungen',
        paragraphs: [
          'Sie sind weder gesetzlich noch vertraglich verpflichtet, mir personenbezogene Daten bereitzustellen. Ohne Name und E-Mail-Adresse kann ich eine Anfrage über das Kontaktformular jedoch nicht beantworten. Eine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO) findet nicht statt.',
        ],
      },
      {
        heading: '12. Änderungen dieser Datenschutzerklärung',
        paragraphs: [
          'Ich passe diese Datenschutzerklärung an, sobald Änderungen der Website oder der Rechtslage dies erforderlich machen. Es gilt die jeweils hier veröffentlichte Fassung.',
        ],
      },
    ],
  },
};
