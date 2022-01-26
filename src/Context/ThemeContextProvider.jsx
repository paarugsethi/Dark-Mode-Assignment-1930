import { createContext, useState } from "react";


export const ThemeContext = createContext();

const themes = ["light", "dark"];

function ThemeContextProvider ({children}) {
    const [theme, setTheme] = useState("light");
    const themeData = themes;

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const isDarkMode = () => {
        if (theme === "dark"){
            return true;
        }
        else{
            return false;
        }
    }
    
    const value = [{theme, themeData}, toggleTheme, isDarkMode];

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;