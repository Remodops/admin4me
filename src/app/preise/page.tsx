import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preise – admin4me",
  description: "Transparente Preisgestaltung für IT-Services. Basis-Paket ab 50€/Monat, Komplett-Paket ab 120€/Monat. Individuelle Angebote auf Anfrage.",
};

const pricingPlans = [
  {
    name: "Basis",
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
    cta: "Basis-Paket wählen",
    popular: false,
  },
  {
    name: "Komplett",
    price: "120",
    period: "Monat",
    description: "Umfassende IT-Betreuung mit Vor-Ort-Service",
    features: [
      "Alle Features aus dem Basis-Paket",
      "Vor-Ort-Service bei Bedarf",
      "Netzwerkwartung und -überwachung",
      "Hardware-Beratung und -Einrichtung",
      "Prioritäts-Support",
      "Quartalsweise IT-Beratung",
    ],
    cta: "Komplett-Paket wählen",
    popular: true,
  },
];

export default function Preise() {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Unsere Preise
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Transparente Preisgestaltung für professionelle IT-Services. 
          Wählen Sie das Paket, das zu Ihren Anforderungen passt.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg border-2 ${
                plan.popular
                  ? 'border-blue-500 bg-white dark:bg-gray-800 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Empfohlen
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}€
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
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
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:info@admin4me.de?subject=Angebot für {plan.name}-Paket"
                className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:focus:ring-offset-gray-900'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white focus:ring-gray-500 dark:focus:ring-offset-gray-900'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="text-center bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Individuelle Angebote
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Haben Sie spezielle Anforderungen oder benötigen Sie ein maßgeschneidertes Angebot? 
          Kontaktieren Sie uns für eine individuelle Beratung.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@admin4me.de?subject=Individuelles Angebot"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Angebot anfordern
          </a>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
} 