import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen – admin4me",
  description: "Zufriedene Kunden aus Moringen und Umgebung. Referenzen von REWE Markt, bohrmann & mai und weiteren Unternehmen.",
};

const references = [
  {
    name: "REWE Markt – Moringen",
    service: "Komplettbetreuung",
    description: "Umfassende IT-Betreuung für den lokalen REWE Markt in Moringen. Von Kassensystemen bis hin zur Netzwerk-Infrastruktur.",
    logo: "REWE",
  },
  {
    name: "bohrmann & mai",
    service: "Hardwareeinrichtung",
    description: "Professionelle Einrichtung und Konfiguration der IT-Infrastruktur für das Unternehmen bohrmann & mai.",
    logo: "B&M",
  },
  {
    name: "Schornsteinfeger XYZ",
    service: "Softwarepflege",
    description: "Regelmäßige Software-Updates und Wartung der IT-Systeme für den Schornsteinfeger-Betrieb.",
    logo: "SCH",
  },
  {
    name: "Praxis Dr. Schmidt",
    service: "Datensicherheit",
    description: "Spezialisierte IT-Betreuung für eine Arztpraxis mit Fokus auf Datenschutz und DSGVO-Konformität.",
    logo: "PRAXIS",
  },
  {
    name: "Bäckerei Müller",
    service: "Netzwerkwartung",
    description: "Wartung und Optimierung der Netzwerk-Infrastruktur für die lokale Bäckerei mit mehreren Filialen.",
    logo: "BÄCK",
  },
  {
    name: "Kindergarten Sonnenschein",
    service: "IT-Beratung",
    description: "Beratung und Einrichtung kindgerechter IT-Lösungen für den Kindergarten mit pädagogischem Fokus.",
    logo: "KIGA",
  },
];

export default function Referenzen() {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Referenzen
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Zufriedene Kunden aus Moringen und Umgebung vertrauen auf unsere IT-Services. 
          Hier finden Sie eine Auswahl unserer erfolgreichen Projekte.
        </p>
      </section>

      {/* References Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {references.map((reference, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              {/* Logo Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-lg">
                  {reference.logo}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {reference.name}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                {reference.service}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {reference.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Werden Sie unser nächster zufriedener Kunde
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Lassen Sie uns gemeinsam Ihre IT-Probleme lösen. 
          Kontaktieren Sie uns für ein unverbindliches Gespräch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@admin4me.de"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            E-Mail senden
          </a>
          <a
            href="tel:055544074740"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Anrufen
          </a>
        </div>
      </section>
    </div>
  );
} 