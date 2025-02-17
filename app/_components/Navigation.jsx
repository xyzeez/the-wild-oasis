"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Libraries
import { cn } from "../_lib/cn";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="flex items-center text-base text-primary-100 md:text-xl">
      <button onClick={() => setOpenNav(!openNav)}>
        {!openNav ? (
          <Bars3Icon className="block size-8 md:hidden" />
        ) : (
          <XMarkIcon className="block size-8 md:hidden" />
        )}
      </button>
      <ul
        className={cn(
          "z-20 hidden items-center text-primary-100",
          openNav &&
            "absolute left-4 right-4 top-[calc(100%+1rem)] flex flex-col gap-4 rounded-md border border-primary-900 bg-primary-950 px-4 py-10",
          "md:static md:flex md:flex-row md:gap-16 md:border-none md:bg-transparent md:p-0"
        )}
      >
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
