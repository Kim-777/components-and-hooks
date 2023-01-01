import React from "react";
import classNames from "classnames/bind";
import styles from "./kanban.module.less";
import FirstItem from "components/kanban/FirstItem";

const cx = classNames.bind(styles);

const Kanban = () => {
  return (
    <div className={cx({ wrapper: true })}>
      <div
        onDragEnter={(e) => {
          console.log(e.dataTransfer);
          e.preventDefault();
          console.log("드래그 요소가 첫번째 박스에 들어왔어요!");
        }}
        onDragOver={(e) => {
          e.preventDefault();

          // console.log("드래그 요소가 첫번째 박스에 오버했어요!");
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          console.log(e.dataTransfer);
          console.log("드래그 요소가 첫번째 박스에서 나갔습니다!");
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log(e.dataTransfer);
          console.log("드래그 요소가 첫번째 박스에서 드롭됐습니다!");
        }}
        className={cx({ container: true })}
      >
        <button
          className={cx({ draggable: true, item: true, button: true })}
          draggable="true"
          onDragStart={(e) => {
            console.log(e.dataTransfer);
            console.log("드래그를 시작");
          }}
          onDragEnd={(e) => {
            console.log(e.dataTransfer);
            console.log("드래그 끝!");
          }}
          onDrag={(e) => {
            // console.log("드래그하면 발생하는 이벤트");
          }}
        >
          ⚽️
        </button>
      </div>
      <div
        onDragEnter={(e) => {
          e.preventDefault();
          console.log(e.dataTransfer);
          console.log("드래그 요소가 두번째 박스에 들어왔어요!");
        }}
        onDragOver={(e) => {
          e.preventDefault();
          // console.log("드래그 요소가 두번째 박스에 오버했어요!");
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          console.log(e.dataTransfer);
          console.log("드래그 요소가 두번째 박스에 나갔습니다!");
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log(e.dataTransfer);
          console.log("드래그 요소가 두번째 박스에서 드롭됐습니다!");
        }}
        className={cx({ container2: true })}
      ></div>
    </div>
  );
};

export default Kanban;
