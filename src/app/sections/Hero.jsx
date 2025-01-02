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
                className="bg-white  text-gray-600 font-regular px-5 py-3 rounded-[50px] shadow-md   hover:shadow-lg transition-all duration-300"
              >
                Designing for the Future
              </Link>
            </div>
            <div className="contant my-8 ">
              <h1 className="text-3xl font-semibold ">
                Revolutionize Your{" "}
                <span className="text-blue-700">Workflow </span>With Sass
              </h1>
              <p className="mt-2 text-base text-gray-600 ">
                And in Order To Make A Business , Brand Advertising And
                Marketing Plays an Important Role Similarly , in Making
                Cultivfation Business Are Neccesaary{" "}
              </p>
            </div>
            <div className="container mx-auto mt-5">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="#"
                  className="py-3 px-6 border-2 border-blue-600 text-black font-medium rounded-lg hover:text-white hover:bg-blue-600 transition duration-300 mt-3 inline-block"
                >
                  DiscoverMore +
                </Link>

                <Link
                  href="#"
                  className="py-3 px-6 text-black font-medium flex items-center hover:text-blue-700 transition duration-300 border-blue-800 border-2  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 bg-white rounded-full p-2"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="black"
                      stroke-width="3"
                    />
                    <polygon points="10,8 16,12 10,16" fill="black" />
                  </svg>
                  How it works
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-green-500 p-4">Grid 2</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
