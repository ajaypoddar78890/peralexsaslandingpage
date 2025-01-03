import { FaRegCheckCircle } from "react-icons/fa";
import react from "react";
import Image from "next/image";
const Empowring = () => {
  return (
    <div className="empowring-section container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center justify-center lg:pt-10">
        <div className="w-full h-auto">
          <img src="/asset 7.png" alt="hello world" />
        </div>
        <div className="contentsection">
          <h1>ABOUT US</h1>
          <h2>Empowering business with SaaS technology</h2>
          <p>
            You can access SaaS application through a web browser or mobile app,
            as long as you have an internet connection.
          </p>
          <div className="iconsection my-5 border-t border-gray-400 text-base font-medium leading-tight text-black ">
            <div className="flex items-center space-x-2 my-5 ">
              {" "}
              {/* Flex container with spacing */}
              <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
              {/* Icon with some custom styles */}
              <span className="  ">Continuous integration and deployment</span>
            </div>
            <div className="flex items-center space-x-2  mb-2 my-5">
              {" "}
              {/* Flex container with spacing */}
              <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
              {/* Icon with some custom styles */}
              <span className=" ">Development workflow</span>
            </div>
            <div className="flex items-center space-x-2  mb-2 my-5">
              {" "}
              {/* Flex container with spacing */}
              <FaRegCheckCircle size={25} className="text-purple-800" />{" "}
              {/* Icon with some custom styles */}
              <span className=" ">Knowledge management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empowring;
