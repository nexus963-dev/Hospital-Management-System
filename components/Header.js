import React from 'react'
import Image from 'next/image'
import logo from "../public/assests/images/logo.png" 
const Header = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center p-4">
      <div className="relative w-full  bg-gray-900 p-45rounded-lg shadow-lg border border-gray-700">
        {/* Top Icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 p-4 rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11l-7-7m0 0l-7 7m7-7v18"
            />
          </svg>
        </div>
        
        {/* Heading */}
        <h1 className="text-2xl font-bold uppercase mt-8 px-80">Hi. This is MediCare.</h1>
        
        {/* Description */}
        <p className="mt-4 text-gray-300">
          A comprehensive Hospital Management System designed to streamline patient records, appointments, and medical services. Efficient, secure, and user-friendly.
        </p>
        
        {/* Footer Link */}
        <p className="mt-4 text-sm text-gray-400">
          Designed with care and precision. <span className="underline cursor-pointer">Learn More</span>
        </p>
      </div>
    </div>
        // <div className="header">
        //     <div className="top">
        //         <div className="logo">
        //         <Image src={logo} alt="" />
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header
