// Services
import { getCabins } from "@/src/services/cabinService";

// Components
import CabinCard from "./CabinCard";

// Libraries
import formatCabinsFilter from "@/src/lib/formatCabinsFilter";

const CabinsList = async ({ filter }) => {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let filterKeyword = formatCabinsFilter(filter);

  let filteredCabins;
  if (filterKeyword === "all") filteredCabins = cabins;
  if (filterKeyword === "small")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filterKeyword === "medium")
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filterKeyword === "large")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
};

export default CabinsList;
