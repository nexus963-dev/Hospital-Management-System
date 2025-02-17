import React from 'react';
import Image from 'next/image';
import Hospital_Logo from "@/public/assets/images/Hospital_Logo.png";
import Notification from "@/public/assets/images/notification.png";
import Call from "@/public/assets/images/call.png";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center  w-full h-16 px-6 shadow-md'> 
    {/* bg-gray-900 */}
      <div className='logo'>
        <Image src={Hospital_Logo} alt="Hospital Logo" width={40} height={40} className="rounded-full" />
      </div>
      <div className='flex items-center space-x-6'>
        <div className="notification cursor-pointer">
          <Image src={Notification} alt="Notification" width={24} height={24} />
        </div>
        <div className="call cursor-pointer">
          <Image src={Call} alt="Call" width={24} height={24} />
        </div>
        <span className='text-white text-lg font-semibold'>Hardik Agarwal</span>
      </div>
    </nav>
  );
};

export default Navbar;