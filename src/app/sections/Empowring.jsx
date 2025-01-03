import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import react from "react";
import Image from "next/image";
const Empowring = () => {
  return (
    <div className="empowring-section container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-center justify-center lg:pt-10">
        <div className="w-full h-auto">
          <Image
            src="/asset 7.png"
            width={80}
            height={100}
            objectFit="cover"
            layout="responsive"
            className=""
            alt="hello world"
          />
        </div>

        <div className="contentsection">
          <h1>ABOUT US</h1>
          <h2>Empowering business with SaaS technology</h2>
          <p>
            You can access SaaS application through a web browser or mobile app,
            as long as you have an internet connection.
          </p>
        </div>
        <div className="checklist w-full h-full flex items-center">
          <svg
            className="text-blue-700 mr-2 text-lg md:text-base lg:text-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.2 17.4l-4.8-4.8 1.2-1.2 3.6 3.6 7.2-7.2 1.2 1.2-8.4 8.4z" />
          </svg>
          <p className="text-gray-700 text-lg  lg:text-lg">
            Mistakes to Avoid
          </p>
        </div>
      </div>
    </div>
  );
};

export default Empowring;
