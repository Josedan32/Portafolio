import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../i18n/useLanguage';

export const NavLinks = ({ links = [], className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();
  const [activeLink, setActiveLink] = useState('');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const linksRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .filter(link => link.href.startsWith('#'))
        .map(link => document.getElementById(link.href.slice(1)))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveLink('#' + section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  useEffect(() => {
    // Actualizar posición del indicador
    const activeElement = linksRef.current[activeLink];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`
      });
    }
  }, [activeLink]);

  const handleClick = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href } });
      } else {
        const id = href.replace('#', '');
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
      }
    } else {
      navigate(href);
    }
  };

  return (
    <div className="relative flex gap-8">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          ref={(el) => (linksRef.current[href] = el)}
          onClick={(e) => handleClick(e, href)}
          className={`
            text-gray-300 hover:text-green-400 transition-colors cursor-pointer relative
            ${activeLink === href ? 'text-green-400' : ''}
            ${className}
          `}
        >
          {label[language]}
        </a>
      ))}
      <div 
        className="nav-indicator"
        style={indicatorStyle}
      />
    </div>
  );
};