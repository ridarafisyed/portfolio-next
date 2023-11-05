import React from "react";
import trainingsData from "@/data/trainings.json"
import { useColorMode } from "@chakra-ui/react";

type TrainingType = {
  company:string
  year: string,
  name: string,
  description: string
}
type TrainingsDataType = {
  trainings: TrainingType[]
}


const Trainings = () => {
  const {colorMode} = useColorMode()
  const {trainings} = trainingsData as TrainingsDataType
  return (
    <section className="text-white body-font overflow-hidden">
      <div className="container mx-auto flex px-5 py-8 items-center justify-left flex-col">
        <div className="lg:w-2/3 w-full my-16 py-4">
          <h1 className="text-center title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Professional Trainings
          </h1>

          <div className="container py-24 mx-auto">
            <div className={`my-4 divide-y-2 ${colorMode === "dark"? "divide-gray-500": "divide-gray-200"}`}>
              {/* item start here */}

              {trainings.map((training, index) => {
                return (
                    <div className="py-4 flex flex-wrap md:flex-nowrap" key={index}>
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-yellow-500">
                          {training.company}
                        </span>
                            <span className={`mt-1 text-sm ${colorMode ==="dark"? "text-zinc-200":" text-zinc-400"}`}>{training.year}</span>
                      </div>
                      <div className="md:flex-grow">
                        <h2 className={`text-2xl font-medium title-font mb-2 ${colorMode === "dark"?"text-zinc-200":"text-zinc-500"}`}>
                          {training.name}
                            </h2>
                            <p className="leading-relaxed text-zinc-400">
                          {training.description}
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

export default Trainings;
