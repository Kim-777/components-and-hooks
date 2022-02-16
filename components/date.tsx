import React, { FC } from "react";
import { parseISO, format } from "date-fns";

type DateProps = {
  dateString: string;
};

const Date: FC<DateProps> = ({ dateString }) => {
  const date: Date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
