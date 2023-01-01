import React from "react";
import { lightTheme, darkTheme, Theme } from "../constants/theme";

export const useDarkMode = () => {
  const [theme, setTheme] = React.useState<Theme>(lightTheme);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem(
      "theme",
      mode === lightTheme ? "light" : "dark"
    );
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      localTheme === "dark" ? setTheme(darkTheme) : setTheme(lightTheme);
    }
  }, []);

  return { theme, toggleTheme };
};
