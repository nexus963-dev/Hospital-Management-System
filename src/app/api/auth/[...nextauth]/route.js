import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/src/models/user";
import connectDB from "@/src/db/connectDB";

function generateUID() {
  const prefix = "U-HID";
  const randomNum = Math.floor(Math.random() * 1000000);
  const formattedNumber = String(randomNum).padStart(6, "0");
  return `${prefix}${formattedNumber}`;
}

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
        let currentUser = await User.findOne({ email: user.email });

        if (!currentUser) {
          currentUser = new User({
            name: user.name,
            email: user.email,
            uhid: generateUID(),
            profilePicture: user.image,
          });
          await currentUser.save();
        }

        return true;
      } catch (error) {
        console.error("Error during signIn:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      try {
        await connectDB();
        const dbUser = await User.findOne({ email: token.email });

        if (dbUser) {
          token.id = dbUser._id;
          token = { ...token, ...dbUser._doc };
        }
      } catch (error) {
        console.error("Error fetching user in jwt callback:", error);
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
