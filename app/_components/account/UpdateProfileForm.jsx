// Services
import { auth } from "@/src/services/auth";
import { updateGuestProfile } from "@/src/services/actions";

// Components
import SelectCountry from "./SelectCountry";
import SubmitFormButton from "../SubmitFormButton";

const UpdateProfileForm = async () => {
  const session = await auth();

  return (
    <form
      action={updateGuestProfile}
      className="flex flex-col gap-6 rounded-lg bg-primary-900 px-5 py-8 text-sm text-purple-200 md:px-12 md:text-lg"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          name="fullname"
          value={session?.user?.name}
          className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 md:px-5 md:py-3"
        />
      </div>
      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          name="email"
          value={session?.user?.email}
          className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 md:px-5 md:py-3"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={session?.user?.countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm md:px-5 md:py-3"
          defaultCountry={session?.user?.nationality}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={session?.user?.nationalID}
          name="nationalID"
          className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm md:px-5 md:py-3"
        />
      </div>
      <div className="flex items-center justify-end gap-6">
        <SubmitFormButton buttonLabel="Update profile" />
      </div>
    </form>
  );
};

export default UpdateProfileForm;
