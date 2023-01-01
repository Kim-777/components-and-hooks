import React, { FC, PropsWithChildren, useContext } from "react";
import { useDarkMode } from "../hooks/useDakTheme";

interface ThemeInterface {
  theme: {
    body: string;
    text: string;
    toggleBackground: string;
    mainColor: string;
    navBar: string;
  };
  toggleTheme: () => void;
}

interface ThemeProviderPros {
  children?: React.ReactNode;
}

const ThemeContext = React.createContext<ThemeInterface>({
  theme: {
    body: "",
    text: "",
    toggleBackground: "",
    mainColor: "",
    navBar: "",
  },
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderPros> = ({ children }) => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
