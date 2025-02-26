import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-full min-h-[50vh] w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-primary-200 sm:text-3xl md:text-4xl">
          Thank you for your reservation!
        </h1>
        <p className="mt-4 text-sm text-primary-300 sm:text-base">
          We're excited to host you at The Wild Oasis
        </p>
        <Link
          href="/account/reservations"
          className="mt-6 inline-flex items-center rounded-md border border-transparent bg-accent-500 px-4 py-3 text-base font-medium text-white transition-colors duration-200 ease-in-out hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 sm:text-lg"
        >
          Manage your reservations
          <span className="ml-2" aria-hidden="true">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
