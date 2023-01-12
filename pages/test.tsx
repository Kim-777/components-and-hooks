import dayjs from "dayjs";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import weekDay from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(weekDay);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);

const Test = () => {
  const nowAgo = dayjs("2022.1.1");
  const twentyMonthAgo = dayjs("2021.12.24");
  console.log("twentyMonthAgo ::: ", twentyMonthAgo.week());
  console.log("nowAgo :::: ", nowAgo.week());

  const now = dayjs("2023.1.1");
  const twentyMonth = dayjs("2022.12.31");
  console.log("twentyMonth ::: ", twentyMonth.week());
  console.log("now :::: ", now.week());
  return (
    <div>
      <div>날짜 테스트</div>
    </div>
  );
};

export default Test;
