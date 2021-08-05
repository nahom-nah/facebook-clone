import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: "356749985961955",
      clientSecret: "ea00b297fea459f7059c8d163a8078af",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
  },
});
