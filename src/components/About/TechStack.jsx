import { Zap } from "lucide-react";
import { TechCategory } from "./TechCategory";
import { useLanguage } from "../../i18n/useLanguage";

export const AboutTechStack = ({ compact = false }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <h3
        className={`font-bold flex items-center gap-3 ${
          compact ? "text-xl mb-4" : "text-2xl mb-6"
        }`}
      >
        <Zap className="w-5 h-5 text-green-400" />
        {t("about.techStack.title")}
      </h3>

      <div className="space-y-3">
        <TechCategory compact={compact} title={t("about.techStack.backendFrameworks")} techs={["Python", "FastAPI", "Django"]} />
        <TechCategory compact={compact} title={t("about.techStack.databases")} techs={["PostgreSQL", "Redis", "MongoDB"]} />
        <TechCategory compact={compact} title={t("about.techStack.devopsCloud")} techs={["Docker", "AWS", "CI/CD", "Git"]} />
        <TechCategory compact={compact} title={t("about.techStack.aiMl")} techs={["TensorFlow", "OpenAI", "LangChain", "Scikit-learn"]} />
      </div>
    </div>
  );
};
