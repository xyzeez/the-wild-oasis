// Config
import { cabinsFilterKeys } from "@/src/config/cabins";

const formatCabinsFilter = (filter) => {
  return cabinsFilterKeys.find((key) => key === filter) || "all";
};

export default formatCabinsFilter;
