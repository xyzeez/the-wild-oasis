import Link from "next/link";

// Assets
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";

// Services
import { getCabins } from "@/src/services/cabinService";

// Components
import Image from "next/image";

export const metadata = {
  title: "About",
};

export default async function AboutPage() {
  const cabins = await getCabins();

  return (
    <div className="flex flex-col gap-x-24 gap-y-16 pb-4 text-lg text-primary-200 md:gap-y-32 md:pb-8">
      <div className="flex flex-col-reverse gap-x-24 gap-y-16 md:flex-row md:gap-y-32">
        <div>
          <h1 className="mb-10 text-4xl font-medium text-accent-400">
            Welcome to The Wild Oasis
          </h1>
          <div className="space-y-8">
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&apos;s not just about
              the luxury cabins. It&apos;s about the experience of reconnecting
              with nature and enjoying simple pleasures with family.
            </p>
            <p>
              Our {cabins.length} luxury cabins provide a cozy base, but the
              real freedom and peace you&apos;ll find in the surrounding
              mountains. Wander through lush forests, breathe in the fresh air,
              and watch the stars twinkle above from the warmth of a campfire or
              your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by
              nature&apos;s splendor. It&apos;s a place to slow down, relax, and
              feel the joy of being together in a beautiful setting.
            </p>
          </div>
        </div>
        <Image
          src={about1}
          placeholder="blur"
          alt="Family sitting around a fire pit in front of cabin"
          className="w-full object-cover object-center md:w-1/3"
        />
      </div>
      <div className="flex flex-col-reverse gap-x-24 gap-y-16 md:flex-row-reverse md:gap-y-32">
        <div>
          <h1 className="mb-10 text-4xl font-medium text-accent-400">
            Managed by our family since 1962
          </h1>
          <div className="space-y-8">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we&apos;ve maintained the essence of The Wild
              Oasis, blending the timeless beauty of the mountains with the
              personal touch only a family business can offer. Here, you&apos;re
              not just a guest; you&apos;re part of our extended family. So join
              us at The Wild Oasis soon, where tradition meets tranquility, and
              every visit is like coming home.
            </p>
            <Link
              href="/cabins"
              className="mt-4 inline-block bg-accent-500 px-4 py-3 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600 md:px-8 md:py-5"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
        <Image
          src={about2}
          placeholder="blur"
          alt="Family that manages The Wild Oasis"
          className="w-full object-cover object-center md:w-1/3"
        />
      </div>
    </div>
  );
}
