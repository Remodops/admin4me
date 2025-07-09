import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen – admin4me",
  description: "Zufriedene Kunden aus Moringen und Umgebung. Referenzen von REWE Markt, bohrmann & mai und weiteren Unternehmen.",
};

const referenzen = [
  {
    name: 'Lindigkeit',
    logo: '/images/references/lindigkeit.png',
    text: 'IT-Betreuung für Lindigkeit – Moderne Lösungen für ein wachsendes Unternehmen.'
  },
  {
    name: 'Pape',
    logo: '/images/references/pape.png',
    text: 'Digitalisierung und Support für Pape – Effiziente Prozesse, zufriedene Mitarbeiter.'
  },
  {
    name: 'BDS',
    logo: '/images/references/bds.png',
    text: 'Sichere IT-Infrastruktur für BDS – Datenschutz und Zuverlässigkeit im Fokus.'
  },
  {
    name: 'Hilmer',
    logo: '/images/references/hilmer.png',
    text: 'Hilmer – Zuverlässige IT-Lösungen und persönlicher Service für Ihr Unternehmen.'
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
              <img src={ref.logo} alt={ref.name + ' Logo'} className="h-24 w-auto mb-8" />
              <h3 className="heading-md text-professional dark:text-white mb-4 text-center">{ref.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{ref.text}</p>
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
            Beratungsgespräch anfragen
          </a>
          <a href="/leistungen" className="btn-secondary">
            Unsere Leistungen
          </a>
        </div>
      </section>
    </div>
  );
} 