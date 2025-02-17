"use client"; // Add this line at the top

import Image from "next/image";
import Navbar from "../components/Navbar";
import Side_Navigation from "../components/Side_Navigation";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Achievements from "../components/achievements";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-end p-4">
        {session ? (
          <div className="flex items-center gap-4">
            <span className="font-semibold">{session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Sign In with Google
          </button>
        )}
      </div>
      <Navbar />
      <div className="flex flex-row item">
        <Side_Navigation />
        <Main />
      </div>

      <div className="achievement">
        <p></p>
      </div>

      <div>
        <Achievements />
      </div>

      <Footer />
    </div>
  );
}
