import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen – admin4me",
  description: "Unsere IT-Services: Softwarepflege, Netzwerkwartung, Vor-Ort-Service, Remote-Support, IT-Beratung und Hardwareberatung.",
};

const services = [
  {
    title: "Softwarepflege",
    description: "Updates, Lizenzen und Sicherheit",
    details: "Wir halten Ihre Software aktuell, verwalten Lizenzen und sorgen für die Sicherheit Ihrer Systeme. Regelmäßige Updates und Sicherheitspatches gehören zu unserem Standard-Service.",
    icon: "💻"
  },
  {
    title: "Netzwerkwartung",
    description: "Firewalls, Router, Monitoring",
    details: "Professionelle Überwachung und Wartung Ihrer Netzwerk-Infrastruktur. Von Firewall-Konfiguration bis hin zu Router-Optimierung - wir sorgen für ein stabiles Netzwerk.",
    icon: "🌐"
  },
  {
    title: "Vor-Ort-Service",
    description: "Schnelle Hilfe vor Ort",
    details: "Bei komplexen Problemen sind wir schnell bei Ihnen vor Ort. Unsere Experten diagnostizieren und beheben Hardware- und Softwareprobleme direkt an Ihrem Arbeitsplatz.",
    icon: "🏢"
  },
  {
    title: "Remote-Support",
    description: "Fernwartung mit TeamViewer o. Ä.",
    details: "Schnelle Hilfe aus der Ferne. Mit modernen Remote-Tools können wir viele Probleme schnell und effizient lösen, ohne dass wir vor Ort sein müssen.",
    icon: "🖥️"
  },
  {
    title: "IT-Beratung",
    description: "Individuelle Lösungen für Ihre Firma",
    details: "Wir beraten Sie bei IT-Entscheidungen und entwickeln maßgeschneiderte Lösungen für Ihr Unternehmen. Von der Planung bis zur Umsetzung begleiten wir Sie.",
    icon: "💡"
  },
  {
    title: "Hardwareberatung",
    description: "Kaufempfehlung & Einrichtung",
    details: "Unabhängige Beratung bei Hardware-Käufen und professionelle Einrichtung neuer Geräte. Wir finden die beste Lösung für Ihre Anforderungen und Ihr Budget.",
    icon: "🔧"
  },
];

export default function Leistungen() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <section className="text-center mb-20">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-8">
          Unsere Leistungen
        </h1>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Professionelle IT-Services für Unternehmen und Privatpersonen. 
          Wir bieten umfassende IT-Administration und Support in Moringen und Umgebung.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-professional dark:border-gray-700 shadow-professional hover-lift hover:shadow-lift transition-all duration-300">
              <div className="service-icon text-2xl">
                {service.icon}
              </div>
              <h3 className="heading-sm text-professional dark:text-white mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm font-semibold text-accent dark:text-blue-400 mb-4 uppercase tracking-wide">
                {service.description}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-800 rounded-2xl p-12 border-professional dark:border-gray-700 shadow-professional">
        <h2 className="heading-md text-professional dark:text-white mb-8">
          Interesse an unseren Services?
        </h2>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
          Lassen Sie uns gemeinsam besprechen, wie wir Ihnen helfen können. 
          Kontaktieren Sie uns für ein unverbindliches Gespräch.
        </p>
        <div className="flex justify-center">
          <Link href="/kontakt" className="btn-primary">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
} 