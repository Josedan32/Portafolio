import React from "react";
import { ImageOff } from "lucide-react";

export const PhoneMockup = ({ src, alt, className = "" }) => (
  <div
    className={`w-28 sm:w-32 rounded-[1.75rem] border-[6px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden ${className}`}
  >
    <div className="aspect-[9/19] bg-gray-950 flex items-center justify-center overflow-hidden">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="flex flex-col items-center gap-1.5 text-gray-600 px-2 text-center">
          <ImageOff className="w-5 h-5" />
          <span className="text-[10px] leading-tight">Captura próximamente</span>
        </div>
      )}
    </div>
  </div>
);
