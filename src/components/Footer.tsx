import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600 mt-12" role="contentinfo">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kontakt */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-8">
              Kontakt
            </h3>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-200" role="list">
              <div role="listitem">
                <a 
                  href="tel:055544074740" 
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                  aria-label="Telefonnummer 05554-7249 063 anrufen"
                >
                  📞 05554-7249 063
                </a>
              </div>
              <div role="listitem">
                <a 
                  href="mailto:info@admin4me.de" 
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                  aria-label="E-Mail an info@admin4me.de senden"
                >
                  ✉️ info@admin4me.de
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left md:border-l md:border-r border-gray-200 dark:border-gray-600 md:px-8">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-8">
              Services
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-200" role="list">
              <li role="listitem">
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                  aria-label="Zu unseren IT-Administrationsleistungen"
                >
                  IT-Administration
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                  aria-label="Zu unseren Netzwerkwartungsleistungen"
                >
                  Netzwerkwartung
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                  aria-label="Zu unseren Vor-Ort-Serviceleistungen"
                >
                  Vor-Ort-Service
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                  aria-label="Zu unseren Remote-Supportleistungen"
                >
                  Remote-Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-8">
              Rechtliches
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-200" role="list">
              <li role="listitem">
                <Link
                  href="/impressum"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                  aria-label="Zum Impressum"
                >
                  Impressum
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/datenschutz"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                  aria-label="Zur Datenschutzerklärung"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-600 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300 tracking-wide">
            © 2025 admin4me. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
} 