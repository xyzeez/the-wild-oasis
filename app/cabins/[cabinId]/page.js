import Image from "next/image";
import Link from "next/link";
import {
  EyeSlashIcon,
  MapPinIcon,
  UsersIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";

// Services
import { getCabin } from "@/app/_services/cabinService";

export async function generateMetadata({ params }) {
  const { name, description } = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name}`,
    description:
      description ||
      `Discover Cabin ${name} at The Wild Oasis - Your perfect getaway in the heart of the Dolomites.`,
  };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="mb-8 mt-0 text-primary-200">
      <Link
        href="/cabins"
        className="mb-8 inline-flex items-center gap-2 text-lg text-primary-300 transition-colors hover:text-primary-100 lg:mb-12"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        Back to cabins
      </Link>
      <div className="mb-10 grid grid-cols-1 gap-10 border border-primary-800 px-5 lg:mb-24 lg:grid-cols-[3fr_4fr] lg:px-10 lg:py-3">
        <div className="-translate-3 relative aspect-square w-full scale-110 md:aspect-video lg:aspect-square lg:-translate-x-3 lg:-translate-y-0 lg:scale-[1.15]">
          <Image
            src={image}
            fill
            alt={`Cabin ${name}`}
            className="rounded-lg object-cover object-center"
          />
        </div>
        <div>
          <h3 className="mb-0 w-full -translate-y-12 rounded-lg bg-primary-950 p-3 pb-1 text-center text-4xl font-black text-accent-100 md:p-5 md:pb-2 md:text-5xl lg:mb-5 lg:-translate-y-0 lg:translate-x-[-254px] lg:p-6 lg:text-left lg:text-7xl">
            Cabin {name}
          </h3>
          <p className="mb-5 text-lg text-primary-300 md:mb-10">
            {description}
          </p>
          <ul className="mb-5 flex flex-col gap-4 md:mb-7">
            <li className="flex items-center gap-3">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
