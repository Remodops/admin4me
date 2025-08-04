import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Referenzen & Kunden – admin4me Moringen",
  description: "Zufriedene Kunden aus Moringen und Umgebung. Referenzen von REWE Markt, Lindigkeit & Mertens, BDS Mehrwert und weiteren Unternehmen. Vertrauen Sie auf unsere Erfahrung!",
  keywords: "IT-Referenzen, zufriedene Kunden, REWE Markt, Lindigkeit & Mertens, BDS Mehrwert, Bauverein Northeim, GOESYS AG, Moringen, IT-Erfolge",
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
    text: 'Vermittler von Vorteilsangeboten für BDS Bayern Mitglieder in den Bereichen KFZ, Versicherung und Freizeit',
    bullets: [
      'E-Commerce Plattform-Betreuung',
      'Mitgliederverwaltung & CRM',
      'Sichere Zahlungsabwicklung'
    ],
    website: 'https://www.bds-mehrwert.de/'
  },
  {
    name: 'Bauverein Northeim eG',
    logo: '/images/references/bauverein-logo.jpg.webp',
    text: 'Wohnungsgenossenschaft im Raum Northeim',
    bullets: [
      'Wohnungsverwaltungssoftware',
      'Mitgliederverwaltung & Buchhaltung',
      'IT-Infrastruktur für Verwaltung'
    ],
    website: 'https://www.bauverein-northeim.de/'
  },
  {
    name: 'GOESYS AG',
    logo: '/images/references/goesys-ag-it-systemhaus-goettingen-logo.png',
    text: 'IT-Systemhaus aus Göttingen',
    bullets: [
      'Server-Infrastruktur',
      'Netzwerk-Management',
      'IT-Support & Wartung'
    ],
    website: 'https://www.goesys.de/'
  },
  {
    name: 'Bund der Selbständigen - Gewerbeverband Bayern e. V.',
    logo: '/images/references/bds.png',
    text: 'Gewerbeverband für selbständige Unternehmer in Bayern',
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
    text: 'Unternehmen spezialisiert auf Landtechnik und Fahrzeugservice',
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
    text: 'Unternehmen für Transport- und Landschaftsbau',
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
    text: 'Wirtschaftsförderungsgesellschaft für die bayerische Wirtschaft',
    bullets: [
      'Projektmanagement-Systeme',
      'Datenbanken für Wirtschaftsförderung',
      'IT-Infrastruktur für Beratung'
    ],
    website: 'https://bayern-impuls.de/'
  },
  {
    name: 'IT Fernsehen UG',
    logo: '/images/references/it-fernsehen.png',
    text: 'Produktionsfirma für LiveStream- und Videoproduktionen',
    bullets: [
      'Streaming-Infrastruktur',
      'Video-Produktions-IT',
      'Webseiten-Integration'
    ],
    website: 'https://it-television.net/'
  },
  {
    name: 'Barenberg Special Materials GmbH',
    logo: '/images/references/Barenberg-Special-Materials-GmbH.png',
    text: 'Spezialist für Ultra-Hochtemperaturverfahrenstechnik und Refraktärmetalle',
    bullets: [
      'Produktionssteuerung',
      'Forschungsdaten-Management',
      'IT für Verfahrenstechnik'
    ],
    website: 'https://barenberg.solutions/'
  },
  {
    name: 'RA Michael Forster',
    logo: '/images/references/ra-forster.png',
    text: 'Rechtsanwaltskanzlei',
    bullets: [
      'Rechtsanwaltssoftware',
      'IT-Sicherheit & Compliance',
      'Digitale Arbeitsprozesse'
    ],
    website: 'https://www.ra-forster.eu/'
  },
  {
    name: 'Sehorz IT-Center',
    logo: '/images/references/sehorz.JPG',
    text: 'IT-Dienstleister für Mediendesign, Software-Entwicklung und Consulting',
    bullets: [
      'Software-Entwicklung',
      'Webdesign & Hosting',
      'IT-Consulting Services'
    ],
    website: 'https://www.sehorz.de/'
  },
  {
    name: 'iS-Fun Internet Services GmbH',
    logo: '/images/references/isfun.PNG',
    text: 'Internet-Service-Provider und IT-Dienstleister',
    bullets: [
      'Webhosting & Domains',
      'Internet-Services',
      'IT-Lösungen für Kunden'
    ],
    website: 'https://www.is-fun.de/'
  },
  {
    name: 'Biogas',
    logo: '/images/references/biogas.png',
    text: 'Branchenverband für Biogas-Technologie und erneuerbare Energien',
    bullets: [
      'Verbandsverwaltung',
      'Mitgliederdatenbanken',
      'IT für Energiebranche'
    ],
    website: 'https://intranet.biogas.org/edcom/webfvb.nsf/id/DE_Homepage'
  },
];

export default function Referenzen() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center mb-16">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-12">
          Unsere Referenzen
        </h1>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Erfolgreiche IT-Projekte für zufriedene Kunden -Deutschlandweite- Vertrauen Sie auf unsere langjährige Erfahrung und Kompetenz
        </p>
      </section>

      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {referenzen.map((ref) => (
            <div key={ref.name} className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300 flex flex-col items-center">
                             <Image
                 src={ref.logo}
                 alt={`${ref.name} - Firmenlogo`}
                 width={128}
                 height={128}
                 className={`max-w-full w-auto h-auto mb-8 object-contain ${
                   ref.name.includes('Lindigkeit') ? 'max-h-56 max-w-80' : 'max-h-32'
                 }`}
                 loading="lazy"
                 placeholder="blur"
                 blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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