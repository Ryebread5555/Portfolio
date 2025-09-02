import { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Projects from './Projects';
import Resume from './Resume';
import ShootingStars from '../components/ShootingStars';
import { useThemeContext } from '../hooks/useThemeContext';

const AppContainer = () => {
  const [activePage, setActivePage] = useState('about');
  const [topOfPage, setTopOfPage] = useState(true);
  const { darkMode } = useThemeContext();

  // Disable browser scroll restoration to prevent scroll position memory
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setTopOfPage(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`overflow-x-hidden scroll-smooth transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Shooting Stars Background */}
      <ShootingStars />
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <NavBar
          topOfPage={topOfPage}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <div className="w-full mx-auto px-4 md:px-8">
          <section id="about" className="w-full mx-auto mb-1 scroll-mt-20">
            <About setActivePage={setActivePage} />
          </section>

          <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
            <section id="projects" className="w-full mx-auto mt-16 scroll-mt-20">
              <Projects />
            </section>

            <section id="resume" className="w-full mx-auto md:h-full scroll-mt-20">
              <Resume />
            </section>

            <section id="contact" className="w-full mx-auto md:h-full scroll-mt-20">
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;