import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
    
    const { theme, toogleTheme } = useContext(ThemeContext)

    return (
        <button className="themeButton" type="button" onClick={toogleTheme}>
            {theme === "dark" ? "🔲" : "🔳"}
        </button>
    )
}

export default ThemeSwitcher;