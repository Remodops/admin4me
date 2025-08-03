import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – admin4me",
  description: "Rechtliche Informationen und Impressum von admin4me. Geschäftsführer, Adresse und Kontaktdaten.",
};

export default function Impressum() {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Impressum
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Rechtliche Informationen und Kontaktdaten
        </p>
      </section>

      {/* Content */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Diensteanbieter
              </h3>
              <p className="text-sm">
                admin4me<br />
                Lange Straße 4<br />
                37186 Moringen
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Inhaber & redaktionell verantwortlich
              </h3>
              <p className="text-sm">
                Lothar Frank<br />
                Lange Straße 4<br />
                37186 Moringen
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Kontakt
              </h3>
              <p className="text-sm">
                Telefon: <a href="tel:055547249063" className="text-blue-600 dark:text-blue-400 hover:underline">05554-7249063</a><br />
                Kontaktformular: <a href="/kontakt" className="text-blue-600 dark:text-blue-400 hover:underline">Kontaktseite</a>
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Umsatzsteuer-ID
              </h3>
              <p className="text-sm">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE348411538
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                EU-Streitschlichtung
              </h3>
              <p className="text-sm">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>.<br />
                Kontakt über unser <a href="/kontakt" className="text-blue-600 dark:text-blue-400 hover:underline">Kontaktformular</a>.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Verbraucherstreitbeilegung
              </h3>
              <p className="text-sm">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Haftung für Inhalte
              </h3>
              <p className="text-sm">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-sm mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Haftung für Links
              </h3>
              <p className="text-sm">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-sm mt-2">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Urheberrecht
              </h3>
              <p className="text-sm">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-sm mt-2">
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