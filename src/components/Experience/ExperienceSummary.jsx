import React from "react";
import { useLanguage } from "../../i18n/useLanguage";

export const ExperienceSummary = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-12 md:mt-16 text-center">
      <div className="inline-block bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 px-8 py-4 rounded-2xl border border-gray-700">
        <p className="text-gray-300">
          <span className="text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            {t("experienceSection.summaryValue")}
          </span>{" "}
          {t("experienceSection.summarySuffix")}
        </p>
      </div>
    </div>
  );
};
