import AppContainer from './pages/AppContainer';
import ThemeContext from './hooks/useThemeContext';

function App() {
  return (
    <ThemeContext>
        <AppContainer />
    </ThemeContext>
  );
}

export default App;