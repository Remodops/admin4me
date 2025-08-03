# AWS SES Setup für Kontaktformular

## Umgebungsvariablen konfigurieren

Erstellen Sie eine `.env.local` Datei im Root-Verzeichnis des Projekts mit folgenden Variablen:

```env
# AWS SES Konfiguration
SES_REGION=eu-central-1
SES_ACCESS_KEY_ID=your_access_key_id_here
SES_SECRET_ACCESS_KEY=your_secret_access_key_here

# E-Mail-Konfiguration
SES_FROM=noreply@admin4me.de
SES_TO=info@admin4me.de
```

## AWS SES Konfiguration

### 1. AWS SES User erstellen
- Gehen Sie zu AWS IAM
- Erstellen Sie einen neuen User mit programmatischem Zugriff
- Fügen Sie die `AmazonSESFullAccess` Policy hinzu
- Notieren Sie sich Access Key ID und Secret Access Key

### 2. E-Mail-Adressen verifizieren
- Gehen Sie zu AWS SES Console
- Verifizieren Sie die Absender-E-Mail-Adresse (`noreply@admin4me.de`)
- Verifizieren Sie die Empfänger-E-Mail-Adresse (`info@admin4me.de`)

### 3. Sandbox-Modus verlassen (optional)
- Standardmäßig ist SES im Sandbox-Modus
- Für Produktionsumgebung: Beantragen Sie die Freigabe des Sandbox-Modus
- Oder bleiben Sie im Sandbox-Modus und verwenden Sie nur verifizierte E-Mail-Adressen

## Funktionalität

Das Kontaktformular:
- Validiert alle Eingaben
- Sendet E-Mails über AWS SES
- Zeigt Erfolgs- oder Fehlermeldungen an
- Setzt das Formular nach erfolgreichem Versand zurück

## Sicherheit

- Alle Eingaben werden serverseitig validiert
- E-Mail-Inhalte werden bereinigt
- AWS Credentials werden über Umgebungsvariablen verwaltet 