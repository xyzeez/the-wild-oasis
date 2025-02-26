"use client";

import Link from "next/link";
import { useOptimistic, startTransition } from "react";

// Services
import { deleteGuestBooking } from "@/src/services/actions";

// Components
import ReservationCard from "./ReservationCard";

const ReservationList = ({ initialBookings }) => {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    initialBookings,
    (state, bookingId) => state.filter((booking) => booking.id !== bookingId)
  );

  const handleDelete = async (bookingId) => {
    startTransition(() => {
      optimisticDelete(bookingId);
    });
    await deleteGuestBooking(bookingId);
  };

  if (optimisticBookings.length === 0) {
    return (
      <p className="text-lg text-primary-200">
        You have no reservations yet. Check out our
        <Link className="ml-1 text-accent-500 underline" href="/cabins">
          luxury cabins &rarr;
        </Link>
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap gap-6 *:shrink *:grow *:basis-60 lg:flex-col lg:*:basis-auto">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={() => handleDelete(booking.id)}
        />
      ))}
    </ul>
  );
};

export default ReservationList;
