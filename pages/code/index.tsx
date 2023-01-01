import React from "react";
import classNames from "classnames/bind";
import styles from "./code.module.less";
import Link from "next/link";
import AntdMenu from "../../components/menu/AntdMenu";

const cx = classNames.bind(styles);

const CodesPage = () => {
  const [selectedCode, setSelectedCode] = React.useState("AntdMenu");

  return (
    <div className={cx({ wrapper: true })}>
      <AntdMenu />
    </div>
  );
};

export default CodesPage;
