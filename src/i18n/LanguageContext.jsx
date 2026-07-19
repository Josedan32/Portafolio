import { useState, useEffect, useMemo } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./context";

const STORAGE_KEY = "portfolio-lang";

const resolvePath = (obj, path) =>
  path.split(".").reduce((acc, key) => acc?.[key], obj);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "es";
    return localStorage.getItem(STORAGE_KEY) || "es";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => setLanguage((prev) => (prev === "es" ? "en" : "es"));

  const value = useMemo(() => {
    const t = (path) => {
      const resolved = resolvePath(translations[language], path);
      return resolved !== undefined ? resolved : path;
    };
    return { language, toggleLanguage, t };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
