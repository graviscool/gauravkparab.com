"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  setDark: (dark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDark(savedMode ? JSON.parse(savedMode) : true);

      // Add transition class to body for smooth theme changes
      document.body.classList.add("theme-transition");
    }
  }, []);

  const setDark = (dark: boolean) => {
    setIsDark(dark);
    localStorage.setItem("darkMode", JSON.stringify(dark));
  };

  const toggleTheme = () => setDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
