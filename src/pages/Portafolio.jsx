import { Navbar } from '../components/Nav/Navbar';
import { HeroSection } from '../components/Hero/HeroSection';
import { Footer } from '../components/Footer';
import { AboutSection } from '../components/About/AboutSection';
import { ProjectsSection } from '../components/Projects/ProjectsSection';
import { ExperienceSection } from '../components/Experience/ExperienceSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Portafolio() {
  const location = useLocation();
  const visibleElements = useScrollAnimation();

  useEffect(() => {
    visibleElements.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add('visible');
      }
    });
  }, [visibleElements]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const hash = location.state.scrollTo;
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div id="aboutMe" data-animate className="animate-section">
        <AboutSection />
      </div>
      
      <div id="proyectos" data-animate className="animate-section">
        <ProjectsSection />
      </div>

      <div id="experiencia" data-animate className="animate-section">
        <ExperienceSection />
      </div>

      <Footer />
    </div>
  );
}