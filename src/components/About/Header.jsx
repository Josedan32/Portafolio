import { useLanguage } from "../../i18n/useLanguage";

export const AboutHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-16 animate-fade-in">
      <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm font-semibold text-green-300 inline-block mb-6">
        {t("about.badge")}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {t("about.title")}{" "}
        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          {t("about.titleHighlight")}
        </span>
      </h2>
    </div>
  );
};
