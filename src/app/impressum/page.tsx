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
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Angaben gemäß § 5 TMG
          </h2>
          
          {/* Modernes zwei-spaltiges Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Linke Spalte - Rubriken */}
            <div className="lg:col-span-1 space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Diensteanbieter
                </h3>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Kontakt
                </h3>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Umsatzsteuer-ID
                </h3>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Gewerbeanmeldung
                </h3>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Redaktionell verantwortlich
                </h3>
              </div>
            </div>

            {/* Rechte Spalte - Inhalte */}
            <div className="lg:col-span-2 space-y-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="pb-4">
                <p className="text-sm leading-relaxed">
                  admin4me<br />
                  Inhaber: Lothar Frank<br />
                  Lange Straße 4<br />
                  37186 Moringen<br />
                  Deutschland
                </p>
              </div>

              <div className="pb-4">
                <p className="text-sm leading-relaxed">
                  Telefon: <a href="tel:055547249063" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">05554-7249063</a><br />
                  E-Mail: über das <a href="/kontakt" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Kontaktformular</a>
                </p>
              </div>

              <div className="pb-4">
                <p className="text-sm leading-relaxed">
                  <span className="font-medium">Umsatzsteuer-ID:</span> DE348411538<br />
                  <span className="text-gray-500 dark:text-gray-400">(vergeben durch das Bundeszentralamt für Steuern)</span>
                </p>
              </div>

              <div className="pb-4">
                <p className="text-sm leading-relaxed">
                  Gewerbeanmeldung gemäß § 14 GewO bei der Stadt Moringen.<br />
                  Die Tätigkeit unterliegt keiner behördlichen Zulassungspflicht.
                </p>
              </div>

              <div className="pb-4">
                <p className="text-sm leading-relaxed">
                  Lothar Frank, Lange Straße 4, 37186 Moringen
                </p>
              </div>
            </div>
          </div>

          {/* Rechtliche Hinweise */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <div className="space-y-6 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  EU-Streitschlichtung
                </h3>
                <p className="text-sm leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>.<br />
                  Kontakt über unser <a href="/kontakt" className="text-blue-600 dark:text-blue-400 hover:underline">Kontaktformular</a>.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Verbraucherstreitbeilegung
                </h3>
                <p className="text-sm leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Haftung für Inhalte
                </h3>
                <p className="text-sm leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                  der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Haftung für Links
                </h3>
                <p className="text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                  Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Urheberrecht
                </h3>
                <p className="text-sm leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                  auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
                  Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 