import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

//1 creating the provider
const DarkModeContext = createContext()


export default function DarkModeProvider({ children }) {
    const [isDark, setIsDark] = useLocalStorageState(false, "isDark")
    function toggleDarkMode() {
        setIsDark((dark) => !dark)
    }
    useEffect(() => {
        if (isDark) {

            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light")

        }
        else {
            document.documentElement.classList.remove("dark")

            document.documentElement.classList.add("light")


        }
    }, [isDark])
    return (
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) throw new Error("context used outside provider")
    return context
}


export { useDarkMode, DarkModeProvider }

