import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-primary-200 md:gap-6">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800"
      >
        Go back home
      </Link>
    </main>
  );
}
