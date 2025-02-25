import { Suspense } from "react";

// Components
import Spinner from "@/app/_components/Spinner";
import CabinsList from "@/app/_components/cabins/CabinsList";
import Filter from "@/app/_components/cabins/Filter";

export const metadata = {
  title: "Cabins",
};

export default function CabinsPage({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="pb-4 md:pb-8">
      <h1 className="text-4xl font-medium text-accent-400">
        Our Luxury Cabins
      </h1>
      <p className="mb-10 mt-5 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="mb-8 flex md:justify-end">
        <Filter />
      </div>
      <Suspense key={filter} fallback={<Spinner />}>
        <CabinsList filter={filter} />
      </Suspense>
    </div>
  );
}
