import Link from "next/link";

// Components
import ReservationCard from "@/app/_components/ReservationCard";

export const metadata = {
  title: "Reservations",
};

export default function Page() {
  const bookings = [];

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Your reservations
      </h2>
      {bookings.length === 0 ? (
        <p className="text-lg text-primary-200">
          You have no reservations yet. Check out our
          <Link className="ml-1 text-accent-500 underline" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
