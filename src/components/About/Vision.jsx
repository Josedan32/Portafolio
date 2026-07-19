import { Sparkles } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

export const AboutVision = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-6 rounded-2xl border border-green-500/20">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="w-6 h-6 text-green-400" />
        <h3 className="text-xl font-bold text-white">{t("about.vision.title")}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">
        {t("about.vision.prefix")}{" "}
        <span className="text-green-400 font-semibold">{t("about.vision.highlight")}</span>
        {t("about.vision.suffix")}
      </p>
    </div>
  );
};
