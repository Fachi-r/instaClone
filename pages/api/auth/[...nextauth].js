import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../mongodb_d";

const GOOGLE_CLIENT_ID1 = '906119606745-67am70lhsr6b5p1vf3thjj5k16a2fdl2.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET1 = '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'
const GOOGLE_CLIENT_ID = '662922025786-5er61ddsp2ndc6iel83oegcmathoahuo.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'
const EMAIL_SERVER_USER = 'apikey'
const EMAIL_SERVER_PASSWORD = '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'
const EMAIL_SERVER_HOST = 'smtp.sendgrid.net'
const EMAIL_SERVER_PORT = '465'
const EMAIL_FROM = 'ticketxpress3@gmail.com'
const GITHUB_ID = '47e410f2279a7ccdf760'
const GITHUB_SECRET = '59c69918ff3329b826a4aaf61ed051597f92de7c'

const options = {
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
        port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
          pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
    }),
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
