import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../hooks/useThemeContext';
import useMediaQuery from '../hooks/useMediaQuery';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar({ topOfPage, activePage, setActivePage }) {
  const tabs = ['About', 'Projects', 'Resume', 'Contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useThemeContext();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleNavClick = (tab) => {
    setActivePage(tab.toLowerCase());
    setIsMenuOpen(false);
  };

  // Add effect to handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && !isDesktop) {
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when mobile menu is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isDesktop]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
          topOfPage
            ? 'bg-gray-200'
            : 'bg-gray-200/90 backdrop-blur-sm'
        }`}
      >
        {/* Responsive navbar height - smaller on mobile */}
        <div className="w-full px-4 md:px-6 flex items-center justify-between h-20 md:h-32 lg:h-48">
          {/* Left: Logo - Responsive sizing */}
          <div className="text-3xl md:text-6xl lg:text-9xl xl:text-[10rem] font-bold text-gray-800 font-serif">RP</div>

          {/* Center: Tabs (desktop) OR Hamburger/Close Button (mobile) */}
          {isDesktop ? (
            <div className="flex-1 flex justify-center">
              <ul className="flex space-x-4 md:space-x-6 text-xl md:text-2xl font-bold font-montserrat tracking-wide">
                {tabs.map((tab) => (
                  <li key={tab}>
                    <a
                      href={`#${tab.toLowerCase()}`}
                      onClick={() => handleNavClick(tab)}
                      className={`px-2 md:px-3 py-2 transition-all duration-200 whitespace-nowrap text-gray-800 hover:text-blue-600 ${
                        activePage === tab.toLowerCase()
                          ? 'text-blue-600 underline'
                          : ''
                      }`}
                    >
                      {tab}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex-1 flex justify-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-4xl md:text-6xl lg:text-8xl p-2 md:p-4 text-gray-800 hover:text-blue-600 transition-colors z-50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          )}

          {/* Right: Theme Toggle - Responsive sizing */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="w-16 h-8 md:w-24 md:h-12 lg:w-32 lg:h-16 xl:w-40 xl:h-20 bg-gray-600 rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle theme"
            >
              {/* Sliding circle - Responsive sizing */}
              <div 
                className={`absolute top-1 md:top-1.5 lg:top-2 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  darkMode 
                    ? 'translate-x-8 md:translate-x-12 lg:translate-x-16 xl:translate-x-20' 
                    : 'translate-x-0.5 md:translate-x-1 lg:translate-x-1.5'
                }`}
              />
              {/* Icons - Responsive sizing */}
              <div className="absolute inset-0 flex items-center justify-between px-1 md:px-2 lg:px-3 xl:px-4">
                <span className="text-sm md:text-base lg:text-lg xl:text-2xl">🌞</span>
                <span className="text-sm md:text-base lg:text-lg xl:text-2xl">🌙</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu - Rendered outside nav for full viewport coverage */}
      {!isDesktop && isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-200/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-2xl font-medium text-gray-800 z-40">
          {/* Navigation Links */}
          {tabs.map((tab) => (
            <a
              key={tab}
              href={`#${tab.toLowerCase()}`}
              onClick={() => handleNavClick(tab)}
              className={`hover:text-blue-600 transition-colors ${
                activePage === tab.toLowerCase() ? 'text-blue-600 underline' : ''
              }`}
            >
              {tab}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default NavBar;