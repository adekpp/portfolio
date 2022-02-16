import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [mode, setMode] = useState(localStorage.getItem('mode'))
    const [btn, setBtn] = useState(localStorage.getItem('btn'))

    
    const changeMode = (mode) => {
        
        setMode(mode)
    }

    const changeBtn = (btn) => {
        
        setBtn(btn)
        
    }

    useEffect(() => {
        localStorage.setItem('mode', mode);
        localStorage.setItem('btn', btn);
      }, [mode, btn]);

    return(
        
        <ThemeContext.Provider value={{ mode, changeMode, btn, changeBtn}}>
            {children}
        </ThemeContext.Provider>
    )
}