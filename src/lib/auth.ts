import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "./prisma"; 
import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    // Google({
    //     clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
    //     clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
    //   }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@gmail.com" },
        name: { label: "Name", type: "text", placeholder: "name", required: true },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        if (!credentials) {
          throw new Error("Credentials missing");
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
          
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email
            };
          } else {
            throw new Error("Invalid credentials");
          }
        } else {
          const hashedPassword = await bcrypt.hash(credentials.password, 10);

          try {
            const newUser = await prisma.user.create({
              data: {
                name: credentials.name,
                password: hashedPassword,
                email: credentials.email
              }
            });

            return {
              id: newUser.id.toString(),
              name: newUser.name,
              email: newUser.email
            };
          } catch (error) {
            console.error("Error creating user:", error);
            throw new Error("Error creating user");
          }
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    }
  },
  debug: process.env.NODE_ENV === "development",
};