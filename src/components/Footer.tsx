import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kontakt */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-6 text-subtitle">
              Kontakt
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <a
                  href="tel:055544074740"
                  className="hover:text-professional dark:hover:text-white transition-colors font-medium"
                >
                  Tel: 05554 4074740
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@admin4me.de"
                  className="hover:text-professional dark:hover:text-white transition-colors font-medium"
                >
                  info@admin4me.de
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left md:border-l md:border-r border-gray-200 dark:border-gray-700 md:px-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-6 text-subtitle">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-white transition-colors font-medium"
                >
                  IT-Administration
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-white transition-colors font-medium"
                >
                  Netzwerkwartung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-white transition-colors font-medium"
                >
                  Vor-Ort-Service
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-white transition-colors font-medium"
                >
                  Remote-Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-6 text-subtitle">
              Rechtliches
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-professional dark:hover:text-white transition-colors font-medium"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-professional dark:hover:text-white transition-colors font-medium"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium">
            © {new Date().getFullYear()} admin4me. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
} 