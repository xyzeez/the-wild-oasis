import Link from "next/link";

// Services
import { auth } from "@/src/services/auth";
import { getBookings } from "@/src/services/bookingService";

// Components
import ReservationCard from "@/app/_components/account/ReservationCard";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

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
        <ul className="flex flex-wrap gap-6 *:shrink *:grow *:basis-60 lg:flex-col lg:*:basis-auto">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
