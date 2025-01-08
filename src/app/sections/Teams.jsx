import React from "react";

const Teams = () => {
  const people = [
    {
      name: "Sophia Bennett",
      role: "Chief Technology Officer",
      imageUrl:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "James Anderson",
      role: "Product Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Emily Davis",
      role: "Marketing Head",
      imageUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Oliver Smith",
      role: "Senior Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Amelia Brown",
      role: "UX/UI Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "William Johnson",
      role: "Data Scientist",
      imageUrl:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <div className="div bg-gradient-to-b from-blue-50 to-orange-100 ">
      <div className="py-12 md:py-20  mx-auto container">
        <div className="mx-auto grid   gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-blue-600 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="size-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teams;
