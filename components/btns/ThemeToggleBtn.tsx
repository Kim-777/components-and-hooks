import React from "react";
import { lightTheme } from "../../constants/theme";
import { useTheme } from "../../contexts/ThemeProvider";
import classNames from "classnames/bind";
import styles from "./Btns.module.less";

const cx = classNames.bind(styles);

const ThemeToggleBtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={cx({ themeBtnWrapper: true })}>
      <figure>
        <span role="img" aria-label="toggle-btn-img">
          {theme === lightTheme ? "🌞" : "🌜"}
        </span>
      </figure>
      <p>{theme === lightTheme ? "light" : "dark"}</p>
    </button>
  );
};

export default ThemeToggleBtn;
