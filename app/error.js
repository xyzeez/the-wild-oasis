"use client";

export default function Error({ error, reset = () => {} }) {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-primary-200 md:gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg text-primary-300">
        {error?.message ||
          "An unexpected error occurred. Please try again later."}
      </p>
      <button
        className="inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
