import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-3xl font-bold text-blue-600">AJDev</div>

        <nav className="hidden md:flex space-x-6 text-xl ">
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
        </nav>

        <Link
          href="#get-started"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get Started
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
