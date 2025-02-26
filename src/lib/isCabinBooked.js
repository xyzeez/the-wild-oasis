import { isWithinInterval } from "date-fns";

const isCabinBooked = (range, datesArr) => {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
};

export default isCabinBooked;
