import { useContext } from "react";
import ThemeSwitcher from "./components/Switcher";
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App color-${theme}`}>
      <header>
        <ThemeSwitcher />
      </header>  
    </div>
  )
}

export default App
