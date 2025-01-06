import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-transparent absolute top-0 left-0   w-full z-50 ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-4xl font-bold text-blue-600">MoreDev</div>

        <nav className="hidden  lg:flex space-x-6 text-xl font-semibold ">
          <Link href="#home" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
          <Link href="#services" className="text-gray-600 hover:text-blue-600">
            Services
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">
            work
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">
            blog
          </Link>
        </nav>

        <Link
          href="#"
          className="py-3 px-6 border-2 border-blue-600 font-semibold text-black font-medium rounded-[2rem] hover:text-white hover:bg-blue-600 transition duration-300 mt-3 md:mt-0 "
        >
          DiscoverMore +
        </Link>

        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
