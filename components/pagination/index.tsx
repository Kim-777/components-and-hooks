import React from "react";
import styles from "./pagination.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type PaginationProps = {
  pageNow: number;
  onChangePage: (page: number) => void;
  itemsLength: number;
  paginationLength: number;
  itemsPerPage: number;
};

const Pagination = ({
  pageNow,
  onChangePage,
  itemsLength,
  paginationLength,
  itemsPerPage,
}: PaginationProps) => {
  // 토탈 페이지의 갯수를 먼저 구해줍니다.
  const totalPagesNumber = React.useMemo(
    () => Math.ceil(itemsLength / itemsPerPage),
    []
  );

  const startPage =
    Math.floor((pageNow - 1) / paginationLength) * paginationLength + 1;

  const endPage =
    startPage + paginationLength - 1 <= totalPagesNumber
      ? startPage + paginationLength - 1
      : totalPagesNumber;

  const btns = new Array(endPage - startPage + 1)
    .fill(null)
    .map((_, index) => startPage + index);

  return (
    <div>
      <li
        onClick={() => {
          if (pageNow >= 2) {
            onChangePage(pageNow - 1);
          }
        }}
      >
        이전 페이지
      </li>
      {btns.map((item) => (
        <li
          style={{ backgroundColor: pageNow === item ? "orange" : "yellow" }}
          key={item}
          onClick={() => {
            onChangePage(item);
          }}
        >
          {item}
        </li>
      ))}
      <li
        onClick={() => {
          if (pageNow < totalPagesNumber) {
            onChangePage(pageNow + 1);
          }
        }}
      >
        다음 페이지
      </li>
    </div>
  );
};

export default Pagination;
