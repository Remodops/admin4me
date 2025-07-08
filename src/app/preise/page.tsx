import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preise – admin4me",
  description: "Transparente Preisgestaltung für IT-Services. Starter-Paket ab 50€/Monat, Sorglos-Paket ab 120€/Monat. Individuelle Angebote auf Anfrage.",
};

const pricingPlans = [
  {
    name: "Starter",
    price: "50",
    period: "Monat",
    description: "Grundlegende IT-Betreuung für kleine Unternehmen",
    features: [
      "Fernwartung und Remote-Support",
      "Regelmäßige Software-Updates",
      "Sicherheitsüberwachung",
      "E-Mail-Support",
      "Monatliche System-Checks",
    ],
    cta: "Starter-Paket wählen",
    popular: false,
  },
  {
    name: "Sorglos",
    price: "120",
    period: "Monat",
    description: "Umfassende IT-Betreuung mit Vor-Ort-Service",
    features: [
      "Alle Features aus dem Starter-Paket",
      "Vor-Ort-Service bei Bedarf",
      "Netzwerkwartung und -überwachung",
      "Hardware-Beratung und -Einrichtung",
      "Prioritäts-Support",
      "Quartalsweise IT-Beratung",
    ],
    cta: "Sorglos-Paket wählen",
    popular: true,
  },
  {
    name: "Individual",
    price: "Auf Anfrage",
    period: "",
    description: "Maßgeschneiderte IT-Lösungen für spezielle Anforderungen",
    features: [
      "Alle Features der anderen Pakete",
      "Individuell angepasste Leistungen",
      "Dedizierter Ansprechpartner",
      "24/7 Support verfügbar",
      "Spezial-Projekte und Migrationen",
      "Compliance und Zertifizierungen",
    ],
    cta: "Beratung anfragen",
    popular: false,
  },
];

export default function Preise() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <section className="text-center mb-20">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-8 shadow-preis-heading">
          Unsere Preise
        </h1>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Transparente Preisgestaltung für professionelle IT-Services. 
          Wählen Sie das Paket, das zu Ihren Anforderungen passt.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-12 rounded-2xl transition-all duration-300 hover-lift ${
                plan.popular
                  ? 'border-2 border-accent bg-white dark:bg-gray-800 shadow-lift'
                  : 'border border-professional dark:border-gray-700 bg-white dark:bg-gray-800 shadow-professional hover:shadow-lift'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="empfohlen-badge px-6 py-2 rounded-full text-sm font-bold shadow-professional">
                    Empfohlen
                  </span>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="heading-sm text-professional dark:text-white mb-4">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      €/{plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:info@admin4me.de?subject=Interesse an ${plan.name}-Paket`}
                className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.popular
                    ? 'bg-gradient-accent text-white hover:shadow-lift focus:ring-blue-500 dark:focus:ring-offset-gray-900 hover:-translate-y-1'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white focus:ring-gray-500 dark:focus:ring-offset-gray-900 hover:shadow-professional'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-800 rounded-2xl p-12 border-professional dark:border-gray-700 shadow-professional">
        <h2 className="heading-md text-professional dark:text-white mb-8">
          Haben Sie Fragen zu unseren Preisen?
        </h2>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
          Alle Pakete können individuell angepasst werden. Gerne erstellen wir Ihnen ein maßgeschneidertes Angebot, das perfekt zu Ihren Anforderungen passt.
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