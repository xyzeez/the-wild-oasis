"use client";

import { usePathname } from "next/navigation";

// Components
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

// Libraries
import { cn } from "@/app/_lib/cn";

const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={cn("sticky top-0 z-50 p-4 md:px-8 md:py-5", {
        "bg-primary-950/80 backdrop-blur-sm": pathname !== "/",
      })}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
