import React from "react";
import styles from "./showBox.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ShowBox = () => {
  return (
    <div className={cx({ wrapper: true })}>
      <div className={cx({ text: true })}>애니메이션 이력서 보러가기!</div>
      <div className={cx({ itemBox: true })}>
        <div className={cx({ triangle: true })} />
        <div className={cx({ rectangle: true })} />
        <div className={cx({ circle: true })} />
      </div>
    </div>
  );
};

export default ShowBox;
