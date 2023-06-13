import Image from "next/image";
import React from "react";
import servicesData from "../../data/services.json";

type ServiceType = {
  name: string;
  description: string;
  path: string;
};

type ServicesDataType = {
  services: ServiceType[];
};
const icon = "&#xe2bf;";
const Services = () => {
  const { services } = servicesData as ServicesDataType;
  return (
    <section className=" body-font py-8">
      <div className="container mx-auto flex px-3 py-8 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full my-16 py-10">
          <h1 className="title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Services
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-5">
            {services.map((service: ServiceType, index) => (
              <div
                className="p-6 max-w-sm mx-auto rounded-xl items-center space-x-4"
                key={index}>
                <div className="shrink-0">
                  <Image
                    className="mx-auto"
                    src={service.path}
                    alt={service.name}
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">
                    {service.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
