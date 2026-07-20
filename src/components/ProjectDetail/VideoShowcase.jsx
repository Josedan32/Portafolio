import React from "react";
import { VideoOff } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

export const VideoShowcase = ({ project }) => {
  const { t } = useLanguage();
  const video =
    typeof project.demoVideo === "string"
      ? { src: project.demoVideo }
      : project.demoVideo;

  return (
    <div className="py-10 md:py-14">
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          {t("projectDetail.videoShowcase.heading")}
        </h3>
        <p className="text-gray-400 text-sm md:text-base">
          {t("projectDetail.videoShowcase.subtitle")}
        </p>
      </div>

      <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-700 bg-gray-900 shadow-lg">
        {video?.src ? (
          <video
            controls
            muted
            preload="metadata"
            poster={video.poster}
            className="w-full h-auto block"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ) : (
          <div className="aspect-video bg-gray-950 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-gray-600">
              <VideoOff className="w-6 h-6" />
              <span className="text-xs">{t("projectDetail.videoShowcase.comingSoon")}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
