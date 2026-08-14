import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import type { LanguageContextType } from '../context/LanguageContext';
import { AVAILABLE_LANGUAGES } from '../types/language';

export { AVAILABLE_LANGUAGES };

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
