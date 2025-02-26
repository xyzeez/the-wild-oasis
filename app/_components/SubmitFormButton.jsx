"use client";

import { useFormStatus } from "react-dom";

// Components
import SpinnerMini from "@/app/_components/SpinnerMini";

const SubmitFormButton = ({ buttonLabel }) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-3 py-2 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 md:px-8 md:py-4"
    >
      {pending ? <SpinnerMini /> : buttonLabel}
    </button>
  );
};

export default SubmitFormButton;
