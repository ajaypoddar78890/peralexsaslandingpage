import React from "react";
import Link from "next/link";
import Image from "next/image";

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
            <div className="contant mt-8 ">
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
            <div className="container mx-auto my-2 ">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="#"
                  className="py-3 px-6 border-2 border-blue-600 text-black font-medium rounded-[2rem] hover:text-white hover:bg-blue-600 transition duration-300 mt-3 inline-block"
                >
                  DiscoverMore +
                </Link>
              </div>
            </div>
          </div>
          <div className="  p-4 w-full h-full relative">
            <Image
              src="/heroimg.png"
              alt="hero img"
              layout="responsive"
              objectFit="cover"
              height={30}
              width={30}
            ></Image>

            <div class="peralexeffect">
              <Image
                src="/asset 3.png"
                width={80}
                height={100}
                objectFit="cover"
                className="absolute top-[10%] left-[0]"
              />
            </div>
            <div class="peralexeffect">
              <Image
                src="/asset 5.png"
                width={150}
                height={500}
                objectFit="cover"
                className="absolute top-[50%] left-[0]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
