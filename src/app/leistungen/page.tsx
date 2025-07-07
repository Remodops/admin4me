import type { Metadata } from "next";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Leistungen – admin4me",
  description: "Unsere IT-Services: Softwarepflege, Netzwerkwartung, Vor-Ort-Service, Remote-Support, IT-Beratung und Hardwareberatung.",
};

const services = [
  {
    title: "Softwarepflege",
    description: "Updates, Lizenzen und Sicherheit",
    details: "Wir halten Ihre Software aktuell, verwalten Lizenzen und sorgen für die Sicherheit Ihrer Systeme. Regelmäßige Updates und Sicherheitspatches gehören zu unserem Standard-Service.",
  },
  {
    title: "Netzwerkwartung",
    description: "Firewalls, Router, Monitoring",
    details: "Professionelle Überwachung und Wartung Ihrer Netzwerk-Infrastruktur. Von Firewall-Konfiguration bis hin zu Router-Optimierung - wir sorgen für ein stabiles Netzwerk.",
  },
  {
    title: "Vor-Ort-Service",
    description: "Schnelle Hilfe vor Ort",
    details: "Bei komplexen Problemen sind wir schnell bei Ihnen vor Ort. Unsere Experten diagnostizieren und beheben Hardware- und Softwareprobleme direkt an Ihrem Arbeitsplatz.",
  },
  {
    title: "Remote-Support",
    description: "Fernwartung mit TeamViewer o. Ä.",
    details: "Schnelle Hilfe aus der Ferne. Mit modernen Remote-Tools können wir viele Probleme schnell und effizient lösen, ohne dass wir vor Ort sein müssen.",
  },
  {
    title: "IT-Beratung",
    description: "Individuelle Lösungen für Ihre Firma",
    details: "Wir beraten Sie bei IT-Entscheidungen und entwickeln maßgeschneiderte Lösungen für Ihr Unternehmen. Von der Planung bis zur Umsetzung begleiten wir Sie.",
  },
  {
    title: "Hardwareberatung",
    description: "Kaufempfehlung & Einrichtung",
    details: "Unabhängige Beratung bei Hardware-Käufen und professionelle Einrichtung neuer Geräte. Wir finden die beste Lösung für Ihre Anforderungen und Ihr Budget.",
  },
];

export default function Leistungen() {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Unsere Leistungen
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Professionelle IT-Services für Unternehmen und Privatpersonen. 
          Wir bieten umfassende IT-Administration und Support in Moringen und Umgebung.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} title={service.title} className="h-full">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                {service.description}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {service.details}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Interesse an unseren Services?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Lassen Sie uns gemeinsam besprechen, wie wir Ihnen helfen können. 
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