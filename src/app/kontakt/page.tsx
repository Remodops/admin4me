import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – admin4me",
  description: "So erreichen Sie uns: E-Mail, Telefon, Adresse. IT-Administration und Support in Moringen und Umgebung.",
};

export default function Kontakt() {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          So erreichen Sie uns
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Kontaktieren Sie uns für professionellen IT-Support. 
          Wir sind für Sie da und helfen Ihnen gerne weiter.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Kontaktdaten
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      E-Mail
                    </h3>
                    <a
                      href="mailto:info@admin4me.de"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      info@admin4me.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:055544074740"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      05554 4074740
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Adresse
                    </h3>
                    <address className="text-gray-600 dark:text-gray-300 not-italic">
                      admin4me<br />
                      Lange Straße 4<br />
                      37186 Moringen
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Geschäftszeiten
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Montag - Freitag:</span>
                  <span>8:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag:</span>
                  <span>9:00 - 14:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag:</span>
                  <span>Geschlossen</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Notfall-Support auch außerhalb der Geschäftszeiten verfügbar
              </p>
            </div>
          </div>

          {/* QR Codes */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Schnellkontakt
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Scannen Sie die QR-Codes für direkten Kontakt über WhatsApp oder Telegram.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* WhatsApp QR Code */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg flex items-center justify-center">
                  <div className="text-green-600 dark:text-green-300 text-2xl font-bold">
                    WhatsApp
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  WhatsApp QR-Code
                </p>
              </div>

              {/* Telegram QR Code */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center">
                  <div className="text-blue-600 dark:text-blue-300 text-2xl font-bold">
                    Telegram
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Telegram QR-Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Placeholder */}
      <section className="mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Kontaktformular
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Für eine schnelle und unkomplizierte Kontaktaufnahme nutzen Sie am besten direkt E-Mail oder Telefon.
          </p>
          <div className="text-center">
            <a
              href="mailto:info@admin4me.de?subject=Anfrage von Website"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              E-Mail senden
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="text-center bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Servicegebiet
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Wir bieten unsere IT-Services in Moringen und der gesamten Region an. 
          Vor-Ort-Service ist in einem Umkreis von 30 km verfügbar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div>Moringen</div>
          <div>Northeim</div>
          <div>Einbeck</div>
          <div>Göttingen</div>
          <div>Uslar</div>
          <div>Dassel</div>
        </div>
      </section>
    </div>
  );
} 