// Components
import {
  SideNavigation,
  MobileNavigation,
} from "@/app/_components/account/AccountNavigations";

export default function Layout({ children }) {
  return (
    <div className="grid h-full gap-12 pb-11 md:grid-cols-[16rem_1fr] md:pb-0">
      <div className="hidden md:block">
        <SideNavigation />
      </div>
      <div className="fixed bottom-0 left-0 right-0 block md:hidden">
        <MobileNavigation />
      </div>
      <div>{children}</div>
    </div>
  );
}
