import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/src/models/user";
import connectDB from "@/src/db/connectDB";

export const Authoptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await connectDB();
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = new User({
            name: user.name,
            email: user.email,
            username: user.email.split("@")[0],
            profilePicture: user.image,
          });
          await newUser.save();
        }
        return true;
      } catch (error) {
        console.error("Error during signIn:", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
        token.name = user.name;
        token.profilePicture = user.profilePicture;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/",
    error: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXT_AUTH_SECRET,
});

export { Authoptions as GET, Authoptions as POST };
