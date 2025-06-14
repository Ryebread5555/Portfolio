import { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Projects from './Projects';
import Resume from './Resume';

const AppContainer = () => {
  const [activePage, setActivePage] = useState('about');

  return (
<div className="overflow-x-hidden">
  <NavBar handlePageChange={setActivePage} />
  <About />
  <Projects />
  <Resume />
  <Contact />
</div>

  );
}


export default AppContainer;