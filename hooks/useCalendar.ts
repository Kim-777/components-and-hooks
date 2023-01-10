import dayjs, { Dayjs } from "dayjs";
import weekDay from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import React from "react";

dayjs.extend(weekDay);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);

/**
 *
 * renderer를 사용해 ReactNode(component)를 반환 시, 감싸줄 wrapper는 해당 훅이 호출되는 곳에서 만들어주세요.
 */
export const useCalendar = ({
  defaultDate,
  renderer = (date) => date,
}: {
  defaultDate?: Dayjs;
  renderer?: (date: Dayjs) => React.ReactNode | Dayjs;
}) => {
  const [viewDate, setViewDate] = React.useState<Dayjs>(defaultDate || dayjs());
  const [calendar, setCalendar] = React.useState<any[]>();

  const createCalendar = React.useCallback(() => {
    const calendar = [];
    const startWeek = viewDate.startOf("month").week();
    const endWeek =
      viewDate.endOf("month").week() === 1
        ? 53
        : viewDate.endOf("month").week();

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        Array(7)
          .fill(0)
          .map((n, i) => {
            let current = viewDate
              .startOf("week")
              .week(week)
              .add(n + i, "day");
            if (viewDate.format("MM") === "12") {
              current = viewDate
                .startOf("week")
                .week(week - 52)
                .add(n + i, "day");
            }

            return renderer(current);
          })
      );
    }

    setCalendar(calendar);
  }, [viewDate]);

  React.useEffect(() => {
    createCalendar();
  }, [viewDate, createCalendar]);

  React.useEffect(() => {
    if (!!defaultDate) setViewDate(defaultDate);
  }, [defaultDate]);

  return {
    viewDate,
    calendar,
  };
};
