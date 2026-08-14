import React, { createContext, useEffect, useState } from 'react';
import type { Language } from '../types/language';
import en from '../locales/en.json';
import bn from '../locales/bn.json';

type Dictionary = typeof en;

const dictionaries: Record<Language, Dictionary> = { en, bn };

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const STORAGE_KEY = 'robtech_lang';

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): string | null {
  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return null;
    }
  }

  return typeof current === 'string' ? current : null;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && (saved === 'en' || saved === 'bn')) return saved;
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('bn') ? 'bn' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const dict = dictionaries[language] || dictionaries.en;
    const value = getNestedValue(dict as unknown as Record<string, unknown>, key);

    if (value !== null) return value;

    if (language !== 'en') {
      const enValue = getNestedValue(dictionaries.en as unknown as Record<string, unknown>, key);
      if (enValue !== null) return enValue;
    }

    return fallback ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
