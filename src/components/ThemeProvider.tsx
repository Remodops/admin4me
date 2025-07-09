'use client';

import { useEffect } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Verhindert Flash beim Laden
    const root = document.documentElement;
    const body = document.body;
    
    // Sofortige Dark Mode Erkennung
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0f1117';
      root.style.color = '#e0e0e0';
      body.style.backgroundColor = '#0f1117';
      body.style.color = '#e0e0e0';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#ffffff';
      root.style.color = '#171717';
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#171717';
    }

    // Listener für Theme-Änderungen
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        root.classList.add('dark');
        root.style.backgroundColor = '#0f1117';
        root.style.color = '#e0e0e0';
        body.style.backgroundColor = '#0f1117';
        body.style.color = '#e0e0e0';
      } else {
        root.classList.remove('dark');
        root.style.backgroundColor = '#ffffff';
        root.style.color = '#171717';
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#171717';
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return <>{children}</>;
} 