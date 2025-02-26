"use server";

import { revalidatePath } from "next/cache";

// Services
import { auth, signIn, signOut } from "@/src/services/auth";
import { updateGuest } from "@/src/services/guestService";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuestProfile(formData) {
  const session = await auth();

  if (!session)
    throw new Error("You must be logged in to perform this action.");

  const { nationality: nationalityData, nationalID } =
    Object.fromEntries(formData);

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const [nationality, countryFlag] = nationalityData.split("%");

  const updateData = { nationality, countryFlag, nationalID };

  const updatedGuest = await updateGuest(session.user.guestId, updateData);

  if (!updatedGuest) throw new Error("Failed to update profile");

  revalidatePath("/account/profile");
}
