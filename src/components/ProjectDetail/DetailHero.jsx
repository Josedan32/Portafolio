import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import { HeroDeviceShowcase } from "./HeroDeviceShowcase";
import { useLanguage } from "../../i18n/useLanguage";

export const DetailHero = ({ project }) => {
  const { language, t } = useLanguage();

  return (
  <div className="pt-8 md:pt-12 pb-8 md:pb-10">
    <Link
      to="/"
      state={{ scrollTo: "#proyectos" }}
      className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      {t("projectDetail.backLink")}
    </Link>

    <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-300">
            {project.status[language]}
          </span>
          <span className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs font-medium text-gray-400">
            {project.role[language]}
          </span>
          {project.year && (
            <span className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs font-medium text-gray-400">
              {project.year}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-3">{project.title}</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4">{project.tagline[language]}</p>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
          {project.summary[language]}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-semibold text-gray-950 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-1.5"
            >
              {t("projectDetail.viewDemo")}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.links.repos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-green-600 rounded-full font-semibold transition-all duration-300 flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              {repo.label}
            </a>
          ))}
        </div>
      </div>

      {project.heroDevices ? (
        <HeroDeviceShowcase project={project} />
      ) : (
        <BrowserFrame
          src={project.heroScreenshot?.src}
          alt={project.title}
          label={project.heroScreenshot?.label}
        />
      )}
    </div>
  </div>
  );
};
