import { Briefcase, Zap, Target } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

export const HeroAvatar = () => {
  const { t } = useLanguage();

  return (
  <div className="relative -mt-8">
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>

      {/* Avatar Container */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Avatar Image */}
        {/* <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-700 opacity-80"></div>
          <Briefcase className="w-24 h-24 text-white relative z-10" />
        </div> */}
        <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-blue-500/20 overflow-hidden">
            <img
                src="/images/daniel.jpg"
                alt="Daniel"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
            />
            {/* Overlay sutil verde para mantener el estilo */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-emerald-700/30"></div>
        </div>

        {/* Floating Tech Icons */}
        <div
          className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/40 animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div
          className="absolute -bottom-3 -left-3 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/40 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          <Target className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Floating Labels */}
      <div
        className="absolute -left-3 top-1/4 bg-gray-800 border border-green-500/30 px-3 py-1.5 rounded-md shadow-lg animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="text-[10px] text-gray-400">{t("heroAvatar.specializationLabel")}</div>
        <div className="text-xs font-semibold text-green-400">
          Node.js + Python
        </div>
      </div>
      <div
        className="absolute -right-3 top-2/3 bg-gray-800 border border-emerald-500/30 px-3 py-1.5 rounded-md shadow-lg animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <div className="text-[10px] text-gray-400">{t("heroAvatar.deliveryLabel")}</div>
        <div className="text-xs font-semibold text-emerald-400">{t("heroAvatar.deliveryValue")}</div>
      </div>
    </div>
  </div>
  );
};
