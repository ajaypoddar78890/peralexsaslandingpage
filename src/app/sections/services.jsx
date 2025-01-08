import React from "react";

const services = () => {
  const serviceData = [
    {
      title: "Web Development",
      description:
        "Crafting modern, responsive websites tailored to your business needs.",
      image: "/webdevelopment.jpg", // Random image from Unsplash
    },
    {
      title: "Digital Marketing",
      description:
        "Driving growth and visibility through strategic digital marketing campaigns.",
      image: "/digitalmarketing.jpg",
    },
    {
      title: "Cloud Solutions",
      description:
        "Implementing scalable and secure cloud solutions for your infrastructure.",
      image: "/cloudsolution.jpg",
    },
    {
      title: "Mobile App Development",
      description:
        "Building native and cross-platform mobile apps for iOS and Android.",
      image: "/mobileapp.webp",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces for optimal user experience.",
      image: "/uiux.webp",
    },

    {
      title: "Cybersecurity",
      description:
        "Protecting your digital assets with robust cybersecurity measures.",
      image: "/cybersecurity.jpg",
    },
  ];

  return (
    <div className="services-section bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="container px-5 mx-auto">
        <div className="content mx-auto text-center mb-10">
          <h4 className="font-semibold text-xl text-blue-700 md:text-2xl lg:text-3xl">
            Advance Services
          </h4>
          <h1 className="font-bold text-2xl md:text-2xl lg:text-5xl my-2 lg:my-5">
            Optimize Your <span className="text-blue-700">Performance</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[1.5rem] shadow-md hover:scale-105 transition-transform duration-300 transform hover:shadow-lg overflow-hidden" // Added overflow-hidden
              style={{
                animationDelay: `${index * 0.15}s`,
                animationName: "fadeIn",
                animationDuration: "0.75s",
                animationTimingFunction: "ease-out",
                animationFillMode: "both",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-92 object-contain rounded-t-lg"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default services;
