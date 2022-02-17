import React, { FC } from "react";
import Layout from "../components/layout";
import dateStyles from "./date.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(dateStyles);

const Date: FC = () => {
  const isTwo = true;

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
    </Layout>
  );
};

export default Date;
