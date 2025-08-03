import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barrierefreiheit – admin4me",
  description: "Barrierefreiheitserklärung von admin4me. Informationen zur Zugänglichkeit unserer Website gemäß BITV 2.0.",
};

export default function Barrierefreiheit() {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Barrierefreiheitserklärung
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Informationen zur Zugänglichkeit unserer Website
        </p>
      </section>

      {/* Content */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="space-y-8 text-gray-600 dark:text-gray-300">
            
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Erklärung zur Barrierefreiheit
              </h2>
              <p className="text-sm leading-relaxed">
                Diese Erklärung zur Barrierefreiheit gilt für die Website admin4me.de. 
                Die Erklärung wurde am 15. Januar 2025 erstellt und zuletzt am 15. Januar 2025 überprüft.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Stand der Vereinbarkeit mit den Anforderungen
              </h3>
              <p className="text-sm leading-relaxed">
                Diese Website ist teilweise mit den Anforderungen der 
                <a href="https://www.gesetze-im-internet.de/bitv_2_0/" className="text-blue-600 dark:text-blue-400 hover:underline ml-1" aria-label="Externer Link zur BITV 2.0">
                  Barrierefreie-Informationstechnik-Verordnung (BITV) 2.0
                </a> 
                vereinbar. Die Website entspricht den Anforderungen der WCAG 2.1 AA-Richtlinien.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Nicht barrierefreie Inhalte
              </h3>
              <p className="text-sm leading-relaxed">
                Der Inhalt ist vollständig barrierefrei gestaltet. Alle Inhalte entsprechen den 
                aktuellen Standards für Barrierefreiheit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Erstellung dieser Erklärung zur Barrierefreiheit
              </h3>
              <p className="text-sm leading-relaxed">
                Diese Erklärung wurde durch eine Selbstbewertung erstellt. 
                Die Bewertung erfolgte am 15. Januar 2025.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Feedback und Kontaktangaben
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Haben Sie Mängel bei der barrierefreien Gestaltung unserer Website festgestellt? 
                Dann können Sie sich gerne an uns wenden:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>E-Mail:</strong> 
                  <a href="mailto:barrierefreiheit@admin4me.de" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                    barrierefreiheit@admin4me.de
                  </a>
                </p>
                <p>
                  <strong>Telefon:</strong> 
                  <a href="tel:055544074740" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                    05554-7249 063
                  </a>
                </p>
                <p>
                  <strong>Postalisch:</strong><br />
                  admin4me<br />
                  Lange Straße 4<br />
                  37186 Moringen
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Durchsetzungsverfahren
              </h3>
              <p className="text-sm leading-relaxed">
                Um sicherzustellen, dass diese Website barrierefrei ist, können Sie sich an die 
                Schlichtungsstelle wenden. Die Schlichtungsstelle hat die Aufgabe, bei Konflikten 
                zum Thema Barrierefreiheit zwischen Menschen mit Behinderungen und öffentlichen 
                Stellen zu vermitteln.
              </p>
              <p className="text-sm leading-relaxed mt-4">
                Die Schlichtung ist kostenlos. Sie müssen sich nicht an einen Anwalt wenden.
              </p>
              <p className="text-sm leading-relaxed mt-4">
                Weitere Informationen zum Schlichtungsverfahren finden Sie auf der Website der 
                <a href="https://www.schlichtungsstelle-bgg.de/" className="text-blue-600 dark:text-blue-400 hover:underline ml-1" aria-label="Externer Link zur Schlichtungsstelle">
                  Schlichtungsstelle nach dem Behindertengleichstellungsgesetz
                </a>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Technische Umsetzung
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Barrierefreiheits-Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Semantisches HTML mit korrekter Struktur</li>
                    <li>ARIA-Labels und Rollen für Screen Reader</li>
                    <li>Skip-Links für Tastaturnavigation</li>
                    <li>Ausreichende Farbkontraste (WCAG AA)</li>
                    <li>Fokus-Indikatoren für alle interaktiven Elemente</li>
                    <li>Alt-Texte für alle Bilder</li>
                    <li>Unterstützung für reduzierte Bewegung</li>
                    <li>Responsive Design für alle Bildschirmgrößen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Getestete Technologien:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Screen Reader: NVDA, JAWS, VoiceOver</li>
                    <li>Browser: Chrome, Firefox, Safari, Edge</li>
                    <li>Betriebssysteme: Windows, macOS, iOS, Android</li>
                    <li>Tastaturnavigation: Vollständig unterstützt</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
} 