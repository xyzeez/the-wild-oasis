import Link from "next/link";

const LoginMessage = () => {
  return (
    <div className="grid bg-primary-800">
      <p className="flex flex-wrap justify-center gap-1 self-center py-6 text-center text-base sm:py-8 sm:text-lg md:py-12 md:text-xl">
        Please
        <Link
          href="/login"
          className="text-accent-500 underline transition-colors hover:text-accent-400"
        >
          login
        </Link>
        to reserve this cabin
      </p>
    </div>
  );
};

export default LoginMessage;
