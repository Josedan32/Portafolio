import { useLanguage } from "../../i18n/useLanguage";

export const AboutPhilosophy = ({ compact = false }) => {
  const { t } = useLanguage();

  return (
    <div
      className={`relative bg-gradient-to-br from-green-500/10 to-emerald-600/10 ${
        compact ? "p-5" : "p-8"
      } rounded-2xl border border-green-500/20`}
    >
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
        <svg
          className="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9-7-9-7-9 7 9 7z" />
        </svg>
      </div>
      <p
        className={`text-gray-200 leading-relaxed font-medium italic ${
          compact ? "text-lg md:text-xl" : "text-xl md:text-2xl"
        }`}
      >
        {t("about.philosophy.prefix")}{" "}
        <span className="text-green-400">{t("about.philosophy.highlight")}</span>
        {t("about.philosophy.suffix")}
      </p>
    </div>
  );
};
