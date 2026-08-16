import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const badgeTech = [
    ...project.stack.backend,
    ...project.stack.frontend,
  ].slice(0, 4);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onClick={() => navigate(`/projects/${project.slug}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group cursor-pointer relative overflow-hidden bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 p-5 md:p-6 flex flex-col"
    >
      {isHovered && (
        <>
          <div
            className="absolute w-40 h-40 rounded-full pointer-events-none transition-opacity duration-300 blur-2xl"
            style={{
              left: `${hoverPosition.x}px`,
              top: `${hoverPosition.y}px`,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute w-24 h-24 rounded-full pointer-events-none transition-opacity duration-200"
            style={{
              left: `${hoverPosition.x}px`,
              top: `${hoverPosition.y}px`,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)",
            }}
          />
        </>
      )}

      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-300">
            {project.status[language]}
          </span>
          {project.year && (
            <span className="px-2.5 py-0.5 bg-gray-900/60 border border-gray-700 rounded-full text-xs font-medium text-gray-400">
              {project.year}
            </span>
          )}
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
    </div>
  );
};
