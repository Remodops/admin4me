"use client";

import { useState } from "react";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false,
    website: '' // Honeypot-Feld
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot-Check: Wenn das versteckte Feld ausgefüllt ist, ist es wahrscheinlich ein Bot
    if (formData.website) {
      console.log('Honeypot triggered - likely spam');
      setSubmitStatus({
        type: 'success',
        message: 'Ihre Nachricht wurde erfolgreich gesendet'
      });
      return;
    }
    
    if (!formData.privacy) {
      setSubmitStatus({
        type: 'error',
        message: 'Bitte stimmen Sie der Datenschutzerklärung zu.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          website: formData.website, // Honeypot-Feld mitsenden
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Formular zurücksetzen
        setFormData({
           firstName: '',
           lastName: '',
           email: '',
           phone: '',
           subject: '',
           message: '',
           privacy: false,
           website: ''
         });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Beim Senden der Nachricht ist ein Fehler aufgetreten.'
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Beim Senden der Nachricht ist ein Fehler aufgetreten.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <section className="text-center mb-24">
        <h1 className="heading-xl text-gray-900 dark:text-white mb-10">
          So erreichen Sie uns
        </h1>
        <p className="text-enhanced text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Kontaktieren Sie uns für professionellen IT-Support. 
          Wir freuen uns auf Ihre Nachricht und helfen Ihnen gerne weiter.
        </p>
      </section>

      {/* Main Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        {/* Direkter Kontakt Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300">
          <h2 className="heading-md text-professional dark:text-white mb-10 text-center lg:text-left">
            Direkter Kontakt
          </h2>
          <p className="text-enhanced text-gray-600 dark:text-gray-300 mb-12 leading-relaxed text-center lg:text-left">
            Haben Sie Fragen zu unseren IT-Services oder benötigen Sie schnelle Hilfe? 
            Kontaktieren Sie uns über Ihren bevorzugten Kommunikationsweg.
          </p>
          
          <div className="space-y-10">
            <div className="flex items-start lg:justify-start justify-center">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mr-8 shadow-professional">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="heading-sm text-professional dark:text-white mb-3">
                  E-Mail
                </h3>
                <a
                  href="mailto:info@admin4me.de"
                  className="text-accent dark:text-blue-400 hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-semibold text-lg tracking-wide"
                >
                  info@admin4me.de
                </a>
              </div>
            </div>

            <div className="flex items-start lg:justify-start justify-center">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mr-8 shadow-professional">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="heading-sm text-professional dark:text-white mb-3">
                  Telefon
                </h3>
                <a
                  href="tel:055544074740"
                  className="text-accent dark:text-blue-400 hover:text-professional dark:hover:text-blue-300 transition-all duration-200 font-semibold text-lg tracking-wide"
                >
                  05554-7249063
                </a>
              </div>
            </div>

            <div className="flex items-start lg:justify-start justify-center">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mr-8 shadow-professional">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="heading-sm text-professional dark:text-white mb-3">
                  Adresse
                </h3>
                <address className="text-gray-600 dark:text-gray-300 not-italic leading-relaxed tracking-wide">
                  admin4me<br />
                  Lange Straße 4<br />
                  37186 Moringen
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Kontaktformular Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 border border-professional dark:border-gray-700 shadow-professional hover-lift transition-all duration-300">
          <h2 className="heading-md text-professional dark:text-white mb-10 text-center">
            Kontaktformular
          </h2>

          <form 
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Vorname *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Nachname *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Betreff *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
              >
                <option value="">Bitte wählen Sie einen Betreff</option>
                <option value="it-support">IT-Support & Beratung</option>
                <option value="datev-support">DATEV Support</option>
                <option value="network-setup">Netzwerk-Setup</option>
                <option value="remote-support">Remote-Support</option>
                <option value="hardware-repair">Hardware-Reparatur</option>
                <option value="training">Schulung & Training</option>
                <option value="consultation">Beratungsgespräch</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Ihre Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-vertical"
              ></textarea>
            </div>

                         {/* Honeypot-Feld - für normale Benutzer unsichtbar */}
             <div className="absolute left-[-9999px] opacity-0 pointer-events-none">
               <input
                 type="text"
                 name="website"
                 value={formData.website}
                 onChange={handleInputChange}
                 tabIndex={-1}
                 autoComplete="off"
                 aria-hidden="true"
               />
             </div>

             <div className="flex items-start space-x-3">
               <input
                 type="checkbox"
                 id="privacy"
                 name="privacy"
                 checked={formData.privacy}
                 onChange={handleInputChange}
                 className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
               />
               <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-300">
                 Ich stimme der <a href="/datenschutz" className="text-blue-600 dark:text-blue-400 hover:underline">Datenschutzerklärung</a> zu und erlaube die Verarbeitung meiner Daten für die Kontaktaufnahme. *
               </label>
             </div>

            {/* Statusmeldungen */}
            {submitStatus.type && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
              }`}>
                <p className={`text-sm font-medium ${
                  submitStatus.type === 'success' 
                    ? 'text-green-800 dark:text-green-200' 
                    : 'text-red-800 dark:text-red-200'
                }`}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary px-12 py-4 text-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                * Pflichtfelder
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 