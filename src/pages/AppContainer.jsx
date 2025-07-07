import { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Projects from './Projects';
import Resume from './Resume';

const AppContainer = () => {
  const [activePage, setActivePage] = useState('about');
  const [topOfPage, setTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setTopOfPage(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <NavBar
        topOfPage={topOfPage}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="w-4/6 mx-auto">
        <section id="about" className="w-full mx-auto mb-1 scroll-mt-20">
          <About setActivePage={setActivePage} />
        </section>

        <section id="projects" className="w-full mx-auto mt-16 scroll-mt-20">
          <Projects />
        </section>

        <section id="resume" className="w-full mx-auto md:h-full scroll-mt-20">
          <Resume />
        </section>

        <section id="contact" className="w-5/6 mx-auto md:h-full scroll-mt-20">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default AppContainer;