import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <section className="text-center mb-32">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-10">
          admin4me
        </h1>
        <p className="text-subtitle dark:text-gray-300 mb-8">
          IT-Administration & Support
        </p>
        <p className="text-enhanced text-gray-700 dark:text-gray-300 mb-20 max-w-3xl mx-auto">
          Schnelle Hilfe, persönliche Betreuung, zuverlässiger Betrieb
        </p>
        
        {/* Hero Illustration Placeholder */}
        <div className="w-80 h-56 mx-auto mb-20 bg-gradient-accent rounded-2xl shadow-lift flex items-center justify-center animate-subtle-float">
          <div className="text-white text-4xl font-bold">
            admin4me
          </div>
        </div>

        <Link
          href="/kontakt"
          className="btn-primary"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </section>

      {/* Typische IT-Probleme Section */}
      <section className="mb-32">
        <h2 className="heading-lg text-professional dark:text-white text-center mb-24">
          Typische IT-Probleme
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="problem-box hover-lift">
            <h3>Updates dauern ewig?</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Ihr System läuft langsam und Updates blockieren die Arbeit? Wir optimieren Ihre IT-Infrastruktur für maximale Performance.
            </p>
            <Link href="/leistungen" className="inline-flex items-center mt-8 text-sm font-semibold text-accent hover:text-professional transition-colors">
              Mehr erfahren →
            </Link>
          </div>
          
          <div className="problem-box hover-lift">
            <h3>EDV hängt?</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Computer frieren ein, Programme stürzen ab? Unsere Experten finden und beheben die Ursachen schnell und zuverlässig.
            </p>
            <Link href="/leistungen" className="inline-flex items-center mt-8 text-sm font-semibold text-accent hover:text-professional transition-colors">
              Mehr erfahren →
            </Link>
          </div>
          
          <div className="problem-box hover-lift">
            <h3>Keine Internetverbindung?</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Netzwerkprobleme behindern Ihre Arbeit? Wir stellen Ihre Internetverbindung und Netzwerk-Infrastruktur wieder her.
            </p>
            <Link href="/leistungen" className="inline-flex items-center mt-8 text-sm font-semibold text-accent hover:text-professional transition-colors">
              Mehr erfahren →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gray-800 rounded-2xl p-16 border-professional dark:border-gray-700 shadow-professional">
        <h2 className="heading-md text-professional dark:text-white mb-10">
          Bereit für professionellen IT-Support?
        </h2>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Lassen Sie uns gemeinsam Ihre IT-Probleme lösen. Kontaktieren Sie uns für ein unverbindliches Gespräch.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <Link href="/kontakt" className="btn-primary">
            Kontakt aufnehmen
          </Link>
          <Link href="/leistungen" className="btn-secondary">
            Unsere Leistungen
          </Link>
        </div>
      </section>
    </div>
  );
} 