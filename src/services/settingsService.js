// Services
import supabase from "./supabase";

export const getSettings = async () => {
  try {
    const { data: settings, error } = await supabase
      .from("settings")
      .select("*")
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Settings could not be loaded");
    }

    return settings;
  } catch (error) {
    console.error("getSettings error:", error);
    throw new Error("Failed to fetch settings");
  }
};
