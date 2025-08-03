import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// AWS SES Client konfigurieren
const sesClient = new SESClient({
  region: process.env.SES_REGION || 'eu-central-1',
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID!,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, website } = body;

    // Honeypot-Check: Wenn das versteckte Feld ausgefüllt ist, ist es wahrscheinlich Spam
    if (website) {
      console.log('Honeypot triggered - likely spam');
      // Wir geben trotzdem eine Erfolgsmeldung zurück, um dem Bot nicht zu verraten, dass er erkannt wurde
      return NextResponse.json(
        { message: 'Ihre Nachricht wurde erfolgreich gesendet' },
        { status: 200 }
      );
    }

    // Validierung der Pflichtfelder
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Alle Pflichtfelder müssen ausgefüllt werden' },
        { status: 400 }
      );
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // E-Mail-Inhalt erstellen
    const emailContent = `
Neue Kontaktanfrage von der Website:

Name: ${firstName} ${lastName}
E-Mail: ${email}
Telefon: ${phone || 'Nicht angegeben'}
Betreff: ${subject}

Nachricht:
${message}

---
Diese Nachricht wurde automatisch über das Kontaktformular auf admin4me.de gesendet.
    `;

    // E-Mail über SES senden
    const sendEmailCommand = new SendEmailCommand({
      Source: process.env.SES_FROM || 'noreply@admin4me.de',
      Destination: {
        ToAddresses: [process.env.SES_TO || 'info@admin4me.de'],
      },
      Message: {
        Subject: {
          Data: `Neue Kontaktanfrage: ${subject}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: emailContent,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await sesClient.send(sendEmailCommand);

    return NextResponse.json(
      { message: 'Ihre Nachricht wurde erfolgreich gesendet' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return NextResponse.json(
      { error: 'Beim Senden der Nachricht ist ein Fehler aufgetreten' },
      { status: 500 }
    );
  }
} 