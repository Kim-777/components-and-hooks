import Link from "next/link";
import React, { FC } from "react";

export type Custom404Props = {
  error?: string;
};

const Custom404: FC<Custom404Props> = () => {
  return (
    <>
      <h1>404 - Page가 없네용~ </h1>
      <Link href={"/"}>
        <a>홈으로 돌아가기</a>
      </Link>
    </>
  );
};

export default Custom404;
