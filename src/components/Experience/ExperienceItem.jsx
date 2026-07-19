import React from "react";
import { Zap, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

export const ExperienceItem = ({
  company,
  role,
  date,
  color,
  icon: Icon,
  description,
  tech,
  achievements,
  index,
}) => {
  const { language } = useLanguage();
  const colors = {
    emerald: {
      base: "from-emerald-500/10 to-green-500/10 border-emerald-500/20 hover:border-emerald-500/40",
      text: "text-emerald-400",
      badge: "bg-emerald-500/20 border border-emerald-500/30 text-emerald-300",
      icon: "bg-gradient-to-br from-emerald-500 to-green-500",
      dot: "bg-emerald-500 border-4 border-gray-900 shadow-emerald-500/50",
    },
    teal: {
      base: "from-teal-500/10 to-emerald-500/10 border-teal-500/20 hover:border-teal-500/40",
      text: "text-teal-400",
      badge: "bg-teal-500/20 border border-teal-500/30 text-teal-300",
      icon: "bg-gradient-to-br from-teal-500 to-green-500",
      dot: "bg-teal-500 border-4 border-gray-900 shadow-teal-500/50",
    },
    green: {
      base: "from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-500/40",
      text: "text-green-400",
      badge: "bg-green-500/20 border border-green-500/30 text-green-300",
      icon: "bg-gradient-to-br from-green-500 to-emerald-500",
      dot: "bg-green-500 border-4 border-gray-900 shadow-green-500/50",
    },
  };

  const c = colors[color] || colors.green;
  const isLeft = index % 2 === 1;

  return (
    <div className={`relative grid md:grid-cols-2 gap-6 items-center`}>
      {/* Fecha (desktop) */}
      {isLeft ? (
        <div className="hidden md:flex justify-start pl-8 order-3">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${c.badge}`}>
            {date[language]}
          </span>
        </div>
      ) : (
        <div className="hidden md:flex justify-end pr-8 order-1">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${c.badge}`}>
            {date[language]}
          </span>
        </div>
      )}

      {/* Punto central */}
      <div
        className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${c.dot}`}
      ></div>

      {/* Contenido */}
      <div className={`${isLeft ? "md:pr-8 order-1" : "md:pl-8 order-2"}`}>
        <div
          className={`bg-gradient-to-br ${c.base} p-4 md:p-6 rounded-xl border transition-all duration-300 group hover:shadow-lg`}
        >
          {/* Fecha móvil */}
          <div className="md:hidden mb-2">
            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${c.badge}`}>
              {date[language]}
            </span>
          </div>

          {/* Encabezado */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className={`text-base md:text-lg font-semibold mb-1 ${c.text}`}>
                {company}
              </h3>
              <p className={`${c.text} text-xs md:text-sm font-medium`}>{role[language]}</p>
            </div>
            <div
              className={`w-9 h-9 ${c.icon} rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
            >
              <Icon className="w-4.5 h-4.5 text-white" />
            </div>
          </div>

          {/* Descripción */}
          <p className="text-gray-300 text-xs md:text-sm mb-3 leading-snug">
            {description[language]}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-1 mb-3">
            {tech.map((t, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 text-[10px] rounded-md font-medium ${c.badge}`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Logros */}
          <div className={`space-y-1.5 pt-3 border-t border-gray-700`}>
            {achievements.map((ach, i) => {
  const IconComponent = [TrendingUp, Target, Zap][i % 3];
  return (
    <div key={i} className="flex items-start gap-2 text-[11px] text-gray-300">
      <IconComponent
        className={`w-3.5 h-3.5 ${c.text} mt-0.5 flex-shrink-0`}
      />
      <span>{ach[language]}</span>
    </div>
  );
})}

          </div>
        </div>
      </div>
    </div>
  );
};
