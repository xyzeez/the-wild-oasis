"use client";

import { differenceInDays } from "date-fns";

// Context
import { useReservation } from "@/src/context/ReservationContext";

// Services
import { updateGuestBooking } from "@/src/services/actions";

// Components
import SubmitFormButton from "../SubmitFormButton";

export default function EditReservationForm({ booking, cabin }) {
  const { id: bookingID, numGuests, observations } = booking;
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id: cabinID } = cabin;

  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinID,
  };

  const updateBooking = updateGuestBooking.bind(null, bookingID, bookingData);

  return (
    <form
      action={async (formData) => {
        await updateBooking(formData);
        resetRange();
      }}
      className="flex flex-col gap-6 rounded-lg bg-primary-900 px-5 py-8 text-sm text-purple-200 md:px-12 md:text-lg"
    >
      <input type="hidden" value={bookingID} name="bookingID" />
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          defaultValue={numGuests}
          className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm md:px-5 md:py-3"
          required
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          defaultValue={observations}
          className="min-h-[100px] w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm md:px-5 md:py-3"
        />
      </div>
      <div className="flex items-center justify-end gap-6">
        {startDate && endDate ? (
          <SubmitFormButton buttonLabel="Update reservation" />
        ) : (
          <p className="text-sm text-primary-300 lg:text-base">
            Start by selecting dates
          </p>
        )}
      </div>
    </form>
  );
}
