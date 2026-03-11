import React, { createContext, useState, useEffect } from 'react';

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'eng');
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [lang, darkMode]);

  const toggleLanguage = () => setLang(prev => prev === 'eng' ? 'tr' : 'eng');
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <SiteContext.Provider value={{ lang, darkMode, toggleLanguage, toggleDarkMode }}>
      {children}
    </SiteContext.Provider>
  );
};