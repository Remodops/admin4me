import type { Metadata } from "next";
import Image from "next/image";

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

      {/* Software-Support Services */}
      <section className="mb-32">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          Software-Support & Beratung
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-full pt-6 mb-6 flex justify-center items-center" style={{ minHeight: '80px' }}>
                <Image
                  src="/images/leistungen/datev.jpg"
                  alt="DATEV Logo"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain max-h-20"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                DATEV Support
              </h3>
            </div>
            <div className="space-y-4 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Installation & Updates</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Konfiguration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Troubleshooting</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datenmigration</div>
            </div>
            <div className="min-h-[220px] flex flex-col">
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                Professioneller DATEV Installations- und Update Service mit individueller Beratung und umfassender Betreuung für alle DATEV-Produkte.
              </p>
              <a 
                href="https://www.datev.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto"
              >
                Mehr über DATEV →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-full pt-6 mb-6 flex justify-center items-center" style={{ minHeight: '80px' }}>
                <Image
                  src="/images/leistungen/ramicro.png"
                  alt="RA-Micro Logo"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain max-h-20"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                RA-Micro Erste Hilfe
              </h3>
            </div>
            <div className="space-y-4 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Schnelle Problemlösung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Kanzleisoftware Support</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datenrettung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Systemoptimierung</div>
            </div>
            <div className="min-h-[220px] flex flex-col">
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                Sofortige Hilfe bei RA-Micro Kanzleisoftware - wir lösen Ihre Probleme schnell und zuverlässig.
              </p>
              <a 
                href="https://www.ra-micro.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto"
              >
                Mehr über RA-Micro →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full md:col-span-2 lg:col-span-1">
            <div className="text-center mb-8">
              <div className="w-full pt-6 mb-6 flex justify-center items-center" style={{ minHeight: '80px' }}>
                <Image
                  src="/images/leistungen/agenda.jpg"
                  alt="Agenda Software Logo"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain max-h-20"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Agenda Support
              </h3>
            </div>
            <div className="space-y-4 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Erst Support</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Installation</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Schulung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Wartung</div>
            </div>
            <div className="min-h-[220px] flex flex-col">
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                Kompetenter Support für Agenda-Software mit Installation, Schulung und laufender Betreuung und zuverlässigem Support bei Softwareproblemen im Kanzleialltag.
              </p>
              <a 
                href="https://www.agenda-software.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto"
              >
                Mehr über Agenda →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & Office Solutions */}
      <section className="mb-32">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          Cloud & Office-Lösungen
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-full mb-6 flex justify-center">
                <Image
                  src="/images/leistungen/Microsoft-Office-365-Logo.png"
                  alt="Microsoft 365 Logo"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Microsoft 365 Administration
              </h3>
            </div>
            <div className="space-y-4">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Benutzerverwaltung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Lizenzmanagement</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sicherheitseinstellungen</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datensicherung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Migration</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
              Professionelle Administration Ihrer Microsoft 365-Umgebung für maximale Produktivität und Sicherheit.
            </p>
            <a 
              href="https://www.microsoft.com/de-de/microsoft-365?market=de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
            >
              Mehr über Microsoft 365 →
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                📺
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Live Broadcast & Streaming
              </h3>
            </div>
            <div className="space-y-4">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Website Integration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Multi-Platform Streaming</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Technische Betreuung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Equipment Setup</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
              Professionelle Live-Streaming-Lösungen für Ihre Website und alle gängigen Streaming-Plattformen.
            </p>
          </div>
        </div>
      </section>

      {/* Network & Infrastructure */}
      <section className="mb-32">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          Netzwerk & Infrastruktur
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                🖥️
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Windows & Linux Administration
              </h3>
            </div>
            <div className="space-y-4">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Server-Verwaltung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sicherheits-Updates</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Performance-Optimierung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Backup-Strategien</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
              Professionelle Administration von Windows- und Linux-Netzwerken für maximale Stabilität und Sicherheit.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                🌐
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Filialvernetzung & Home Office
              </h3>
            </div>
            <div className="space-y-4">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Weltweite Filialvernetzung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">VPN-Einrichtung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Remote-Zugriff</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sichere Verbindungen</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
              Sichere und zuverlässige Vernetzung für weltweite Standorte und Home Office-Arbeitsplätze.
            </p>
          </div>
        </div>
      </section>

      {/* Security & Multimedia */}
      <section className="mb-32">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          Sicherheit & Multimedia
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                📹
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Sicherheitskamera-Integration
              </h3>
            </div>
            <div className="space-y-4">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">System-Installation</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Netzwerk-Integration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Remote-Überwachung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datenspeicherung</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
              Professionelle Integration von Sicherheitskamera-Systemen in Ihr bestehendes Netzwerk.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                🔒
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                Netzwerk-Sicherheit
              </h3>
            </div>
            <div className="space-y-4">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Firewall-Konfiguration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Verschlüsselung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Zugriffskontrolle</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sicherheits-Audits</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
              Umfassende Sicherheitslösungen für Ihr Netzwerk und Ihre Daten.
            </p>
          </div>
        </div>
      </section>

      {/* Original Services */}
      <section className="mb-32">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          IT-Support & Beratung
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-6">
                🔧
              </div>
              <h3 className="heading-md text-professional dark:text-white">
                IT-Support vor Ort
              </h3>
            </div>
            <div className="space-y-4">
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
              <h3 className="heading-md text-professional dark:text-white">
                Remote-Support
              </h3>
            </div>
            <div className="space-y-4">
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
              <h3 className="heading-md text-professional dark:text-white">
                Netzwerk-Setup
              </h3>
            </div>
            <div className="space-y-4">
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
              <h3 className="heading-md text-professional dark:text-white">
                Schulungen & Beratung
              </h3>
            </div>
            <div className="space-y-4">
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
      </section>

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