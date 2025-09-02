import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Default to light mode if no theme is saved
    if (!savedTheme) {
      return false; // false = light mode
    }
    return savedTheme === 'dark';
  });

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Function to update favicon based on theme
  const updateFavicon = (isDark) => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = isDark ? '/favicon-dark.ico' : '/favicon-light.ico';
    } else {
      // Create favicon link if it doesn't exist
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = isDark ? '/favicon-dark.ico' : '/favicon-light.ico';
      document.head.appendChild(link);
    }
  };

  // Apply dark mode class to document and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      updateFavicon(true); // Update favicon for dark mode
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      updateFavicon(false); // Update favicon for light mode
    }
  }, [darkMode]);

  // Ensure theme is applied on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setDarkMode(isDark);
      updateFavicon(isDark); // Set initial favicon based on saved theme
    } else {
      updateFavicon(false); // Default to light favicon
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};