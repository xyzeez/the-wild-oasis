// Services
import supabase from "./supabase";

export const getGuest = async (email) => {
  try {
    const { data: guest } = await supabase
      .from("guests")
      .select("*")
      .eq("email", email)
      .single();

    return guest;
  } catch (err) {
    console.error("getGuest error:", err);
    throw new Error(`Failed to fetch guest: ${err.message}`);
  }
};

export const createGuest = async (newGuest) => {
  try {
    const { data: guest, error } = await supabase
      .from("guests")
      .insert([newGuest]);

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Guest could not be created");
    }

    return guest;
  } catch (error) {
    console.error("createGuest error:", error);
    throw new Error("Failed to create guest");
  }
};

export const updateGuest = async (id, updatedFields) => {
  try {
    const { data: guest, error } = await supabase
      .from("guests")
      .update(updatedFields)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Guest could not be updated");
    }

    return guest;
  } catch (error) {
    console.error("updateGuest error:", error);
    throw new Error("Failed to update guest");
  }
};
