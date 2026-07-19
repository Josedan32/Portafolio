import { useLanguage } from "../../i18n/useLanguage";

export const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={t("languageToggle.ariaLabel")}
      className="flex items-center gap-1 px-2.5 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs font-semibold text-gray-400 hover:border-green-500/50 transition-colors"
    >
      <span className={language === "es" ? "text-green-400" : ""}>ES</span>
      <span className="text-gray-600">|</span>
      <span className={language === "en" ? "text-green-400" : ""}>EN</span>
    </button>
  );
};
