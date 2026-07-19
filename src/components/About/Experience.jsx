import { Briefcase } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

export const AboutExperience = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-green-700/40">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{t("about.experience.title")}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">
        <span className="text-green-400 font-semibold">{t("about.experience.yearsValue")}</span>
        {t("about.experience.bodyMid")}
        <span className="text-emerald-400 font-semibold">{t("about.experience.aiHighlight")}</span>
        {t("about.experience.bodyEnd")}
      </p>
    </div>
  );
};
