"use client";

import { isWithinInterval } from "date-fns";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";

// Context
import { useReservation } from "@/src/context/ReservationContext";

const isAlreadyBooked = (range, datesArr) => {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
};

const DateSelector = ({ settings, cabin, bookedDates }) => {
  const { range, setRange, resetRange } = useReservation();
  const defaultClassNames = getDefaultClassNames();

  //TODO: CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <div className="pt-4 md:pr-4 md:pt-8">
        <DayPicker
          classNames={{
            months: "flex flex-col md:flex-row gap-4",
            month: "w-full",
            month_grid: "w-full",
            day_button: "w-full",
            selected: "bg-accent-500 text-white",
            range_start: "bg-accent-500 rounded-l-full",
            range_middle: "bg-accent-500",
            range_end: "bg-accent-500 rounded-r-full",
            month_caption: `${defaultClassNames.month_caption} pl-2 md:pl-4`,
          }}
          mode="range"
          min={minBookingLength + 1}
          max={maxBookingLength}
          startMonth={new Date()}
          endMonth={new Date(new Date().getFullYear(), 5 * 12)}
          captionLayout="dropdown"
          numberOfMonths={2}
          disabled={{ before: new Date() }}
        />
      </div>
      <div className="flex h-auto flex-col items-center justify-between bg-accent-500 p-4 text-primary-800 md:h-[72px] md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-baseline md:gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-xl md:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="text-md font-semibold text-primary-700 line-through md:text-base">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl md:text-2xl">${regularPrice}</span>
            )}
            <span className="text-md md:text-base">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-xl md:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
                <span className="md:text-md text-base font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-xl font-semibold md:text-2xl">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>
        {range.from || range.to ? (
          <button
            className="text-md mt-4 border border-primary-800 px-4 py-2 font-semibold md:mt-0"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default DateSelector;
