// Services
import { signInWithGoogle } from "@/src/services/actions";

const SignInButton = () => {
  return (
    <form action={signInWithGoogle}>
      <button className="group relative w-full rounded-md border border-primary-700 bg-primary-800 px-6 py-3 transition-all duration-200 hover:border-primary-600 hover:bg-primary-700">
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            className="h-5 w-5"
            height="20"
            width="20"
          />
          <span className="text-sm font-semibold text-primary-50">
            Continue with Google
          </span>
        </div>
      </button>
    </form>
  );
};

export default SignInButton;
