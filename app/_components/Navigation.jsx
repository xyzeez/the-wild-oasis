"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Libraries
import { cn } from "../_lib/cn";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="text-base text-primary-100 md:text-xl flex items-center">
      <button onClick={() => setOpenNav(!openNav)}>
        {!openNav ? (
          <Bars3Icon className="size-8 block z-20 md:hidden" />
        ) : (
          <XMarkIcon className="size-8 block z-20 md:hidden" />
        )}
      </button>
      <ul
        className={cn(
          "hidden text-primary-100 items-center z-20",
          openNav &&
            "flex flex-col gap-4 absolute bg-primary-950 px-4 py-10 right-4 top-[calc(100%+1rem)] left-4 rounded-md border-primary-900 border",
          "md:static md:gap-16 md:flex md:flex-row md:p-0 md:border-none md:bg-transparent"
        )}
      >
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
      <div
        onClick={() => setOpenNav(false)}
        className={cn(
          "absolute z-10 w-screen blur-sm hidden h-[calc(100vh-93px)]  top-full inset-x-0 opacity-80 bg-primary-950",
          openNav && "block",
          "md:hidden"
        )}
      />
    </nav>
  );
};

export default Navigation;
