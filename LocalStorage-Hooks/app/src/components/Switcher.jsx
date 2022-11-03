import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
    
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button className="themeButton" type="button" onClick={toggleTheme}>
            {theme === "dark" ? "🔲" : "🔳"}
        </button>
    )
}

export default ThemeSwitcher;