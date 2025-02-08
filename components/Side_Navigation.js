import React from 'react';
import Link from 'next/link';

const SideNavbar = () => {
  return (
    <div className="flex flex-col w-64 h-screen  text-white shadow-xl">
      {/* bg-gray-800 */}
      <div className="flex items-center justify-center h-20 bg-gray-900">
        <span className="text-2xl font-bold">Exelate Puzzles</span>
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link href="/dashboard" className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-all duration-300">
          {/* Insert SVG for Dashboard here */}
          <span className="ml-3 text-lg">Dashboard</span>
        </Link>
        <Link href="/doctors" className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-all duration-300">
          {/* Insert SVG for Doctors here */}
          <span className="ml-3 text-lg">Doctors</span>
        </Link>
        <Link href="/patient" className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-all duration-300">
          {/* Insert SVG for Patient here */}
          <span className="ml-3 text-lg">Patient</span>
        </Link>
        <Link href="/reports" className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-all duration-300">
          {/* Insert SVG for Reports here */}
          <span className="ml-3 text-lg">Reports</span>
        </Link>
      </nav>
    </div>
  );
};

export default SideNavbar;