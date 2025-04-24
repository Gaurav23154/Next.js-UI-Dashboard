import { HiOutlineMenu } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { FiArrowLeft } from 'react-icons/fi';

import Image from "next/image";
interface TopbarProps {
  toggleSidebar: () => void;
}

export function Topbar({ toggleSidebar }: TopbarProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-40">
      {/* Hamburger menu: visible on mobile only */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-gray-600 hover:text-black focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        <HiOutlineMenu className="h-6 w-6" />
      </button>
      <div className="flex gap-3 items-center">
      <FiArrowLeft className="w-5 h-5" />
      <h1 className="text-xl font-semibold">Stories</h1></div>

      <div className="flex items-center space-x-3">
        <div className="text-right text-sm leading-tight">
          <div className="text-gray-500">Welcome back,</div>
          <div className="font-medium text-black">Gaurav Jaiswal</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          {/* Replace with actual image if needed */}
          <Image
            src="/images/avatar.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
        <FaChevronDown className="text-gray-500 text-sm cursor-pointer" />
      </div>
    </header>
  );
}
