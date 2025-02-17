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
          "bg-primary-950  min-h-screen flex flex-col"
        )}
      >
        <Header />
        <div className="flex-1 p-4 md:px-8 md:py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
