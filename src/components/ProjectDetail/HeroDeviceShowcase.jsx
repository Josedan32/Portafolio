import React from "react";
import { Cpu, Smartphone } from "lucide-react";
import { MonitorMockup } from "./MonitorMockup";
import { PhoneMockup } from "./PhoneMockup";
import { useLanguage } from "../../i18n/useLanguage";

const icons = { Cpu, Smartphone };

const CalloutBadge = ({ callout, language }) => {
  const Icon = icons[callout.icon];
  return (
    <div className="flex items-center gap-1.5 max-w-[135px] bg-gray-950/90 backdrop-blur-sm border border-green-500/40 rounded-lg px-2 py-1.5 shadow-lg">
      <div className="w-5 h-5 flex-shrink-0 rounded-md bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
        {Icon && <Icon className="w-3 h-3 text-white" />}
      </div>
      <p className="text-[10px] font-medium text-green-100 leading-tight">
        {callout.text[language]}
      </p>
    </div>
  );
};

export const HeroDeviceShowcase = ({ project }) => {
  const { language } = useLanguage();
  const { desktop, mobile = [] } = project.heroDevices;
  const topCallout = project.heroCallouts?.find((c) => c.corner === "top");
  const bottomCallout = project.heroCallouts?.find((c) => c.corner === "bottom-right");

  return (
    <div className="relative overflow-x-hidden pt-16 pb-16 md:pt-20 md:pb-20">
      <div className="relative mx-auto w-full max-w-sm">
        <MonitorMockup src={desktop?.src} alt={project.title} className="w-full" />

        {mobile.length > 0 && (
          <div className="absolute -right-6 sm:-right-8 bottom-2 flex items-end -space-x-7">
            {mobile.slice(0, 2).map((m, i) => (
              <PhoneMockup
                key={m.label || i}
                src={m.src}
                alt={project.title}
                className={
                  i === 0
                    ? "-rotate-6 z-10 w-20 sm:w-24"
                    : "rotate-3 translate-y-2 w-20 sm:w-24"
                }
              />
            ))}
          </div>
        )}
      </div>

      {topCallout && (
        <div className="hidden lg:flex flex-col items-center gap-1 absolute top-0 left-1/2 -translate-x-1/2">
          <CalloutBadge callout={topCallout} language={language} />
          <div className="w-px h-8 border-l-2 border-dashed border-green-500/40" />
        </div>
      )}

      {bottomCallout && (
        <div className="hidden lg:flex flex-col items-end gap-1 absolute bottom-0 right-2 sm:right-4">
          <div className="w-px h-8 border-l-2 border-dashed border-green-500/40" />
          <CalloutBadge callout={bottomCallout} language={language} />
        </div>
      )}
    </div>
  );
};
