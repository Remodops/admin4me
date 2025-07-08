import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise – admin4me",
  description: "Transparente Preisgestaltung für IT-Services. Starter-Paket ab 50€/Monat, Sorglos-Paket ab 120€/Monat. Individuelle Angebote auf Anfrage.",
};

export default function Preise() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <section className="text-center mb-32">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-12">
          Transparente Preise
        </h1>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Faire und transparente Preisgestaltung für alle IT-Services. 
          Keine versteckten Kosten, keine bösen Überraschungen.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Vor-Ort-Service */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300 text-center h-full">
            <div className="service-icon text-4xl mb-8">🏢</div>
            <h3 className="heading-md text-professional dark:text-white mb-8">
              Vor-Ort-Service
            </h3>
            <div className="mb-8">
              <span className="text-4xl font-bold text-accent dark:text-blue-400">45€</span>
              <span className="text-gray-600 dark:text-gray-300 ml-2">/Stunde</span>
            </div>
            <ul className="text-left space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Vor-Ort-Diagnose und Reparatur</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Hardware-Installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Netzwerk-Setup</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Datenmigration</span>
              </li>
            </ul>
            <a href="/kontakt" className="btn-primary w-full">
              Termin vereinbaren
            </a>
          </div>

          {/* Remote-Support */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border-2 border-accent dark:border-blue-400 shadow-professional hover-lift transition-all duration-300 text-center h-full relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent dark:bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Beliebt
            </div>
            <div className="service-icon text-4xl mb-8 mt-4">💻</div>
            <h3 className="heading-md text-professional dark:text-white mb-8">
              Remote-Support
            </h3>
            <div className="mb-8">
              <span className="text-4xl font-bold text-accent dark:text-blue-400">35€</span>
              <span className="text-gray-600 dark:text-gray-300 ml-2">/Stunde</span>
            </div>
            <ul className="text-left space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Fernwartung über TeamViewer</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Software-Installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">System-Updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Virenentfernung</span>
              </li>
            </ul>
            <a href="/kontakt" className="btn-primary w-full">
              Sofort starten
            </a>
          </div>

          {/* Beratung */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300 text-center h-full">
            <div className="service-icon text-4xl mb-8">💡</div>
            <h3 className="heading-md text-professional dark:text-white mb-8">
              IT-Beratung
            </h3>
            <div className="mb-8">
              <span className="text-4xl font-bold text-accent dark:text-blue-400">40€</span>
              <span className="text-gray-600 dark:text-gray-300 ml-2">/Stunde</span>
            </div>
            <ul className="text-left space-y-4 mb-12">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Individuelle Beratung</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Kaufempfehlungen</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">IT-Konzepte</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Schulungen</span>
              </li>
            </ul>
            <a href="/kontakt" className="btn-primary w-full">
              Beratung anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-800 rounded-2xl p-16 border-professional dark:border-gray-700 shadow-professional">
        <h2 className="heading-md text-professional dark:text-white mb-10">
          Haben Sie Fragen zu unseren Preisen?
        </h2>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Gerne erstellen wir Ihnen ein individuelles Angebot. 
          Kontaktieren Sie uns für ein unverbindliches Gespräch über Ihre Anforderungen.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a href="/kontakt" className="btn-primary">
            Kostenloses Angebot
          </a>
          <a href="/leistungen" className="btn-secondary">
            Alle Leistungen
          </a>
        </div>
      </section>
    </div>
  );
} 