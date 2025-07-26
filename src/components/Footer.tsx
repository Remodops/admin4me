import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600 mt-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kontakt */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-8">
              Kontakt
            </h3>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-200">
              <div>
                <a 
                  href="tel:055544074740" 
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                >
                  📞 05554 4074740
                </a>
              </div>
              <div>
                <a 
                  href="mailto:info@admin4me.de" 
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
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
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-200">
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                >
                  IT-Administration
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                >
                  Netzwerkwartung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                >
                  Vor-Ort-Service
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
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
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-200">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-medium tracking-wide hover:underline"
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
            © 2024 admin4me. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
} 