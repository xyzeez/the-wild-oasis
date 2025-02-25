import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: { authorized: async ({ auth }) => !!auth },
  pages: {
    signIn: "/login",
  },
});
