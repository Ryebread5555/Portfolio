import { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Projects from './Projects';
import Resume from './Resume';

const AppContainer = () => {
  // track current active page
  const [activePage, setActivePage] = useState('about');
  // detect if user is at the top of the page
  const [topOfPage, setTopOfPage] = useState(true);

  // detect scroll position for nav styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
      } else {
        setTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden scroll-smooth">
      {/* NavBar gets scroll states */}
      <NavBar
        topOfPage={topOfPage}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Page content container */}
      <div className="w-4/6 mx-auto">
        <section id="about" className="w-full mx-auto mb-1">
          <About setActivePage={setActivePage} />
        </section>

        <section id="projects" className="w-full mx-auto mt-16">
          <Projects />
        </section>

        <section id="resume" className="w-full mx-auto md:h-full">
          <Resume />
        </section>

        <section id="contact" className="w-5/6 mx-auto md:h-full">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default AppContainer;
