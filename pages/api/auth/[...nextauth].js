import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../mongodb_d";

const options = {
  // adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    // EmailProvider({
    //   server: {
    //     host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
    //     port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
    //       pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.NEXT_PUBLIC_EMAIL_FROM,
    // }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("_")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
  // theme: {
  //   logo: "https://links.papareact.com/sq0",
  //   brandColor: "#22196C",
  //   colorScheme: "auto",
  // },
  // debug: false,
};

export default NextAuth(options);
