import NextAuth, { AuthError } from "next-auth";
import GitHub from "@auth/core/providers/github";
import Credentials from "@auth/core/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import prisma from "./prismaClient";
//import Google from "@auth/core/providers/google"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  page: {
    signIn: "/signin",
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log(
          "We are in the credentials authorize functions with",
          email,
          password
        );
        let user = await prisma.user.findFirst({
          where: { email: email },
        });

        if (!user) {
          throw new Error("User not found.");
        }

        const userPassword = user.passwordhash;
        const isValidPassword = bcrypt.compareSync(password, userPassword);

        if (!isValidPassword) {
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    authorized: (params) => {
      console.log("in authorized");
      //console.log("user=", params.auth.user)
      return params.auth?.user;
    },
  },
});
