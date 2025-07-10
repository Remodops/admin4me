import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen – admin4me",
  description: "Unsere IT-Services: Softwarepflege, Netzwerkwartung, Vor-Ort-Service, Remote-Support, IT-Beratung und Hardwareberatung.",
};

export default function Leistungen() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-32">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-12">
          Unsere Leistungen
        </h1>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Professionelle IT-Services für Privatpersonen und kleine Unternehmen in Moringen und Umgebung
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
              🔧
            </div>
            <h2 className="heading-md text-professional dark:text-white">
              IT-Support vor Ort
            </h2>
          </div>
          <div className="space-y-6">
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Hardware-Reparatur</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Software-Installation</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">System-Updates</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datensicherung</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Virenentfernung</div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
            Schnelle Hilfe direkt bei Ihnen vor Ort. Wir kommen zu Ihnen und lösen Ihre IT-Probleme professionell und zuverlässig.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
              ☁️
            </div>
            <h2 className="heading-md text-professional dark:text-white">
              Remote-Support
            </h2>
          </div>
          <div className="space-y-6">
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Fernwartung</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Schnelle Diagnose</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Software-Updates</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Konfiguration</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Beratung</div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
            Sofortige Hilfe über das Internet. Viele Probleme können wir schnell und kostengünstig remote lösen.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
              🖥️
            </div>
            <h2 className="heading-md text-professional dark:text-white">
              Netzwerk-Setup
            </h2>
          </div>
          <div className="space-y-6">
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Router-Konfiguration</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">WLAN-Optimierung</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Netzwerk-Sicherheit</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Drucker-Einrichtung</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Heimnetzwerk-Setup</div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
            Professionelle Einrichtung und Optimierung Ihres Heimnetzwerks für maximale Performance und Sicherheit.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
              📚
            </div>
            <h2 className="heading-md text-professional dark:text-white">
              Schulungen & Beratung
            </h2>
          </div>
          <div className="space-y-6">
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">PC-Grundlagen</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Internet & E-Mail</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Software-Training</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sicherheits-Tipps</div>
            <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Kaufberatung</div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
            Individuelle Schulungen und kompetente Beratung - damit Sie Ihre IT optimal nutzen können.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-800 rounded-2xl p-16 border-professional dark:border-gray-700 shadow-professional">
        <h2 className="heading-md text-professional dark:text-white mb-10">
          Interesse an unseren Leistungen?
        </h2>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir finden gemeinsam die beste Lösung für Ihre IT-Anforderungen.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a href="/kontakt" className="btn-primary">
            Kontakt aufnehmen
          </a>
          <a href="/preise" className="btn-secondary">
            Preise ansehen
          </a>
        </div>
      </section>
    </div>
  );
} 