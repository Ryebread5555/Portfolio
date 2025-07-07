import AppContainer from './pages/AppContainer';
import { ThemeProvider } from './hooks/useThemeContext';

function RootApp() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}

export default RootApp;
