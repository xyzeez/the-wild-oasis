"use client";

import Link from "next/link";

// Context
import { useReservation } from "@/src/context/ReservationContext";

const ReservationForm = ({ cabin, user }) => {
  const { range } = useReservation();
  const { maxCapacity } = cabin;

  return (
    <div className="">
      <div className="flex items-center justify-between bg-primary-800 px-3 py-2 text-primary-300 lg:px-16">
        <p className="flex flex-wrap gap-x-2 gap-y-1 text-sm lg:text-lg">
          Logged in as:
          <Link href="/account" className="italic text-accent-400 underline">
            {user.email}
          </Link>
        </p>
      </div>
      <form className="flex flex-col gap-5 bg-primary-900 px-5 py-8 text-sm lg:px-16 lg:py-10 lg:text-lg">
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm lg:px-5 lg:py-3"
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
            id="observations"
            className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm lg:px-5 lg:py-3"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>
        <div className="flex items-center justify-end gap-6">
          <p className="text-sm text-primary-300 lg:text-base">
            Start by selecting dates
          </p>
          <button className="bg-accent-500 px-3 py-2 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 lg:px-8 lg:py-4">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
