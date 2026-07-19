import React from "react";
import { useLanguage } from "../../i18n/useLanguage";

export const MetricsBanner = ({ project }) => {
  const { language } = useLanguage();

  return (
    <div className="border-y border-gray-800 bg-gray-900/40">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-3 flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2">
        {project.metrics.map((metric, i) => (
          <div key={i} className="flex items-center gap-1.5 text-sm">
            <span className="font-bold text-green-400">{metric.value}</span>
            <span className="text-gray-500">{metric.label[language]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
