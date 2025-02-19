import Link from "next/link";
import Image from "next/image";
import { UsersIcon } from "@heroicons/react/24/solid";

const CabinCard = ({ cabin }) => {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col border border-primary-800 md:flex-row">
      <div className="relative h-48 w-full border-b border-primary-800 md:aspect-[9/16] md:h-full md:max-w-[50%] md:border-r">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-grow flex-col text-primary-200">
        <div className="flex-1 bg-primary-950 px-7 pb-4 pt-5">
          <h3 className="mb-3 text-2xl font-semibold text-accent-500">
            Cabin {name}
          </h3>
          <div className="mb-2 flex items-center gap-x-2">
            <UsersIcon className="h-5 w-5 flex-shrink-0 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>
          <p className="flex flex-row flex-wrap items-baseline justify-end gap-x-3">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="font-semibold text-primary-600 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>
        <div className="border-t border-t-primary-800 bg-primary-950 text-center md:text-right">
          <Link
            href={`/cabins/${id}`}
            className="inline-block w-full border-primary-800 px-6 py-4 transition-all hover:bg-accent-600 hover:text-primary-900 md:border-l"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CabinCard;
