
import { createContext, useEffect, useState } from "react";

const themes = {
    dark: {
        backgroundColor: '#1d232a',
        color: "white",
    },

    light: {
        backgroundColor: "#f0f8fb",
        color: "black"
    }
}

export const ThemContext = createContext()
// eslint-disable-next-line react/prop-types
export const ThemProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark))
        setIsDark(!isDark)
    }
    useEffect(() => {
        const isDark = localStorage.getItem("isDark") === "true";
        setIsDark(isDark)
    }, [])
    return (
        <ThemContext.Provider value={[{ theme, isDark }, toggleTheme]} >
            {children}
        </ThemContext.Provider >
    )

}