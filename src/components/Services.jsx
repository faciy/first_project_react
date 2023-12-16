import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organization",
      description:
        "We have been working with some Fortune 500+ clients We have been working with some Fortune 500+ clients",
      image: "/src/assets/icons/accident.png",
    },
    {
      id: 2,
      title: "Membership Organization",
      description:
        "We have been working with some Fortune 500+ clients We have been working with some Fortune 500+ clients",
      image: "/src/assets/icons/accident.png",
    },
    {
      id: 3,
      title: "Membership Organization",
      description:
        "We have been working with some Fortune 500+ clients We have been working with some Fortune 500+ clients",
      image: "/src/assets/icons/accident.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralDGrey">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="my-12 flex flex-wrap justify-between items-center gap-8">
        <img className="h-20" src="/src/assets/icons/accident.png" alt="" />
        <img className="h-20" src="/src/assets/icons/cotedivoire.png" alt="" />
        <img
          className="h-20"
          src="/src/assets/icons/cadenas-verrouille.png"
          alt=""
        />
        <img className="h-20" src="/src/assets/icons/accident.png" alt="" />
        <img className="h-20" src="/src/assets/icons/cotedivoire.png" alt="" />
        <img className="h-20" src="/src/assets/icons/accident.png" alt="" />
        <img className="h-20" src="/src/assets/icons/cotedivoire.png" alt="" />
      </div>
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Manage your entrie community in single systeme
        </h2>
        <p className="text-neutralDGrey">Who is NextCent suitable for?</p>
      </div>
      {/* cards  */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => {
          return (
            <div
              key={service?.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 
              rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 
              hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <img
                  className="h-20 mx-auto rounded-tl-3xl rounded-br-3xl"
                  src={service?.image}
                  alt=""
                />
                <h4 className="text-2xl font-bold text-neutralDGrey  mb-2 px-2">
                  {service?.title}
                </h4>
                <p className="text-sm text-neutralGrey">
                  {service?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
