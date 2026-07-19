import { HeroStat } from "./HeroStat";
import { ContactInfo } from "../ContactInfo";
import { useLanguage } from "../../i18n/useLanguage";

export const HeroIntro = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="inline-block">
        <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-300">
          {t("hero.badge")}
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        {t("hero.greeting")}{" "}
        <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
          Daniel
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        {t("hero.description.prefix")}
        <span className="text-green-400 font-semibold">{t("hero.description.highlight1")}</span>
        {t("hero.description.mid")}
        <span className="text-emerald-400 font-semibold">{t("hero.description.highlight2")}</span>.
      </p>

      <p className="text-base text-gray-400 max-w-lg">{t("hero.tagline")}</p>

      <div>
        <p className="text-xs text-gray-500 mb-2">{t("hero.contactIntro")}</p>
        <ContactInfo className="text-sm text-gray-400" />
      </div>

      <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-800">
        <HeroStat value={t("hero.stats.projectsValue")} label={t("hero.stats.projectsLabel")} color="text-green-400" />
        <HeroStat value={t("hero.stats.satisfactionValue")} label={t("hero.stats.satisfactionLabel")} color="text-emerald-400" />
        <HeroStat value={t("hero.stats.experienceValue")} label={t("hero.stats.experienceLabel")} color="text-blue-400" />
      </div>
    </div>
  );
};
