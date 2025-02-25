// Services
import { getSettings } from "@/src/services/settingsService";
import { getBookedDatesByCabinId } from "@/src/services/bookingService";

// Components
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    // getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid min-h-[400px] grid-cols-1 gap-4 border border-primary-800 md:gap-0 xl:grid-cols-2">
      <DateSelector
        settings={settings}
        // bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
