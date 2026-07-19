import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../components/Nav/Navbar";
import { Footer } from "../components/Footer";
import { DetailHero } from "../components/ProjectDetail/DetailHero";
import { MetricsBanner } from "../components/ProjectDetail/MetricsBanner";
import { FeatureShowcase } from "../components/ProjectDetail/FeatureShowcase";
import { DemoAccess } from "../components/ProjectDetail/DemoAccess";
import { TechSheet } from "../components/ProjectDetail/TechSheet";
import { getProjectBySlug } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="bg-gray-950 text-gray-100 min-h-screen">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-24 text-center">
          <h1 className="text-2xl font-bold mb-3">{t("projectDetail.notFoundTitle")}</h1>
          <Link to="/" className="text-green-400 hover:text-green-300 font-semibold">
            {t("projectDetail.backHome")}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <DetailHero project={project} />
      </div>

      <MetricsBanner project={project} />

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <FeatureShowcase project={project} />
        <DemoAccess project={project} />
        <TechSheet project={project} />
      </div>

      <Footer />
    </div>
  );
}
