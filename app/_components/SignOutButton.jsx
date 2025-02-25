import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";

// Services
import { signOutUser } from "@/src/services/actions";

const SignOutButton = () => {
  return (
    <form action={signOutUser}>
      <button className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-red-600 transition-colors hover:bg-primary-900 hover:text-primary-100">
        <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
        <span>Sign out</span>
      </button>
    </form>
  );
};

export default SignOutButton;
