import React from "react";
import { useLanguage } from "../../i18n/useLanguage";

export const ProjectsHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-8 md:mb-10 animate-fade-in">
      <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm font-semibold text-green-300 inline-block mb-6">
        {t("projectsSection.badge")}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        {t("projectsSection.title")}{" "}
        <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          {t("projectsSection.titleHighlight")}
        </span>
      </h2>
      <p className="text-sm md:text-base text-gray-400">{t("projectsSection.subtitle")}</p>
    </div>
  );
};
