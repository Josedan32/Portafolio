import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ContactInfo } from './ContactInfo';
import { useLanguage } from '../i18n/useLanguage';

export const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Josedan32', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/jose-daniel-hernandez-cano-734b86207', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:josedanielhernandezcano31@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative border-t border-gray-800 bg-gray-950/90 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-6">
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-3 bg-gray-800/60 border border-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <ContactInfo className="justify-center text-sm text-gray-400" />

        <div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Daniel</span> {t("footer.copyrightSuffix")}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            {t("footer.tagline")}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </footer>
  );
};
