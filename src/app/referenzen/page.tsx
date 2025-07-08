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
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <section className="text-center mb-20">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-8">
          Referenzen
        </h1>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Zufriedene Kunden aus Moringen und Umgebung vertrauen auf unsere IT-Services. 
          Hier finden Sie eine Auswahl unserer erfolgreichen Projekte.
        </p>
      </section>

      {/* References Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {references.map((reference, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-professional dark:border-gray-700 shadow-professional hover-lift hover:shadow-lift transition-all duration-300 referenz-card"
            >
              {/* Logo Placeholder */}
              <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 shadow-professional">
                <span className="text-white font-bold text-lg">
                  {reference.logo}
                </span>
              </div>
              
              <h3 className="heading-sm text-professional dark:text-white mb-4 leading-tight">
                {reference.name}
              </h3>
              <p className="text-base font-semibold referenz-service mb-4 uppercase tracking-wide">
                {reference.service}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 referenz-textblock">
                {reference.description}
              </p>
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
          Lassen Sie uns gemeinsam Ihre IT-Probleme lösen. 
          Kontaktieren Sie uns für ein unverbindliches Gespräch.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a href="mailto:info@admin4me.de" className="btn-primary">
            E-Mail senden
          </a>
          <a href="tel:055544074740" className="btn-secondary">
            Anrufen
          </a>
        </div>
      </section>
    </div>
  );
} 