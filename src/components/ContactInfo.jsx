import { Phone, Mail } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

const PHONE_DISPLAY = "+57 324 542 9648";
const PHONE_TEL = "+573245429648";
const EMAIL = "josedanielhernandezcano31@gmail.com";

export const ContactInfo = ({ className = "" }) => {
  const { t } = useLanguage();

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={t("contact.phoneAriaLabel")}
        className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
      >
        <Phone className="w-3.5 h-3.5" />
        {PHONE_DISPLAY}
      </a>
      <a
        href={`mailto:${EMAIL}`}
        aria-label={t("contact.emailAriaLabel")}
        className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
      >
        <Mail className="w-3.5 h-3.5" />
        {EMAIL}
      </a>
    </div>
  );
};
