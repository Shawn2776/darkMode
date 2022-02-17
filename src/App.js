import './App.css';
import useLocalStorage from 'use-local-storage';
import Square from './Square';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newtheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newtheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <span>Dark Mode</span>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <Square />
    </div>
  );
}

export default App;
