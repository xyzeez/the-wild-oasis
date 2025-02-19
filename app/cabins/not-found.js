import Link from "next/link";

export const metadata = {
  title: "Cabin Not Found",
  description: "This cabin could not be found.",
};

export default function CabinNotFound() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-primary-200 md:gap-6">
      <h1 className="text-3xl font-semibold">
        This cabin could not be found :(
      </h1>
      <Link
        href="/cabins"
        className="inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800"
      >
        Go back to all cabins
      </Link>
    </main>
  );
}
