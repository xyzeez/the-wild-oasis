"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Libraries
import cn from "@/src/lib/cn";
import formatCabinsFilter from "@/src/lib/formatCabinsFilter";

const Button = ({ filter, handleFilter, activeFilter, children }) => {
  return (
    <button
      className={cn(
        "px-3 py-2 text-sm text-primary-200 hover:bg-primary-700 md:px-5 md:py-3 md:text-base",
        filter === activeFilter && "bg-primary-700 text-primary-50"
      )}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
};

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = formatCabinsFilter(searchParams.get("capacity"));

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap border border-primary-800 *:grow *:basis-1/4">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        2&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
};

export default Filter;
