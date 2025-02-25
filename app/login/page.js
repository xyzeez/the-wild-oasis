// Components
import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="px- flex h-full w-full flex-col items-center justify-center bg-primary-950 py-10">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-primary-900 p-8 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-50">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-primary-200">
            Sign in to access your guest area
          </p>
        </div>
        <SignInButton />
      </div>
    </div>
  );
}
