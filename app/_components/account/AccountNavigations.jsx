"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

// Libraries
import cn from "@/src/lib/cn";

// Components
import {
  DesktopSignOutButton,
  MobileSignOutButton,
} from "@/app/_components/SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

export const MobileNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="border-t border-primary-900 bg-primary-950">
      <ul className="flex flex-row *:flex *:flex-grow *:items-center *:justify-center *:py-3 *:transition-colors">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={cn("hover:bg-primary-900 hover:text-primary-100", {
              "bg-primary-900 text-primary-100": pathname === link.href,
            })}
          >
            <Link href={link.href}>{link.icon}</Link>
          </li>
        ))}
        <li className="text-red-600">
          <MobileSignOutButton />
        </li>
      </ul>
    </nav>
  );
};

export const SideNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="h-full border-r border-primary-900">
      <ul className="flex h-full flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={cn(
                "flex items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100",
                {
                  "bg-primary-900 text-primary-100": pathname === link.href,
                }
              )}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
        <li className="mt-auto">
          <DesktopSignOutButton />
        </li>
      </ul>
    </nav>
  );
};
