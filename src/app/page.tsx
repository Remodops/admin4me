import Link from "next/link";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          admin4me
        </h1>
        <p className="text-xl sm:text-2xl text-professional dark:text-gray-300 mb-8 font-semibold">
          IT-Administration & Support
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Schnelle Hilfe, persönliche Betreuung, zuverlässiger Betrieb
        </p>
        
        {/* Hero Illustration Placeholder */}
        <div className="w-72 h-52 mx-auto mb-12 bg-gradient-professional rounded-xl shadow-professional flex items-center justify-center">
          <div className="text-white text-4xl font-bold">
            admin4me
          </div>
        </div>

        <Link
          href="/kontakt"
          className="inline-flex items-center px-10 py-4 text-lg font-semibold text-white bg-gradient-professional hover:shadow-lg rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-professional"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </section>

      {/* Typische IT-Probleme Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-professional dark:text-white text-center mb-16">
          Typische IT-Probleme
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Updates dauern ewig?" href="/leistungen" className="hover:shadow-professional transition-shadow duration-300 border-professional">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Ihr System läuft langsam und Updates blockieren die Arbeit? Wir optimieren Ihre IT-Infrastruktur für maximale Performance.</p>
          </Card>
          <Card title="EDV hängt?" href="/leistungen" className="hover:shadow-professional transition-shadow duration-300 border-professional">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Computer frieren ein, Programme stürzen ab? Unsere Experten finden und beheben die Ursachen schnell und zuverlässig.</p>
          </Card>
          <Card title="Keine Internetverbindung?" href="/leistungen" className="hover:shadow-professional transition-shadow duration-300 border-professional">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Netzwerkprobleme behindern Ihre Arbeit? Wir stellen Ihre Internetverbindung und Netzwerk-Infrastruktur wieder her.</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-800 rounded-xl p-10 border-professional dark:border-gray-700 shadow-professional">
        <h2 className="text-2xl font-bold text-professional dark:text-white mb-6">
          Bereit für professionellen IT-Support?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Lassen Sie uns gemeinsam Ihre IT-Probleme lösen. Kontaktieren Sie uns für ein unverbindliches Gespräch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-professional hover:shadow-lg rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Kontakt aufnehmen
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-professional dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 border border-professional"
          >
            Unsere Leistungen
          </Link>
        </div>
      </section>
    </div>
  );
}
