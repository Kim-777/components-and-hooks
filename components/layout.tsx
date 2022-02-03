import React, { FC } from "react";
import style from "./layout.module.css";

const Layout: FC = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Layout;
