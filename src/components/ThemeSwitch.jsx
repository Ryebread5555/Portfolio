import { useThemeContext } from "../hooks/useThemeContext";

const ThemeToggle = () => {

  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme} className="fixed top-4 right-4 z-50">
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle