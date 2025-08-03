import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// ThemeProvider entfernt - verwende einfache Dark Mode Implementierung
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "admin4me – IT-Administration & Support",
  description: "Schnelle Hilfe, persönliche Betreuung, zuverlässiger Betrieb. IT-Administration und Support in Moringen und Umgebung.",
  keywords: "IT-Administration, IT-Support, Netzwerkwartung, Vor-Ort-Service, Moringen",
  authors: [{ name: "admin4me" }],
  creator: "admin4me",
  publisher: "admin4me",
  robots: "index, follow",
  openGraph: {
    title: "admin4me – IT-Administration & Support",
    description: "Schnelle Hilfe, persönliche Betreuung, zuverlässiger Betrieb. IT-Administration und Support in Moringen und Umgebung.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title: "admin4me – IT-Administration & Support",
    description: "Schnelle Hilfe, persönliche Betreuung, zuverlässiger Betrieb.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#10192B" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="transition-colors duration-300">
      <body className={`${inter.variable} font-sans antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {/* Skip-Links für Barrierefreiheit */}
          <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
            <a 
              href="#main-content" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Zum Hauptinhalt springen
            </a>
            <a 
              href="#navigation" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Zur Navigation springen
            </a>
            <a 
              href="#footer" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Zum Footer springen
            </a>
          </div>
          
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <Header />
            <main id="main-content" className="flex-1 flex flex-col" role="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
