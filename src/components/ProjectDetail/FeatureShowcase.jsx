import React from "react";
import { BrowserFrame } from "./BrowserFrame";
import { useLanguage } from "../../i18n/useLanguage";

export const FeatureShowcase = ({ project }) => {
  const { language } = useLanguage();

  return (
    <div className="py-12 md:py-16">
      <div className="space-y-14 md:space-y-20">
        {project.showcase.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col md:items-center gap-6 md:gap-10 ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="md:w-1/2">
              <BrowserFrame
                src={item.screenshot?.src}
                alt={item.title[language]}
                label={item.screenshot?.label}
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title[language]}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {item.description[language]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {project.extraFeatures?.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mt-14 md:mt-20">
          {project.extraFeatures.map((feature, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-400"
            >
              {feature[language]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
