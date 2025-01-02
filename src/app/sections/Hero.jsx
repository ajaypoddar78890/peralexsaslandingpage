import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="Hero-section container-fluid h-full w-full">
      <div className="container mx-auto px-5 lg:mt-10">
        <div className="hero-content grid  lg:grid-cols-2 gap-4  ">
          <div className=" rounded-lg mt-8   ">
            <div className="button text-white my-3 ">
              <Link
                href="#"
                className="bg-white  text-gray-600 font-regular px-5 py-3 rounded-[50px] shadow-md   hover:shadow-lg transition-all duration-300 lg:mt-[2rem]"
              >
                Designing for the Future
              </Link>
            </div>
            <div className="contant mt-8  md:max-w-2xl md:my-[3rem] items-start text-left">
              <h1 className="text-3xl font-semibold  md:text-5xl">
                Revolutionize Your{" "}
                <span className="text-blue-700">Workflow </span>With Sass
              </h1>
              <p className="mt-2 text-base text-gray-600  ">
                And in Order To Make A Business , Brand Advertising And
                Marketing Plays an Important Role Similarly , in Making
                Cultivfation Business Are Neccesaary{" "}
              </p>
            </div>
            <div className="container mx-auto my-2  ">
              <div className="flex flex-col sm:flex-row justify-start gap-4 items-start">
                <Link
                  href="#"
                  className="py-3 px-6 border-2 border-blue-600 text-black font-medium rounded-[2rem] hover:text-white hover:bg-blue-600 transition duration-300 mt-3 md:mt-0 "
                >
                  DiscoverMore +
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 w-full h-full relative">
            <Image
              src="/heroimg.png"
              alt="hero img"
              layout="responsive"
              objectFit="cover"
              height={30}
              width={30}
            />

            <div className="peralexeffect w-32  md:w-48 h-auto   absolute top-[10%] left-[0] lg:left-[-10%]">
              <Image
                src="/asset 3.png"
                width={80}
                height={100}
                objectFit="cover"
                layout="responsive"
                className=""
                alt="hello world"
              />
            </div>
            <div className="peralexeffect w-32  md:w-48 h-auto lg:w-96   absolute top-[50%] left-[0] md:left-6">
              <Image
                src="/asset 5.png"
                width={0}
                height={0}
                objectFit="cover"
                layout="responsive"
                className=""
                alt="hello world"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
