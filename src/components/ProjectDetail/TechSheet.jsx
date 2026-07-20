import React from "react";
import { GitBranch, Layers, ShieldCheck, Route, Cpu } from "lucide-react";
import { TechCategory } from "../About/TechCategory";
import { useLanguage } from "../../i18n/useLanguage";

const icons = { GitBranch, Layers, ShieldCheck, Route, Cpu };

export const TechSheet = ({ project }) => {
  const { language, t } = useLanguage();

  return (
    <div className="py-10 md:py-14 border-t border-gray-800">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
        {t("projectDetail.techSheet.title")}
      </h3>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        <div>
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
            {t("projectDetail.techSheet.stackTitle")}
          </h4>
          <div className="space-y-3">
            {project.stack.backend?.length > 0 && (
              <TechCategory color="green" title={t("projectDetail.techSheet.categories.backend")} techs={project.stack.backend} />
            )}
            {project.stack.frontend?.length > 0 && (
              <TechCategory color="blue" title={t("projectDetail.techSheet.categories.frontend")} techs={project.stack.frontend} />
            )}
            {project.stack.ai?.length > 0 && (
              <TechCategory color="green" title={t("projectDetail.techSheet.categories.ai")} techs={project.stack.ai} />
            )}
            {project.stack.devops?.length > 0 && (
              <TechCategory color="orange" title={t("projectDetail.techSheet.categories.devops")} techs={project.stack.devops} />
            )}
            {project.stack.quality?.length > 0 && (
              <TechCategory color="blue" title={t("projectDetail.techSheet.categories.quality")} techs={project.stack.quality} />
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
            {t("projectDetail.techSheet.architectureTitle")}
          </h4>
          <div className="space-y-3">
            {project.architectureHighlights.map((point, i) => {
              const Icon = icons[point.icon] || Cpu;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-gray-800/40 border border-gray-700 rounded-xl"
                >
                  <div className="w-9 h-9 flex-shrink-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-100 text-sm mb-1">{point.title[language]}</h5>
                    <p className="text-gray-400 text-xs leading-relaxed">{point.description[language]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
