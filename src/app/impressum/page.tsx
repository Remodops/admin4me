import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – admin4me",
  description: "Rechtliche Informationen und Impressum von admin4me. Geschäftsführer, Adresse und Kontaktdaten.",
};

export default function Impressum() {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Impressum
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Rechtliche Informationen und Kontaktdatenn
        </p>
      </section>

      {/* Content */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Angaben gemäß § 5 TMG
          </h2>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Diensteanbieter
              </h3>
              <p>
                admin4me<br />
                Lange Straße 4<br />
                37186 Moringen
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Inhaber
              </h3>
              <p>
                Lothar Frank<br />
                Lange Straße 4<br />
                37186 Moringen
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Kontakt
              </h3>
              <p>
                Telefon: <a href="tel:055544074740" className="text-blue-600 dark:text-blue-400 hover:underline">05554 4074740</a><br />
                E-Mail: <a href="mailto:info@admin4me.de" className="text-blue-600 dark:text-blue-400 hover:underline">info@admin4me.de</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Steuernummer
              </h3>
              <p className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border-l-4 border-yellow-400">
                <strong>⚠️ EINZUTRAGEN:</strong><br />
                Steuernummer: [IHRE_STEUERNUMMER_HIER_EINTRAGEN]<br />
                <span className="text-sm text-gray-500">(Erhalten Sie vom Finanzamt bei der Gewerbeanmeldung)</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Umsatzsteuer-ID
              </h3>
              <p className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border-l-4 border-yellow-400">
                <strong>⚠️ EINZUTRAGEN:</strong><br />
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [IHRE_UST_ID_HIER_EINTRAGEN]<br />
                <span className="text-sm text-gray-500">(Nur erforderlich bei Umsätzen über 22.000€/Jahr oder grenzüberschreitenden Lieferungen)</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Gewerberecht
              </h3>
              <p>
                Gewerbeanmeldung gemäß § 14 GewO<br />
                Zuständige Behörde: Stadt Moringen<br />
                Gewerbeschein-Nr.: <span className="bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">[GEWERBESCHEIN_NR_HIER_EINTRAGEN]</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h3>
              <p>
                Berufsbezeichnung: IT-Administrator<br />
                Zuständige Kammer: IHK Hannover<br />
                Verliehen durch: Deutschland
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Redaktionell verantwortlich
              </h3>
              <p>
                Lothar Frank<br />
                Lange Straße 4<br />
                37186 Moringen
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                EU-Streitschlichtung
              </h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h3>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Haftung für Inhalte
              </h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Haftung für Links
              </h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mt-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 