import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen – admin4me",
  description: "Zufriedene Kunden aus Moringen und Umgebung. Referenzen von REWE Markt, bohrmann & mai und weiteren Unternehmen.",
};

const referenzen = [
  {
    name: 'Lindigkeit | Mertens\nPartnerschaft von Rechtsanwälten mbB',
    logo: '/images/references/lindigkeit.png',
    text: 'Rechtsanwalt, Kanzlei und Notariat',
    bullets: [
      'Sichere E-Mail-Archivierung',
      'Datenschutz & Compliance',
      'Zuverlässige Serverwartung'
    ],
    website: 'https://www.lindigkeit-partner.de/'
  },
  {
    name: 'BDS Mehrwert GmbH',
    logo: '/images/references/bds-mehrwert.svg',
    text: 'BDS Mehrwert GmbH – Exklusive Vorteilsangebote für BDS Bayern Mitglieder in den Bereichen KFZ, Versicherung, Vorsorge und Freizeit.',
    bullets: [
      'Vorteilsangebote für Mitglieder',
      'Branchenbuch & Mediathek',
      'KFZ Abrufschein-Service'
    ],
    website: 'https://www.bds-mehrwert.de/'
  },
  {
    name: 'Bauverein Northeim eG',
    logo: '/images/references/bauverein-logo.jpg.webp',
    text: 'Bauverein Northeim eG – Seit 100 Jahren zuverlässiger Partner für Wohnraumversorgung in Northeim.',
    bullets: [
      'Wohnungsverwaltung',
      'Genossenschaftliche Strukturen',
      'Moderne Wohnanlagen'
    ],
    website: 'https://www.bauverein-northeim.de/'
  },
  {
    name: 'GOESYS AG',
    logo: '/images/references/goesys-ag-it-systemhaus-goettingen-logo.png',
    text: 'GOESYS AG – IT-Systemhaus aus Göttingen mit umfassenden IT-Lösungen für Unternehmen.',
    bullets: [
      'IT-Systemhaus Services',
      'Unternehmens-IT-Lösungen',
      'Professionelle IT-Betreuung'
    ],
    website: 'https://www.goesys.de/'
  },
  {
    name: 'Bund der Selbständigen - Gewerbeverband Bayern e. V.',
    logo: '/images/references/bds.png',
    text: 'Sichere IT-Infrastruktur für den BDS – Datenschutz und Zuverlässigkeit im Fokus.',
    bullets: [
      'Datensicherung & Backups',
      'IT-Support für Mitglieder',
      'Schulungen zu IT-Sicherheit'
    ],
    website: 'https://www.bds-bayern.de/'
  },
  {
    name: 'Hilmer',
    logo: '/images/references/hilmer.png',
    text: 'Hilmer – Zuverlässige IT-Lösungen und persönlicher Service für Ihr Unternehmen.',
    bullets: [
      'IT-Betreuung vor Ort',
      'Hardware-Beschaffung',
      'Schnelle Störungsbeseitigung'
    ],
    website: 'https://www.hilmer-gmbh.de/'
  },
  {
    name: 'Nüske Transport und Landschaftsbau GmbH',
    logo: '/images/references/nueske.png',
    text: 'Nüske – Moderne IT für Transport und Landschaftsbau. Effizient, sicher, zukunftsorientiert.',
    bullets: [
      'Mobile Arbeitsplatzlösungen',
      'GPS-Tracking für Fahrzeuge',
      'Wartung der IT-Infrastruktur'
    ],
    website: 'https://www.nueske-landschaftsbau.de/'
  },
  {
    name: 'Bayern-Impuls',
    logo: '/images/references/bayern-impulse.png',
    text: 'Bayern Impulse – Innovative Lösungen und Impulse für die bayerische Wirtschaft.',
    bullets: [
      'Wirtschaftsförderung',
      'Innovationsberatung',
      'Regionale Entwicklung'
    ],
    website: 'https://bayern-impuls.de/'
  },
  {
    name: 'IT Fernsehen UG',
    logo: '/images/references/it-fernsehen.png',
    text: 'IT Fernsehen UG – Professionelle LiveStream- und Videoproduktionen für moderne Projekte.',
    bullets: [
      'Live auf Ihrer Webseite',
      'Parallel auf allen Media-Plattformen',
      'Professionelle Videoproduktion'
    ],
    website: 'https://it-television.net/'
  },
  {
    name: 'Barenberg Special Materials GmbH',
    logo: '/images/references/Barenberg-Special-Materials-GmbH.png',
    text: 'Barenberg Special Materials GmbH – Spezialist für Ultra-Hochtemperaturverfahrenstechnik zur Herstellung von Refraktärmetallen.',
    bullets: [
      'Wolfram Schmelzcarbid',
      'Up-Cycling Wolfram Metal Pulver',
      'F&E für Produktentwicklung'
    ],
    website: 'https://barenberg.solutions/'
  },
  {
    name: 'RA Michael Forster',
    logo: '/images/references/ra-forster.png',
    text: 'RA Michael Forster – Kompetente Rechtsberatung und zuverlässige IT-Infrastruktur für moderne Kanzleien.',
    bullets: [
      'Rechtsanwaltskanzlei',
      'IT-Sicherheit & Compliance',
      'Digitale Arbeitsprozesse'
    ],
    website: 'https://www.ra-forster.eu/'
  },
  {
    name: 'Sehorz IT-Center',
    logo: '/images/references/sehorz.JPG',
    text: 'Sehorz IT-Center – Ihr Partner für Mediendesign, Seminare, Software und Consulting mit über 15 Jahren Erfahrung.',
    bullets: [
      'Mediendesign & Webentwicklung',
      'Software-Entwicklung (seventox®)',
      'IT-Consulting & Storage-Experten'
    ],
    website: 'https://www.sehorz.de/'
  },
  {
    name: 'iS-Fun Internet Services GmbH',
    logo: '/images/references/isfun.PNG',
    text: 'iS-Fun Internet Services GmbH – Innovative Internet-Services und maßgeschneiderte IT-Lösungen.',
    bullets: [
      'Internet Services',
      'Maßgeschneiderte IT-Lösungen',
      'Moderne Webtechnologien'
    ],
    website: 'https://www.is-fun.de/'
  },
];

export default function Referenzen() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center mb-32">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-12">
          Unsere Referenzen
        </h1>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Erfolgreiche IT-Projekte für zufriedene Kunden in Moringen und Umgebung. Vertrauen Sie auf unsere Erfahrung und Kompetenz.
        </p>
      </section>

      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {referenzen.map((ref) => (
            <div key={ref.name} className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300 flex flex-col items-center">
              <img
                src={ref.logo}
                alt={`${ref.name} - Firmenlogo`}
                className="max-h-32 max-w-full w-auto h-auto mb-8 object-contain"
              />
              <h3 className="text-lg font-semibold text-professional dark:text-white mb-2 text-center whitespace-pre-line">{ref.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-4">{ref.text}</p>
              <ul className="text-gray-600 dark:text-gray-300 text-left space-y-1 mb-4">
                {ref.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span>{bullet}</li>
                ))}
              </ul>
              {ref.website && (
                <a 
                  href={ref.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200 text-sm"
                >
                  Website besuchen →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-800 rounded-2xl p-16 border-professional dark:border-gray-700 shadow-professional">
        <h2 className="heading-md text-professional dark:text-white mb-10">
          Werden Sie unser nächster zufriedener Kunde
        </h2>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Lassen Sie uns gemeinsam Ihre IT-Herausforderungen lösen. 
          Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a href="/kontakt" className="btn-primary">
            Beratung anfragen
          </a>
          <a href="/leistungen" className="btn-secondary">
            Unsere Leistungen
          </a>
        </div>
      </section>
    </div>
  );
} 