import React, { useState } from 'react';
import { useThemeContext } from '../hooks/useThemeContext';
import useMediaQuery from '../hooks/useMediaQuery';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar({ handlePageChange }) {
  const tabs = ['About', 'Projects', 'Resume', 'Contact'];
  const [activeTab, setActiveTab] = useState('About');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useThemeContext();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    handlePageChange(tab);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition duration-300 border-b ${
        darkMode
          ? 'bg-black/60 text-white border-white/20'
          : 'bg-white/60 text-gray-900 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-28 relative">
        {/* Left: Logo */}
        <div className="text-[72px] font-bold font-montserrat">RP</div>

        {/* Center: Tabs (desktop) OR Hamburger (mobile) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {isDesktop ? (
            <ul className="flex space-x-[6rem] text-[32px] font-bold font-montserrat tracking-wide">
              {tabs.map((tab) => (
                <li key={tab}>
                  <a
                    href={`#${tab.toLowerCase()}`}
                    onClick={() => handleNavClick(tab)}
                    className={`px-4 py-2 transition-all duration-200 ${
                      activeTab === tab
                        ? 'text-blue-600'
                        : 'hover:text-blue-500'
                    }`}
                  >
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-6xl p-5 rounded-full hover:bg-white/30 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>

        {/* Right: Theme Toggle with Glow and Icons */}
        <div className="flex items-center pr-2 sm:pr-4 md:pr-6 lg:pr-8">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleTheme}
            />
            {/* Switch Track with Glow */}
            <div className="w-16 h-9 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300 shadow-[0_0_8px_rgba(0,0,0,0.3)] peer-checked:shadow-[0_0_10px_rgba(59,130,246,0.6)] flex items-center justify-center px-1">
              <span className="text-xl">
                {darkMode ? '🌙' : '🌞'}
              </span>
            </div>
            {/* Sliding Circle */}
            <div className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-7 shadow-md" />
          </label>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {!isDesktop && isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 flex flex-col items-center justify-center space-y-10 text-[32px] font-bold font-montserrat ${
            darkMode ? 'bg-black/90 text-white' : 'bg-white/95 text-gray-900'
          }`}
        >
          {tabs.map((tab) => (
            <a
              key={tab}
              href={`#${tab.toLowerCase()}`}
              onClick={() => handleNavClick(tab)}
              className={`hover:text-blue-500 ${
                activeTab === tab ? 'text-blue-600' : ''
              }`}
            >
              {tab}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
