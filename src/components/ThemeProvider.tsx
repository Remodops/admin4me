'use client';

import { useEffect } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // 1. Theme aus LocalStorage lesen
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    let theme: 'dark' | 'light';
    if (savedTheme === 'dark' || savedTheme === 'light') {
      theme = savedTheme;
    } else {
      // 2. Fallback: System-Theme
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    if (theme === 'dark') {
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

    // Listener für System-Theme-Änderungen, aber nur wenn kein Theme im LocalStorage
    let mediaQuery: MediaQueryList | null = null;
    let handleChange: ((e: MediaQueryListEvent) => void) | null = null;
    if (!savedTheme) {
      mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      handleChange = (e: MediaQueryListEvent) => {
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
    }

    return () => {
      if (mediaQuery && handleChange) {
        mediaQuery.removeEventListener('change', handleChange);
      }
    };
  }, []);

  return <>{children}</>;
} 