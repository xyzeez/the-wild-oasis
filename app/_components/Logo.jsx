import Image from "next/image";
import Link from "next/link";

// Assets
import logo from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4 ">
      <Image
        src={logo}
        className="size-10 md:size-14"
        alt="The Wild Oasis logo"
      />
      <span className="text-xl hidden md:block font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
};

export default Logo;
