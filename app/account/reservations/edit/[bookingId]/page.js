import { eachDayOfInterval, isSameDay } from "date-fns";

// Services
import { getCabin } from "@/src/services/cabinService";
import {
  getBooking,
  getBookedDatesByCabinId,
} from "@/src/services/bookingService";
import { getSettings } from "@/src/services/settingsService";

// Context
import { ReservationProvider } from "@/src/context/ReservationContext";

// Components
import DateSelector from "@/app/_components/cabins/DateSelector";
import EditReservationForm from "@/app/_components/account/EditReservationForm";

export default async function Page({ params }) {
  const { bookingId } = params;
  const booking = await getBooking(bookingId);
  const { cabinID, startDate, endDate } = booking;
  const cabin = await getCabin(cabinID);
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabinID),
  ]);

  const currentBookingDates = eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  });

  const filteredBookedDates = bookedDates.filter(
    (date) =>
      !currentBookingDates.some((bookingDate) => isSameDay(date, bookingDate))
  );

  const initialRange = {
    from: new Date(startDate),
    to: new Date(endDate),
  };

  return (
    <div className="w-full">
      <h2 className="mb-4 text-xl font-semibold text-accent-400 sm:mb-7 sm:text-2xl">
        Edit Reservation #{bookingId}
      </h2>
      <div className="grid gap-6 xl:grid-cols-2">
        <ReservationProvider initialRange={initialRange}>
          <DateSelector
            settings={settings}
            cabin={cabin}
            bookedDates={filteredBookedDates}
          />
          <EditReservationForm booking={booking} cabin={cabin} />
        </ReservationProvider>
      </div>
    </div>
  );
}
