import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const badgeTech = [
    ...project.stack.backend,
    ...project.stack.frontend,
  ].slice(0, 4);

  return (
    <div
      onClick={() => navigate(`/projects/${project.slug}`)}
      className="group cursor-pointer bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 p-5 md:p-6 flex flex-col"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2.5 py-0.5 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-300">
          {project.status[language]}
        </span>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-gray-100 group-hover:text-green-400 transition-colors mb-2">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4 flex-1">{project.tagline[language]}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {badgeTech.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-gray-900/60 border border-gray-700 rounded-md text-xs text-gray-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-400 group-hover:gap-2.5 transition-all">
        {t("projectsSection.viewProject")}
        <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  );
};
