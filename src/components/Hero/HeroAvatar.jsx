import { Briefcase } from "lucide-react";

export const HeroAvatar = () => {
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
        <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
                src="/images/daniel.jpg"
                alt="Daniel"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
            />
        </div>
      </div>
    </div>
  </div>
  );
};
