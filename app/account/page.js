// Services
import { auth } from "@/src/services/auth";
import Link from "next/link";
import { UserCircleIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { formatDistanceToNow } from "date-fns";

export const metadata = {
  title: "Account Dashboard",
};

export default async function GuestPage() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0];
  const fullName = session?.user?.name;
  const email = session?.user?.email;
  const lastLogin = formatDistanceToNow(
    new Date(session?.user?.lastLogin || new Date()),
    { addSuffix: true }
  );

  return (
    <div className="space-y-4 text-primary-200 md:space-y-8">
      <div className="rounded-xl bg-gray-50 p-8 dark:bg-gray-800">
        <h2 className="mb-2 text-3xl font-semibold text-accent-400">
          Welcome back, {firstName}! 👋
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your account settings and view your activity
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-1 font-medium text-gray-500 dark:text-gray-400">
            Account Type
          </h3>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            Guest
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-1 font-medium text-gray-500 dark:text-gray-400">
            Member Since
          </h3>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            {formatDistanceToNow(new Date(session?.user?.registeredAt), {
              addSuffix: true,
            })}
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-1 font-medium text-gray-500 dark:text-gray-400">
            Last Login
          </h3>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            {lastLogin}
          </p>
        </div>
      </div>
      <div className="rounded-xl border border-gray-100 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-6 text-xl font-semibold">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/account/profile"
            className="flex items-center rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <div className="mr-4 rounded-full bg-accent-100 p-2">
              <UserCircleIcon className="h-6 w-6 text-accent-600" />
            </div>
            <div>
              <h4 className="font-medium">Edit Profile</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Update your personal information
              </p>
            </div>
          </Link>
          <Link
            href="/account/reservations"
            className="flex items-center rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <div className="mr-4 rounded-full bg-accent-100 p-2">
              <CalendarDaysIcon className="h-6 w-6 text-accent-600" />
            </div>
            <div>
              <h4 className="font-medium">Reservations</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                View and manage bookings
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="rounded-xl border border-gray-100 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-6 text-xl font-semibold">Account Information</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Full Name
            </h4>
            <p className="text-gray-900 dark:text-white">{fullName}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Email Address
            </h4>
            <p className="text-gray-900 dark:text-white">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
