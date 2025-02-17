import SelectCountry from "@/app/_components/SelectCountry";

export const metadata = {
  title: "Update profile",
};

export default function ProfilePage() {
  const countryFlag = "pt.jpg";
  const nationality = "portugal";

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Update your guest profile
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form className="flex flex-col gap-6 rounded-lg bg-primary-900 px-5 py-8 text-sm text-purple-200 md:px-12 md:text-lg">
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 md:px-5 md:py-3"
          />
        </div>
        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 md:px-5 md:py-3"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          </div>
          <SelectCountry
            name="nationality"
            id="nationality"
            className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm md:px-5 md:py-3"
            defaultCountry={nationality}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            className="w-full rounded-sm bg-primary-200 px-3 py-2 text-primary-800 shadow-sm md:px-5 md:py-3"
          />
        </div>
        <div className="flex items-center justify-end gap-6">
          <button className="bg-accent-500 px-3 py-2 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 md:px-8 md:py-4">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}
