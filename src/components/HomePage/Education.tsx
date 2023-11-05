'use client'
import React from "react";
import degreesData from "@/data/degrees.json"

import { DegreesDataType } from "@/types/degreesType"
import { useColorMode } from "@chakra-ui/react";


const Education = () => {
  const {colorMode } = useColorMode()
  const { degrees } = degreesData as DegreesDataType
  
  return (
    <section className="text-white body-font overflow-hidden" id="education">
      <div className="container mx-auto flex px-5 py-8 items-center justify-left flex-col">
        <div className="lg:w-2/3 w-full my-16 py-4">
          <h1 className="text-center title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Education
          </h1>
          <div className="container py-4 mx-auto">
            <div className="my-4 divide-y-2 divide-gray-300">
              {/* item start here */}
              {degrees.map((degree, index) => {
                return (
                 <div className="py-4 flex flex-wrap md:flex-nowrap" key={index}>
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-yellow-500">
                        {degree.institute}
                      </span>
                      <span className="mt-1 text-zinc-400 text-sm">{degree.year}</span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className={`text-2xl font-medium title-font mb-2 ${colorMode === "dark"? "text-zinc-200": "text-zinc-500 "}`}>
                        {degree.title}
                      </h2>
                      <p className="leading-relaxed text-zinc-400 text-justify">
                        {degree.description}
                      </p>
                    </div>
                  </div>
               )
             })}
              
              {/* item end here */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
