import Image from "next/image";
import Link from "next/link";

// Assets
import logo from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src={logo}
        className="size-10 md:size-14"
        alt="The Wild Oasis logo"
      />
      <span className="hidden text-xl font-semibold text-primary-100 md:block">
        The Wild Oasis
      </span>
    </Link>
  );
};

export default Logo;
