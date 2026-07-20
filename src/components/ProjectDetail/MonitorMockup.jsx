import React from "react";
import { ImageOff } from "lucide-react";

export const MonitorMockup = ({ src, alt, className = "" }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="w-full rounded-xl border-[6px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden">
      <div className="aspect-video bg-gray-950 flex items-center justify-center overflow-hidden">
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-600">
            <ImageOff className="w-6 h-6" />
            <span className="text-xs">Captura próximamente</span>
          </div>
        )}
      </div>
    </div>
    <div className="w-3 h-6 bg-gray-800" />
    <div className="w-20 h-2 rounded-full bg-gray-800" />
  </div>
);
