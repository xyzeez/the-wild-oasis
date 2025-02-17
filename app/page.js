import Image from "next/image";

// Assets
import bg from "@/public/bg.png";

const HomePage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src={bg}
        fill
        placeholder="blur"
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 text-center md:gap-10">
        <h1 className="w-[10ch] text-5xl font-normal capitalize tracking-tight text-primary-50 md:text-8xl md:tracking-tight">
          Welcome to paradise.
        </h1>
        <a
          href="/cabins"
          className="bg-accent-500 px-4 py-3 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600 md:px-8 md:py-6"
        >
          Explore luxury cabins
        </a>
      </div>
    </div>
  );
};

export default HomePage;
