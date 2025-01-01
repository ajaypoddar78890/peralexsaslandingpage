import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="Hero-section container-fluid h-full w-full">
      <div className="container mx-auto px-5">
        <div className="hero-content grid  md:grid-cols-2 gap-4  ">
          <div className=" rounded-lg mt-8 ">
            <div className="button text-white my-3 ">
              <Link
                href="#"
                className="bg-white  text-gray-600 font-regular px-5 py-3 rounded-lg shadow-md   hover:shadow-lg transition-all duration-300"
              >
                Designing for the Future
              </Link>
            </div>
            <div className="contant my-10 ">
              <h1 className="text-3xl">
                revolutionize Your <span>Workflow With Sass</span>
              </h1>
              <p className="mt-5 text-base">
                And in Order to make a business , brand advertising and
                marketing plays an important role similarly , in making
                cultivfation business are neccesaary{" "}
              </p>
            </div>
            <Link
              href="#"
              className="py-3 px-6 border-2 border-blue-600 text-black font-medium rounded-lg hover:text-white hover:bg-blue-600 transition duration-300 mt-3"
            >
              DiscoverMore +
            </Link>
            <Link
              href="#"
              className="my-5 text-black font-medium flex items-center hover:text-blue-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                className="w-7 h-7 mr-2"
              >
                <path d="M5 3.5v17l14.5-8.5L5 3.5z" />
              </svg>
              How it works
            </Link>
          </div>
          <div className="bg-green-500 p-4">Grid 2</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
