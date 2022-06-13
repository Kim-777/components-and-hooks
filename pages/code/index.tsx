import React from "react";
import classNames from "classnames/bind";
import styles from "./code.module.css";
import Link from "next/link";
import AntdMenu from "../../components/menu/AntdMenu";

const CodesPage = () => {
  return (
    <div>
      <nav>
        <Link href="/code/tables/react_table">
          <a>리액트 테이블</a>
        </Link>
        <br />
        <Link href="/code/tables/material_table">
          <a>MUI 테이블</a>
        </Link>
        <br />
        <Link href="/code/tables/antd_table">
          <a>어드민 페이지!</a>
        </Link>
      </nav>
      <AntdMenu />
    </div>
  );
};

export default CodesPage;
