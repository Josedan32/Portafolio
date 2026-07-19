// components/Navbar.jsx
import React, { useState } from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { LanguageToggle } from "./LanguageToggle";
import { MenuButton } from "./MenuButton";
import { MobileMenu } from "./MobileMenu";
import { links } from "../../data/links";


export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-emerald-700/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            <NavLinks links={links} />
            <LanguageToggle />
          </div>
          <MenuButton
            open={mobileMenuOpen}
            toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
        {mobileMenuOpen && <MobileMenu links={links} />}
      </div>
    </nav>
  );
};
