import React from "react";
import { KeyRound, ShieldAlert, ExternalLink } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

export const DemoAccess = ({ project }) => {
  const { language, t } = useLanguage();

  if (!project.demoAccess) return null;

  return (
    <div className="py-10 md:py-14">
      <div className="max-w-2xl mx-auto p-6 md:p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl text-center">
        <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold mb-2">
          <KeyRound className="w-5 h-5 text-green-400" />
          {t("projectDetail.demoAccess.heading")}
        </h3>
        <p className="text-gray-400 text-sm mb-5">
          {t("projectDetail.demoAccess.subtitle")}
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-4">
          <span className="px-3 py-1.5 bg-gray-900/60 border border-gray-700 rounded-lg text-sm text-gray-300 font-mono">
            {project.demoAccess.email}
          </span>
          <span className="px-3 py-1.5 bg-gray-900/60 border border-gray-700 rounded-lg text-sm text-gray-300 font-mono">
            {project.demoAccess.password}
          </span>
        </div>

        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-semibold text-gray-950 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 mb-4"
          >
            {t("projectDetail.viewDemo")}
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

        <p className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed max-w-md mx-auto">
          <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          {project.demoAccess.note[language]}
        </p>
      </div>
    </div>
  );
};
