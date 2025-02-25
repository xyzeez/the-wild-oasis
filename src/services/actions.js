"use server";

// Services
import { signIn, signOut } from "@/src/services/auth";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}
