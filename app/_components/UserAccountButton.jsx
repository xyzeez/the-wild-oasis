"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

// Libraries
import cn from "@/src/lib/cn";

function UserAccountButton() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <>
      {session ? (
        <Link
          href="/account"
          className={cn(
            "flex items-center gap-2 transition-colors hover:text-accent-400",
            {
              "text-accent-400": pathname.startsWith("/account"),
            }
          )}
        >
          <span>Guest area</span>
          {session.user.image && (
            <div className="relative size-8 overflow-hidden rounded-full border-2 border-current">
              <img
                src={session.user.image}
                alt={session.user.name || "User profile"}
                fill
                className="object-cover"
              />
            </div>
          )}
        </Link>
      ) : (
        <Link
          href="/login"
          className={cn(
            "rounded-md bg-accent-500 px-4 py-2 font-semibold text-primary-800 transition-all hover:bg-accent-600",
            {
              "text-accent-400": pathname.startsWith("/login"),
            }
          )}
        >
          Login
        </Link>
      )}
    </>
  );
}

export default UserAccountButton;
