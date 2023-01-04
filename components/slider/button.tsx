import React from "react";
import styles from "./slider.module.less";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  direction: "prev" | "next";
  onClick: () => void;
};

const SlideButton = ({ direction, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cx({
        "btn-slide-control": true,
        "btn-prev": direction === "prev",
        "btn-next": direction === "next",
      })}
      style={{ width: "30px", height: "30px" }}
    >
      {direction}
    </button>
  );
};

export default SlideButton;
