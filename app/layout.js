import "./globals.css";

// Fonts
import { Josefin_Sans } from "next/font/google";

// Components
import Header from "./_components/Header";

// Libraries
import { cn } from "./_lib/cn";

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Home | The Wild Oasis",
  },
  description:
    "Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites.",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          josefin.className,
          "relative flex min-h-screen flex-col bg-primary-950"
        )}
      >
        <Header />
        <div className="grid flex-1 p-4 pb-0 md:px-8 md:py-12 md:pb-0">
          <main className="mx-auto h-full w-full max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
