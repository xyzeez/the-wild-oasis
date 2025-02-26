import Image from "next/image";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

// Components
import DeleteReservation from "@/app/_components/account/DeleteReservation";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

const ReservationCard = ({ booking }) => {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins: { name, image },
  } = booking;

  const isEditable = !isPast(startDate);

  return (
    <div className="flex flex-col overflow-hidden border border-primary-800 text-primary-200 lg:flex-row">
      <div className="relative h-48 w-full border-b border-primary-800 lg:aspect-square lg:h-full lg:max-w-[35%] lg:border-r">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-grow flex-col p-4 lg:px-6 lg:py-3">
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-start lg:gap-0">
          <h3 className="text-lg font-semibold lg:text-xl">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-7 items-center self-start rounded-sm bg-yellow-800 px-3 text-xs font-bold uppercase text-yellow-200 lg:self-auto">
              past
            </span>
          ) : (
            <span className="flex h-7 items-center self-start rounded-sm bg-green-800 px-3 text-xs font-bold uppercase text-green-200 lg:self-auto">
              upcoming
            </span>
          )}
        </div>
        <p className="mt-2 text-base text-primary-300 lg:text-lg">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
        <div className="mt-4 flex flex-wrap items-baseline gap-3 lg:mt-auto lg:gap-5">
          <p className="text-lg font-semibold text-accent-400 lg:text-xl">
            ${totalPrice}
          </p>
          <p className="hidden text-primary-300 lg:block">&bull;</p>
          <p className="text-base text-primary-300 lg:text-lg">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="mt-2 w-full text-xs text-primary-400 lg:ml-auto lg:mt-0 lg:w-auto lg:text-sm">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>
      {isEditable && (
        <div className="flex flex-row border-t border-primary-800 *:w-1/2 lg:w-[100px] lg:flex-col lg:border-l lg:border-t-0 lg:*:w-auto">
          <Link
            href={`/account/reservations/edit/${id}`}
            className="group flex items-center justify-center gap-2 border-r border-primary-800 px-3 py-2 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900 lg:flex-grow lg:justify-start lg:border-b lg:border-r-0 lg:py-0"
          >
            <PencilSquareIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
            <span className="mt-1">Edit</span>
          </Link>
          <DeleteReservation bookingId={id} />
        </div>
      )}
    </div>
  );
};

export default ReservationCard;
