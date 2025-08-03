# Umgebungsvariablen Setup

## .env.local Datei erstellen

Erstellen Sie manuell eine `.env.local` Datei im Root-Verzeichnis des Projekts (admin4me/) mit folgendem Inhalt:

```env
# AWS SES Konfiguration
SES_REGION=eu-central-1
SES_ACCESS_KEY_ID=your_access_key_id_here
SES_SECRET_ACCESS_KEY=your_secret_access_key_here

# E-Mail-Konfiguration
SES_FROM=noreply@admin4me.de
SES_TO=info@admin4me.de
```

## Schritte:

1. **Datei erstellen:**
   - Öffnen Sie einen Texteditor (Notepad, VS Code, etc.)
   - Erstellen Sie eine neue Datei
   - Kopieren Sie den obigen Inhalt

2. **Speichern:**
   - Speichern Sie die Datei als `.env.local` (mit Punkt am Anfang)
   - Stellen Sie sicher, dass sie im `admin4me/` Verzeichnis liegt
   - Wichtig: Keine `.txt` Endung!

3. **Werte eintragen:**
   - Ersetzen Sie `your_access_key_id_here` mit Ihrer AWS Access Key ID
   - Ersetzen Sie `your_secret_access_key_here` mit Ihrem AWS Secret Access Key
   - Passen Sie die E-Mail-Adressen an, falls nötig

## Hinweise:

- Die `.env.local` Datei wird automatisch von Next.js geladen
- Sie wird nicht ins Git-Repository eingecheckt (steht in .gitignore)
- Nach dem Erstellen der Datei müssen Sie den Development-Server neu starten

## Development-Server starten:

```bash
npm run dev
```

Falls der "dev" Script fehlt, überprüfen Sie die package.json oder verwenden Sie:

```bash
npx next dev
``` 