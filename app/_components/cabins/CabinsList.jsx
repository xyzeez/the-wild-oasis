// Services
import { getCabins } from "@/app/_services/cabinService";

// Components
import CabinCard from "./CabinCard";

const CabinsList = async () => {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
};

export default CabinsList;
