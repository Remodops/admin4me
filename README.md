# admin4me – IT-Administration & Support

Professionelle Website für IT-Administration und Support-Services in Moringen und Umgebung.

## 🚀 Features

- **Modernes Design**: Minimalistisch, seriös und professionell
- **Dark Mode**: Umschaltbar per Button und systemabhängig
- **Responsive**: Optimiert für alle Geräte (375px bis Widescreen)
- **DSGVO-konform**: Keine Cookies, keine Tracker
- **Performance**: Optimiert für beste Lighthouse-Werte
- **Accessibility**: ARIA-Rollen, Fokus-Indikatoren, Tastaturnavigation
- **SEO**: Vollständige Meta-Tags und Open Graph

## 🛠️ Technologie-Stack

- **Framework**: Next.js 15.3.5 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS v4
- **Theme**: next-themes für Dark Mode
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)

## 📁 Projektstruktur

```
src/
├── app/
│   ├── layout.tsx          # Globales Layout mit Header/Footer
│   ├── page.tsx            # Startseite
│   ├── leistungen/         # Services-Seite
│   ├── preise/             # Preise-Seite
│   ├── referenzen/         # Referenzen-Seite
│   ├── kontakt/            # Kontakt-Seite
│   ├── impressum/          # Impressum
│   └── datenschutz/        # Datenschutzerklärung
└── components/
    ├── Header.tsx          # Navigation + Darkmode-Toggle
    ├── Footer.tsx          # Footer mit Links
    ├── ThemeToggle.tsx     # Darkmode-Button
    └── Card.tsx            # Wiederverwendbare Cards
```

## 🚀 Getting Started

### Voraussetzungen

- Node.js 18+ 
- npm, yarn, pnpm oder bun

### Installation

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

3. **Browser öffnen:**
   Öffnen Sie [http://localhost:3000](http://localhost:3000)

## 📦 Verfügbare Scripts

- `npm run dev` - Entwicklungsserver starten
- `npm run build` - Produktions-Build erstellen
- `npm run start` - Produktions-Server starten
- `npm run lint` - Code-Qualität prüfen

## 🎨 Design-System

### Farben
- **Light Mode**: Grau-Skala mit blauen Akzenten
- **Dark Mode**: Dunkle Grau-Töne mit blauen Akzenten
- **Kontraste**: WCAG AA-konform

### Typografie
- **Font**: Inter (system-ui Fallback)
- **Größen**: Responsive Typography-Skala
- **Hierarchie**: Klare H1-H6 Struktur

### Komponenten
- **Cards**: Einheitliches Design für Services und Inhalte
- **Buttons**: Primär/Sekundär mit Hover-States
- **Navigation**: Responsive mit Mobile-Menu

## 📱 Responsive Design

- **Mobile**: 375px+ (iPhone SE)
- **Tablet**: 768px+ (iPad)
- **Desktop**: 1024px+ (Laptop)
- **Widescreen**: 1280px+ (Desktop)

## 🔧 Konfiguration

### Umgebungsvariablen
Erstellen Sie eine `.env.local` Datei für Produktions-Einstellungen:

```env
NEXT_PUBLIC_SITE_URL=https://admin4me.de
```

### Deployment
Die Website ist bereit für Deployment auf:
- **Vercel** (empfohlen)
- **Netlify**
- **Eigener Server**

## 📄 Seiten

### Startseite (`/`)
- Hero-Sektion mit Call-to-Action
- Typische IT-Probleme als Cards
- Professionelle Positionierung

### Leistungen (`/leistungen`)
- 6 Service-Cards mit Details
- Softwarepflege, Netzwerkwartung, etc.
- Kontakt-Buttons

### Preise (`/preise`)
- Basis-Paket: 50€/Monat
- Komplett-Paket: 120€/Monat
- Individuelle Angebote

### Referenzen (`/referenzen`)
- Kunden-Logos und Beschreibungen
- Testimonials
- Vertrauensbildung

### Kontakt (`/kontakt`)
- Vollständige Kontaktdaten
- QR-Codes für WhatsApp/Telegram
- Servicegebiet

### Rechtliches
- **Impressum** (`/impressum`): Vollständige rechtliche Informationen
- **Datenschutz** (`/datenschutz`): DSGVO-konforme Datenschutzerklärung

## 🎯 Performance

- **Lighthouse Score**: 90+ in allen Kategorien
- **Core Web Vitals**: Optimiert
- **SEO**: Vollständige Meta-Tags
- **Accessibility**: WCAG AA-konform

## 🔒 Datenschutz

- **Keine Cookies**: DSGVO-konform ohne Cookie-Banner
- **Keine Tracker**: Keine Google Analytics oder ähnliche Tools
- **Minimale Datenerfassung**: Nur technisch notwendige Daten
- **Transparenz**: Vollständige Datenschutzerklärung

## 📞 Kontakt

**admin4me**  
Lothar Frank  
Lange Straße 4  
37186 Moringen  
Tel: [05554-7249 063](tel:055547249063)  
E-Mail: [Kontaktformular](/kontakt)

## 📄 Lizenz

© 2024 admin4me. Alle Rechte vorbehalten.
