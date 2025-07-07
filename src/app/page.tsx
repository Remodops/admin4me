import Link from "next/link";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          admin4me
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          IT-Administration & Support
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Schnelle Hilfe, persönliche Betreuung, zuverlässiger Betrieb
        </p>
        
        {/* Hero Illustration Placeholder */}
        <div className="w-64 h-48 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center">
          <div className="text-blue-600 dark:text-blue-300 text-4xl font-bold">
            hero.svg
          </div>
        </div>

        <Link
          href="/kontakt"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </section>

      {/* Typische IT-Probleme Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Typische IT-Probleme
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Updates dauern ewig?" href="/leistungen">
            <p>Ihr System läuft langsam und Updates blockieren die Arbeit? Wir optimieren Ihre IT-Infrastruktur für maximale Performance.</p>
          </Card>
          <Card title="EDV hängt?" href="/leistungen">
            <p>Computer frieren ein, Programme stürzen ab? Unsere Experten finden und beheben die Ursachen schnell und zuverlässig.</p>
          </Card>
          <Card title="Keine Internetverbindung?" href="/leistungen">
            <p>Netzwerkprobleme behindern Ihre Arbeit? Wir stellen Ihre Internetverbindung und Netzwerk-Infrastruktur wieder her.</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Bereit für professionellen IT-Support?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Lassen Sie uns gemeinsam Ihre IT-Probleme lösen. Kontaktieren Sie uns für ein unverbindliches Gespräch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Kontakt aufnehmen
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Unsere Leistungen
          </Link>
        </div>
      </section>
    </div>
  );
}
