import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  const [btn, setBtn] = useState(localStorage.getItem("btn"));
  const [isMobile, setIsMobile] = useState(false);

  const changeMode = (mode) => {
    setMode(mode);
  };

  const changeBtn = (btn) => {
    setBtn(btn);
  };
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode);
    localStorage.setItem("btn", btn);
  }, [mode, btn]);

  return (
    <ThemeContext.Provider
      value={{ mode, changeMode, btn, changeBtn, isMobile }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
