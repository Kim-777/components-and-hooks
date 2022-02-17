import React, { FC } from "react";
import Layout from "../components/layout";
import dateStyles from "./date.module.css";
import classNames from "classnames/bind";
import { format, compareAsc, formatDistance } from "date-fns";
import parseISO from "date-fns/parseISO";
import { ko } from "date-fns/locale";

const cx = classNames.bind(dateStyles);

const DatePage: FC<any> = () => {
  const isTwo = true;
  const date: Date = parseISO("1111");
  // format(new Date(), "MM/dd/yyyy");
  // const today = new Date();

  return (
    <Layout>
      <div
        className={cx({
          dateTwoOption: isTwo,
          dateWrapper: true,
        })}
      >
        Date
      </div>
      <div>{date.toDateString()}</div>
      <div>{format(new Date(), "MM/dd/yyyy")}</div>
      <div>
        {formatDistance(new Date(), new Date(2022, 0, 1), { locale: ko })}
      </div>
    </Layout>
  );
};

export default DatePage;
