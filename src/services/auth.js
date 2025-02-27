import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Services
import { getGuest, createGuest, updateGuest } from "./guestService";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized: async ({ auth }) => !!auth,
    signIn: async ({ user }) => {
      try {
        const userExists = await getGuest(user.email);
        if (!userExists) {
          await createGuest({
            fullname: user.name,
            email: user.email,
            lastLogin: new Date().toISOString(),
          });
        } else {
          await updateGuest(userExists.id, {
            lastLogin: new Date().toISOString(),
          });
        }
        return true;
      } catch {
        return false;
      }
    },
    session: async ({ session }) => {
      const guest = await getGuest(session.user.email);

      session.user.guestId = guest.id;
      session.user.nationality = guest.nationality;
      session.user.countryFlag = guest.countryFlag;
      session.user.nationalID = guest.nationalID;
      session.user.registeredAt = guest.created_at;
      session.user.lastLogin = guest.lastLogin;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
