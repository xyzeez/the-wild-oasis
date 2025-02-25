// Services
import { auth } from "@/src/services/auth";

export const metadata = {
  title: "Guest area",
};

export default async function GuestPage() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0];

  return (
    <h2 className="text-2xl font-semibold text-accent-400">
      Welcome, {firstName}
    </h2>
  );
}
