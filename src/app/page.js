"use client";
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
            <Image
              src={session.user?.picture}
              alt="user image"
              width={40}
              height={40}
              className="rounded-full"
            />
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
            type="submit"
            className="relative flex items-center px-4 justify-center h-12 mb-3 text-sm transition-colors bg-white border rounded-lg cursor-pointer border-greyE5 text-dark focus:outline-none hover:bg-dark/5"
            id="google-login-page"
            onClick={() => signIn("google")}
          >
            <span className="relative z-10 inline-flex items-center justify-center w-full">
              <div className="w-[210px] flex">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-4"
                >
                  <path
                    d="M22.7074 12.2531C22.7074 11.4389 22.6436 10.6203 22.5074 9.81934H11.582V14.4315H17.8385C17.5788 15.9191 16.7446 17.235 15.5232 18.0711V21.0638H19.2557C21.4476 18.9777 22.7074 15.8971 22.7074 12.2531Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M11.5851 23.9555C14.7091 23.9555 17.3436 22.8949 19.2631 21.0641L15.5305 18.0715C14.492 18.802 13.1514 19.2157 11.5894 19.2157C8.56757 19.2157 6.00542 17.1077 5.08611 14.2734H1.23438V17.3585C3.20068 21.403 7.20563 23.9555 11.5851 23.9555Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.07965 14.2764C4.59446 12.7888 4.59446 11.1781 5.07965 9.69055V6.60547H1.23214C-0.410713 9.98981 -0.410713 13.9771 1.23214 17.3614L5.07965 14.2764Z"
                    fill="#FBBC04"
                  ></path>
                  <path
                    d="M11.5851 4.74065C13.2365 4.71424 14.8325 5.35678 16.0285 6.53624L19.3354 3.11669C17.2415 1.08344 14.4622 -0.0344006 11.5851 0.000807131C7.20564 0.000807131 3.20068 2.55337 1.23438 6.60225L5.08186 9.68733C5.99692 6.84871 8.56333 4.74065 11.5851 4.74065Z"
                    fill="#EA4335"
                  ></path>
                </svg>
                Continue with Google
              </div>
            </span>
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
