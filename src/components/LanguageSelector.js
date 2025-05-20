import React from 'react';
import './LanguageSelector.css';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = ({ currentLanguage, onLanguageChange, className = '' }) => {
  // If props are provided, use them (for local language control)
  // Otherwise use the global language context
  const languageContext = useLanguage();
  
  const isGlobal = !currentLanguage && !onLanguageChange;
  const languages = isGlobal 
    ? languageContext.availableLanguages 
    : [
        { code: 'en', name: 'English' },
        { code: 'ua', name: 'Українська' },
        { code: 'ru', name: 'Русский' },
        { code: 'he', name: 'עברית' }
      ];
  
  const activeLang = isGlobal ? languageContext.language : currentLanguage;
  const handleChange = isGlobal 
    ? languageContext.changeLanguage 
    : onLanguageChange;
  
  return (
    <div className={`language-selector ${className}`}>
      {languages.map(lang => (
        <button
          key={lang.code}
          className={`language-btn ${activeLang === lang.code ? 'active' : ''}`}
          onClick={() => handleChange(lang.code)}
          aria-label={`Switch to ${lang.name}`}
        >
          {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector; 