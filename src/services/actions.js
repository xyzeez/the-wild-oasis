"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isPast, isSameDay } from "date-fns";

// Services
import { auth, signIn, signOut } from "@/src/services/auth";
import { updateGuest } from "@/src/services/guestService";
import {
  createBooking,
  getBookedDatesByCabinId,
  updateBooking,
} from "@/src/services/bookingService";

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

export async function createGuestBooking(bookingDateData, formData) {
  const session = await auth();

  if (!session)
    throw new Error("You must be logged in to perform this action.");

  const { numGuests, observations } = Object.fromEntries(formData);
  const { startDate, endDate, cabinID } = bookingDateData;

  if (isPast(new Date(startDate))) {
    throw new Error("Cannot create booking with past dates");
  }

  const bookedDates = await getBookedDatesByCabinId(cabinID);
  const requestedStartDate = new Date(startDate);
  const requestedEndDate = new Date(endDate);

  const hasDateConflict = bookedDates.some(
    (date) =>
      isSameDay(date, requestedStartDate) || isSameDay(date, requestedEndDate)
  );

  if (hasDateConflict) {
    throw new Error("Selected dates are not available for this cabin");
  }

  const bookingData = {
    ...bookingDateData,
    observations,
    numGuests: Number(numGuests),
    totalPrice: bookingDateData.cabinPrice,
    extrasPrice: 0,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
    guestID: session.user.guestId,
  };

  const booking = await createBooking(bookingData);

  if (!booking) throw new Error("Failed to create booking");

  revalidatePath("/account/reservations");

  redirect("/cabins/thankyou");
}

export async function updateGuestBooking(bookingId, bookingDateData, formData) {
  const session = await auth();

  if (!session)
    throw new Error("You must be logged in to perform this action.");

  const { numGuests, observations } = Object.fromEntries(formData);
  const { startDate, endDate, cabinID } = bookingDateData;

  if (isPast(new Date(startDate))) {
    throw new Error("Cannot update booking with past dates");
  }

  const allBookedDates = await getBookedDatesByCabinId(cabinID);

  const bookedDates = allBookedDates.filter((date) => {
    const currentDate = new Date(date);
    const currentStartDate = new Date(startDate);
    const currentEndDate = new Date(endDate);

    return (
      !isSameDay(currentDate, currentStartDate) &&
      !isSameDay(currentDate, currentEndDate)
    );
  });

  const requestedStartDate = new Date(startDate);
  const requestedEndDate = new Date(endDate);

  const hasDateConflict = bookedDates.some(
    (date) =>
      isSameDay(date, requestedStartDate) || isSameDay(date, requestedEndDate)
  );

  if (hasDateConflict) {
    throw new Error("Selected dates are not available for this cabin");
  }

  const booking = await updateBooking(bookingId, {
    startDate,
    endDate,
    numGuests: Number(numGuests),
    observations,
  });

  if (!booking) throw new Error("Failed to update booking");

  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
}
