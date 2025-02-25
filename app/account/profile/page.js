// Components
import UpdateProfileForm from "@/app/_components/account/UpdateProfileForm";

export const metadata = {
  title: "Update profile",
};

export default function ProfilePage() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Update your guest profile
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm />
    </div>
  );
}
