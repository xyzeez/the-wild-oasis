import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";

const SignOutButton = () => {
  return (
    <button className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-red-600 transition-colors hover:bg-primary-900 hover:text-primary-100">
      <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
      <span>Sign out</span>
    </button>
  );
};

export default SignOutButton;
