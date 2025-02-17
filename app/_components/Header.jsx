// Components
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 p-4 md:px-8 md:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
