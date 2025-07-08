import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// ThemeProvider entfernt - verwende einfache Dark Mode Implementierung
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from 'next/head';

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
  themeColor: "#1f2937",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <Head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#10192B" media="(prefers-color-scheme: dark)" />
      </Head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
