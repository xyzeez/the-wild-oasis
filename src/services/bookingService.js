import { eachDayOfInterval } from "date-fns";

// Services
import supabase from "./supabase";

export const getBookings = async (guestId) => {
  try {
    const { data: bookings, error } = await supabase
      .from("bookings")
      .select(
        "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)"
      )
      .eq("guestId", guestId)
      .order("startDate");

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Bookings could not get loaded");
    }

    return bookings;
  } catch (err) {
    console.error("getBookings error:", err);
    throw new Error(`Failed to fetch bookings: ${err.message}`);
  }
};

export const getBooking = async (id) => {
  try {
    const { data: booking, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error(`Booking could not get loaded: ${error.message}`);
    }

    return booking;
  } catch (err) {
    console.error("getBooking error:", err);
    throw new Error(`Failed to fetch booking: ${err.message}`);
  }
};

export const getBookedDatesByCabinId = async (cabinId) => {
  try {
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    today = today.toISOString();

    const { data: bookings, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("cabinId", cabinId)
      .or(`startDate.gte.${today},status.eq.checked-in`);

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Bookings could not get loaded");
    }

    const bookedDates = bookings
      .map((booking) => {
        return eachDayOfInterval({
          start: new Date(booking.startDate),
          end: new Date(booking.endDate),
        });
      })
      .flat();

    return bookedDates;
  } catch (error) {
    console.error("getBookedDatesByCabinId error:", error);
    throw new Error("Failed to fetch booked dates");
  }
};

export const createBooking = async (newBooking) => {
  try {
    const { data: booking, error } = await supabase
      .from("bookings")
      .insert([newBooking])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Booking could not be created");
    }

    return booking;
  } catch (error) {
    console.error("createBooking error:", error);
    throw new Error("Failed to create booking");
  }
};

export const updateBooking = async (id, updatedFields) => {
  try {
    const { data: booking, error } = await supabase
      .from("bookings")
      .update(updatedFields)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Booking could not be updated");
    }

    return booking;
  } catch (error) {
    console.error("updateBooking error:", error);
    throw new Error("Failed to update booking");
  }
};

export const deleteBooking = async (id) => {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Booking could not be deleted");
    }

    return data;
  } catch (error) {
    console.error("deleteBooking error:", error);
    throw new Error("Failed to delete booking");
  }
};
