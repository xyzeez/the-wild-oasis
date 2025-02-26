// Services
import { auth } from "@/src/services/auth";
import { getBookings } from "@/src/services/bookingService";

// Components
import ReservationList from "@/app/_components/account/ReservationList";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const initialBookings = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Your reservations
      </h2>
      <ReservationList initialBookings={initialBookings} />
    </div>
  );
}
