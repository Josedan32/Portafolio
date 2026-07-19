import { useLanguage } from "../../i18n/useLanguage";

export const AboutAdditionalSkills = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-5 rounded-xl border border-green-500/20 mt-6">
      <h4 className="text-sm font-semibold text-green-300 mb-3">{t("about.additionalSkills.title")}</h4>
      <div className="flex flex-wrap gap-2">
        {t("about.additionalSkills.skills").map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
