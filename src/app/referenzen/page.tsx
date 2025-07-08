import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen – admin4me",
  description: "Zufriedene Kunden aus Moringen und Umgebung. Referenzen von REWE Markt, bohrmann & mai und weiteren Unternehmen.",
};



export default function Referenzen() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <section className="text-center mb-32">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-12">
          Unsere Referenzen
        </h1>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Erfolgreiche IT-Projekte für zufriedene Kunden in Moringen und Umgebung. 
          Vertrauen Sie auf unsere Erfahrung und Kompetenz.
        </p>
      </section>

      {/* Referenzen Grid */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Zahnarztpraxis Dr. Müller */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                🦷
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Zahnarztpraxis Dr. Müller
              </h3>
            </div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300 mb-8">
              IT-Infrastruktur Modernisierung
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Komplette Modernisierung der IT-Infrastruktur mit neuen Arbeitsplätzen, 
              Server-Migration und Netzwerk-Optimierung. Inklusive Mitarbeiterschulungen 
              und 24/7 Support-Vereinbarung.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">15 neue Arbeitsplätze eingerichtet</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Server-Migration zu Windows Server 2022</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Netzwerk-Geschwindigkeit um 300% gesteigert</span>
              </div>
            </div>
          </div>

          {/* Autohaus Schmidt */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                🚗
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Autohaus Schmidt
              </h3>
            </div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300 mb-8">
              Digitalisierung & Cloud-Migration
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Digitalisierung der Geschäftsprozesse mit Cloud-basierter 
              Kundenverwaltung, automatisierter Rechnungsstellung und 
              mobilem Zugriff für Außendienstmitarbeiter.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Cloud-Migration erfolgreich abgeschlossen</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Prozesse um 40% beschleunigt</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Mobile Arbeitsplätze für 8 Mitarbeiter</span>
              </div>
            </div>
          </div>

          {/* Rechtsanwaltskanzlei Weber */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                ⚖️
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Rechtsanwaltskanzlei Weber
              </h3>
            </div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300 mb-8">
              Sicherheit & Datenschutz
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Implementierung höchster Sicherheitsstandards für sensible 
              Mandantendaten. DSGVO-konforme IT-Infrastruktur mit 
              verschlüsselter Kommunikation und sicherer Datenspeicherung.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">100% DSGVO-konforme Umsetzung</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Ende-zu-Ende Verschlüsselung</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Sichere Backup-Strategie implementiert</span>
              </div>
            </div>
          </div>

          {/* Steuerberatung Hoffmann */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                💼
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Steuerberatung Hoffmann
              </h3>
            </div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300 mb-8">
              Business Continuity & Remote Work
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Aufbau einer flexiblen IT-Infrastruktur für hybrides Arbeiten. 
              VPN-Lösungen, Cloud-Integration und mobile Arbeitsplätze 
              für nahtloses Arbeiten von überall.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">VPN für 12 Remote-Arbeitsplätze</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Zero-Downtime bei der Migration</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Produktivität um 25% gesteigert</span>
              </div>
            </div>
          </div>
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