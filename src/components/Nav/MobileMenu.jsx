import { NavLinks } from "./NavLinks";
import { LanguageToggle } from "./LanguageToggle";

export const MobileMenu = ({ links }) => (
  <div className="md:hidden py-4 space-y-4 animate-fade-in border-t border-emerald-700/30 bg-gray-900/95 backdrop-blur-lg">
    <NavLinks links={links} className="block text-lg" />
    <LanguageToggle />
  </div>
);
