import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../hooks/useThemeContext';
import useMediaQuery from '../hooks/useMediaQuery';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
          topOfPage && !isMenuOpen
            ? 'bg-transparent'
            : 'bg-gray-300'
        }`}
      >
        {/* Responsive navbar height - smaller on mobile */}
        <div className="w-full px-4 md:px-6 flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Left: Logo - Responsive sizing */}
          <div className="text-3xl font-bold text-gray-800 font-serif md:block hidden">
            <button
              onClick={() => window.location.href = '/'}
              className="hover:text-blue-600 transition-colors cursor-pointer"
              aria-label="Go to homepage"
            >
              RP
            </button>
          </div>

          {/* Center: Tabs (desktop) OR Hamburger/Close Button (mobile) */}
          {isDesktop ? (
            <div className="flex-1 flex justify-start ml-8">
              <ul className="flex items-center space-x-8 text-xl md:text-2xl font-bold font-montserrat tracking-wide">
                {tabs.map((tab, index) => (
                  <li key={tab} className="flex items-center">
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
                    {/* Add separator line between items (except after the last one) */}
                    {index < tabs.length - 1 && (
                      <div className="w-px h-6 bg-gray-400 mx-4"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex-1 flex justify-center">
              {/* Mobile: RP logo in center - positioned absolutely */}
              <div className="text-3xl font-bold text-gray-800 font-serif md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                  onClick={() => window.location.href = '/'}
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                  aria-label="Go to homepage"
                >
                  RP
                </button>
              </div>
            </div>
          )}

          {/* Right: Theme Toggle - Responsive sizing */}
          <div className="flex items-center flex-shrink-0 space-x-4">
            {/* Mobile: Hamburger button on the left */}
            {!isDesktop && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl md:text-3xl lg:text-4xl p-2 md:p-3 text-gray-800 hover:text-blue-600 transition-colors z-50 md:hidden absolute left-4"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            )}
            
            {/* Social Media Icons - Desktop Only */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/in/ryan-petty-23991b199/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl" />
              </a>
              <a
                href="https://github.com/Ryebread5555"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-2xl md:text-3xl lg:text-4xl" />
              </a>
            </div>
            
            <button
              onClick={toggleTheme}
              className="w-16 h-8 bg-gray-600 rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle theme"
            >
              {/* Sliding circle - Responsive sizing */}
              <div 
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  darkMode 
                    ? 'translate-x-8' 
                    : 'translate-x-0.5'
                }`}
              />
              {/* Icons - Responsive sizing */}
              <div className="absolute inset-0 flex items-center justify-between px-1">
                <span className="text-sm">🌞</span>
                <span className="text-sm">🌙</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu - Rendered outside nav for full viewport coverage */}
      {!isDesktop && (
        <div 
          className={`md:hidden fixed inset-0 bg-gray-200/95 backdrop-blur-sm flex flex-col items-start justify-start space-y-8 text-2xl font-medium text-gray-800 z-40 transition-transform duration-300 pt-32 pl-8 ${
            isMenuOpen 
              ? 'transform translate-x-0' 
              : 'transform -translate-x-full'
          }`}
        >
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
          
          {/* Social Media Icons - Mobile Only */}
          <div className="flex items-center space-x-6 pt-8">
            <a
              href="https://www.linkedin.com/in/ryan-petty-23991b199/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://github.com/Ryebread5555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-4xl" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;