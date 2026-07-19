import React from "react";
import { FloatingBackground } from "../FloatingBackground";
import { HeroIntro } from "./HeroIntro";
import { HeroAvatar } from "./HeroAvatar";

export const HeroSection = () => (
  <div className="relative overflow-hidden bg-gray-950" style={{"padding":"20px"}}>
    <FloatingBackground />
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-950"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <HeroIntro />
        <HeroAvatar />
      </div>
    </div>
  </div>
);
