import React from "react";
import { ImageOff } from "lucide-react";

export const BrowserFrame = ({ src, alt, label }) => (
  <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-900 shadow-lg">
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-800/80 border-b border-gray-700">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
      <span className="ml-2 px-2.5 py-0.5 bg-gray-900/60 rounded text-[11px] text-gray-500 truncate">
        {label}
      </span>
    </div>
    {src ? (
      <img src={src} alt={alt} className="w-full h-auto block" />
    ) : (
      <div className="aspect-video bg-gray-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <ImageOff className="w-6 h-6" />
          <span className="text-xs">Captura próximamente</span>
        </div>
      </div>
    )}
  </div>
);
