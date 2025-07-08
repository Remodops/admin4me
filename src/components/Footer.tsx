import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              Kontakt
            </h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <a
                  href="tel:055544074740"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Tel: 05554 4074740
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@admin4me.de"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  info@admin4me.de
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  IT-Administration
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Netzwerkwartung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Vor-Ort-Service
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Remote-Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} admin4me. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
} 