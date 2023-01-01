import React from "react";
import classNames from "classnames/bind";
import styles from "./kanban.module.less";

const cx = classNames.bind(styles);

const FirstItem = () => {
  return (
    <div
      onDragStart={(e) => {
        console.log("dragStart!!!");
      }}
      onDrag={(e) => {
        console.log("drag!!");
      }}
      draggable
      className={cx({ first_item: true })}
    >
      🦊
    </div>
  );
};

export default FirstItem;
