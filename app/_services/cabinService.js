// Services
import supabase from "./supabase";

export const getCabins = async () => {
  try {
    let { data: cabins, error } = await supabase
      .from("cabins")
      .select("id, name, image, regularPrice, discount, maxCapacity")
      .order("name");

    if (error) {
      console.error("Supabase error:", error);
      throw new Error(`Cabins could not be loaded: ${error.message}`);
    }

    if (!cabins) {
      console.error("No data returned from Supabase");
      throw new Error("No cabins data found");
    }

    return cabins;
  } catch (err) {
    console.error("getCabins error:", err);
    throw new Error(`Failed to fetch cabins: ${err.message}`);
  }
};

export const getCabin = async (id) => {
  try {
    const { data: cabin, error } = await supabase
      .from("cabins")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error(`Cabin could not be loaded: ${error.message}`);
    }

    return cabin;
  } catch (err) {
    console.error("getCabin error:", err);
    throw new Error(`Failed to fetch cabin: ${err.message}`);
  }
};

export const getCabinPrice = async (id) => {
  try {
    const { data: price, error } = await supabase
      .from("cabins")
      .select("regularPrice, discount")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error(`Price could not be loaded: ${error.message}`);
    }

    return price;
  } catch (err) {
    console.error("getCabinPrice error:", err);
    throw new Error(`Failed to fetch price: ${err.message}`);
  }
};
