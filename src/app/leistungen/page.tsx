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
      <section className="mb-40">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          Software-Support & Beratung
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-full pt-6 mb-6 flex justify-center items-center" style={{ minHeight: '80px' }}>
                <Image
                  src="/images/leistungen/datev.jpg"
                  alt="DATEV Logo - Buchhaltungssoftware"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain max-h-20"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                DATEV Support
              </h3>
            </div>
            <div className="space-y-2 mb-8">
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
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
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
                  alt="RA-Micro Logo - Kanzleisoftware"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain max-h-20"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                RA-Micro Erste Hilfe
              </h3>
            </div>
            <div className="space-y-2 mb-8">
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
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Mehr über RA-Micro →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-full pt-6 mb-6 flex justify-center items-center" style={{ minHeight: '80px' }}>
                <Image
                  src="/images/leistungen/agenda.jpg"
                  alt="Agenda Software Logo - Terminverwaltung"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain max-h-20"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Agenda Support
              </h3>
            </div>
            <div className="space-y-2 mb-8">
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
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Mehr über Agenda →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-full pt-6 mb-6 flex justify-center items-center" style={{ minHeight: '80px' }}>
                <Image
                  src="/images/leistungen/notara-logo-dark.svg"
                  alt="Notara Logo - Notarsoftware"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain max-h-20 dark:filter dark:invert"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Notara Support
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Installation & Updates</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Konfiguration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Troubleshooting</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datenmigration</div>
            </div>
            <div className="min-h-[220px] flex flex-col">
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                Professioneller Support für Notara-Software mit Installation, Konfiguration und laufender Betreuung für Notare und Notariatsangestellte.
              </p>
              <a 
                href="https://notara.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Mehr über Notara →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-full pt-6 mb-6 flex justify-center items-center" style={{ minHeight: '80px' }}>
                <Image
                  src="/images/leistungen/bundesnotarkammer.png"
                  alt="Bundesnotarkammer Logo"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain max-h-20"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Bundesnotarkammer Support
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Software-Support</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Systemintegration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datenübertragung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Compliance</div>
            </div>
            <div className="min-h-[220px] flex flex-col">
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                Kompetente Unterstützung bei der Integration und Nutzung von Bundesnotarkammer-Systemen und -Software für Notare.
              </p>
              <a 
                href="https://www.bnotk.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Mehr über Bundesnotarkammer →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & Communication */}
      <section className="mb-40">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          Cloud & Kommunikation
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Modernes Arbeiten mit Cloud-Technologie und Online-Kommunikation.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                ☁️
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Microsoft 365 Administration
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Benutzerverwaltung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Lizenzmanagement</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sicherheitseinstellungen</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datensicherung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Migration</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Professionelle Administration Ihrer Microsoft 365-Umgebung für maximale Produktivität und Sicherheit.
              </p>
              <a 
                href="https://www.microsoft.com/de-de/microsoft-365?market=de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Mehr über Microsoft 365 →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                🔧
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Remote-Support
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Fernwartung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Schnelle Diagnose</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Software-Updates</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Konfiguration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Beratung</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Sofortige Hilfe über das Internet. Viele Probleme können wir schnell und kostengünstig remote lösen.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Remote-Support anfragen →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                📺
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Live Broadcast & Streaming
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Website Integration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Multi-Platform Streaming</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Technische Betreuung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Equipment Setup</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Professionelle Live-Streaming-Lösungen für Ihre Website und alle gängigen Streaming-Plattformen.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Streaming-Service anfragen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IT Infrastructure & Networks */}
      <section className="mb-40">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          Netzwerke & Systembetrieb
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Stabilität, Sicherheit und Administration Ihrer IT-Infrastruktur.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                🖥️
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Windows & Linux Administration
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Server-Verwaltung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sicherheits-Updates</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Performance-Optimierung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Backup-Strategien</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Professionelle Administration von Windows- und Linux-Netzwerken für maximale Stabilität und Sicherheit.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Server-Administration anfragen →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                🔒
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Netzwerk-Sicherheit
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Firewall-Konfiguration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Verschlüsselung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Zugriffskontrolle</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sicherheits-Audits</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Umfassende Sicherheitslösungen für Ihr Netzwerk und Ihre Daten.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Sicherheitsberatung anfragen →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                🌐
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Netzwerk-Setup
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Router-Konfiguration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">WLAN-Optimierung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Netzwerk-Sicherheit</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Drucker-Einrichtung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Heimnetzwerk-Setup</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Professionelle Einrichtung und Optimierung Ihres Heimnetzwerks für maximale Performance und Sicherheit.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Netzwerk-Setup anfragen →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                🏢
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Filialvernetzung & Home Office
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Weltweite Filialvernetzung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">VPN-Einrichtung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Remote-Zugriff</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sichere Verbindungen</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Sichere und zuverlässige Vernetzung für weltweite Standorte und Home Office-Arbeitsplätze.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Standortvernetzung anfragen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Monitoring */}
      <section className="mb-40">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          IT-Sicherheit & Überwachung
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Komplette Sicherheitslösungen für Ihr Unternehmen.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                📹
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Sicherheitskamera-Integration
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">System-Installation</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Netzwerk-Integration</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Remote-Überwachung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datenspeicherung</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Professionelle Integration von Sicherheitskamera-Systemen in Ihr bestehendes Netzwerk.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Kamera-Integration anfragen →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                🛡️
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Datenschutz & Compliance
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">DSGVO-Compliance</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datenverschlüsselung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Backup-Strategien</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sicherheits-Audits</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Umfassende Datenschutzlösungen und Compliance-Beratung für Ihr Unternehmen.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold mt-auto transition-colors duration-200"
              >
                Datenschutz-Beratung anfragen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IT Support & Training */}
      <section className="mb-40">
        <h2 className="heading-lg text-gray-900 dark:text-white text-center mb-16">
          Beratung & Betreuung
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Endkundennah, direkt umsetzbar - professioneller IT-Support und individuelle Schulungen.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                🚗
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                IT-Support vor Ort
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Hardware-Reparatur</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Software-Installation</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">System-Updates</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Datensicherung</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Virenentfernung</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Schnelle Hilfe direkt bei Ihnen vor Ort. Wir kommen zu Ihnen und lösen Ihre IT-Probleme professionell und zuverlässig.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200 mt-auto"
              >
                Vor-Ort-Support buchen →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-professional dark:border-gray-700 shadow-professional hover-lift h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" aria-hidden="true">
                📚
              </div>
              <h3 className="text-lg font-bold text-professional dark:text-white">
                Schulungen & Beratung
              </h3>
            </div>
            <div className="space-y-2 mb-8">
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">PC-Grundlagen</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Internet & E-Mail</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Software-Training</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Sicherheits-Tipps</div>
              <div className="referenz-service font-semibold text-base text-gray-700 dark:text-gray-300">Kaufberatung</div>
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Individuelle Schulungen und kompetente Beratung - damit Sie Ihre IT optimal nutzen können.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block text-professional hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200 mt-auto"
              >
                Schulung buchen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-800 rounded-2xl p-16 border border-professional dark:border-gray-700 shadow-professional">
        <h2 className="heading-md text-professional dark:text-white mb-10">
          Interesse an unseren Leistungen?
        </h2>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir finden gemeinsam die beste Lösung für Ihre IT-Anforderungen.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <a href="/kontakt" className="btn-primary">
            Beratung anfragen
          </a>
          <a href="/preise" className="btn-secondary">
            Preise ansehen
          </a>
        </div>
      </section>
    </div>
  );
} 