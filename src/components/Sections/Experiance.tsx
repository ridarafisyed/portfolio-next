import { useColorMode } from "@chakra-ui/react";
import React from "react";
import experianceData from "@/data/experiance.json";


type ExperianceType = {
  company: string;
  year: string;
  position: string;
  description: string;

};

type ExperiancesDataType = {
  experiances: ExperianceType[];
};

const Experiance = () => {
const { colorMode } = useColorMode()
const { experiances } = experianceData as ExperiancesDataType;
return (
    <section className="text-white body-font overflow-hidden">
      <div className="container mx-auto flex px-5 py-8 items-center justify-left flex-col">
        <div className="lg:w-2/3 w-full my-16 py-4">
          <h1 className="text-center title-font sm:text-3xl text-2xl my-6 font-medium text-yellow-500">
            Professional Experiance
          </h1>

          <div className="container py-4 mx-auto">
            <div className={`my-4 divide-y-2 ${colorMode === "dark"? "divide-gray-500": "divide-gray-300"}`}>
              
              {/* item start here */}
              {experiances.map((experiance, index) => {
                return  <div className="py-4 flex flex-wrap md:flex-nowrap" key={index}>
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-yellow-500">
                    {experiance.company}
                  </span>
                  <span className="mt-1 text-zinc-400 text-sm">
                    {experiance.year}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className={`text-2xl font-medium  text-zinc-200 title-font mb-2 ${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`}>
                    {experiance.position}
                  </h2>
                  <p className={`leading-relaxed text-justify ${colorMode === "dark"? "text-zinc-500": "text-zinc-400"}`}>
                    {experiance.description}
                  </p>
                </div>
              </div>
              })} 
              {/* item end here */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
