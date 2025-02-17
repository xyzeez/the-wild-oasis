// Components
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-50 border-primary-900 p-4 md:px-8 md:py-5">
      <div className="flex justify-between gap-4 items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
