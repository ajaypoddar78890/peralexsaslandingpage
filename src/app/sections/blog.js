import React from "react";

const Blog = () => {
  return (
    <section id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It s not just us
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here s what others have to say about us.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Single Testimonial */}
          {[
            {
              name: "Kanye West",
              role: "Rapper & Entrepreneur",
              message: "Find God.",
              image:
                "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
            },
            {
              name: "Tim Cook",
              role: "CEO of Apple",
              message:
                "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.",
              image:
                "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
            },
            {
              name: "Parag Agrawal",
              role: "CEO of Twitter",
              message:
                "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus.",
              image:
                "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg",
            },
            {
              name: "Kanye West",
              role: "Rapper & Entrepreneur",
              message: "Find God.",
              image:
                "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
            },
            {
              name: "Tim Cook",
              role: "CEO of Apple",
              message:
                "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.",
              image:
                "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
            },
            {
              name: "Parag Agrawal",
              role: "CEO of Twitter",
              message:
                "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus.",
              image:
                "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg",
            },
          ].map((testimonial, index) => (
            <div key={index} className="relative group  ">
              <div className="absolute h-full transition rounded-lg opacity-25 -inset-1 bg-gradient-to-tr from-blue-300 to-orange-400 blur duration-400 group-hover:opacity-100 group-hover:duration-200 "></div>
              <a href={testimonial.link} className="cursor-pointer">
                <div className="relative p-6 space-y-6 min-h-72 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt={testimonial.name}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-md">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-300 text-md">
                    {testimonial.message.length > 100
                      ? `${testimonial.message.slice(0, 100)}...`
                      : testimonial.message}
                  </p>
                  {testimonial.message.length > 100 && (
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="text-blue-400 underline text-sm"
                    >
                      {showMore ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
