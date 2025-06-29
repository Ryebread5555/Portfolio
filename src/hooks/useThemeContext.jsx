import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider ({ children }) {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => { 
    return setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};