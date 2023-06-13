import React from "react";

const Trainings = () => {
  return (
    <section className="text-white body-font overflow-hidden">
      <div className="container mx-auto flex px-5 py-24 items-center justify-left flex-col">
        <div className="lg:w-2/3 w-full my-16 py-10">
          <h1 className="text-center title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Professional Trainings
          </h1>

          <div className="container py-24 mx-auto">
            <div className="my-4 divide-y-2 divide-gray-100">
              {/* item start here */}
              <div className="py-4 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-yellow-500">
                    PIAIC
                  </span>
                  <span className="mt-1 text-zinc-400 text-sm">Present</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-zinc-200 title-font mb-2">
                    Metaverse and Web 3.0
                  </h2>
                </div>
              </div>
              {/* item end here */}
              {/* item start here */}
              <div className="py-4 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-yellow-500">
                    PIAIC
                  </span>
                  <span className="mt-1 text-zinc-400 text-sm">Present</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-zinc-200 title-font mb-2">
                    Artificial Intelligence
                  </h2>
                </div>
              </div>
              {/* item end here */}
              {/* item start here */}
              <div className="py-4 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-yellow-500">
                    PIAIC
                  </span>
                  <span className="mt-1 text-zinc-400 text-sm">Present</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-zinc-200 title-font mb-2">
                    Cloud Native and Mobile Web Computing Specialist
                  </h2>
                </div>
              </div>
              {/* item end here */}
              {/* item start here */}
              <div className="py-4 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-yellow-500">
                    PIAIC
                  </span>
                  <span className="mt-1 text-zinc-400 text-sm">2020</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-zinc-200 title-font mb-2">
                    Freelance and Remote Work Bootcamp
                  </h2>
                  <p className="leading-relaxed text-zinc-400">
                    Web Apps including e-commerce apps using React, Gatsby.js,
                    Redux, GraphQL, Git, GitHub, GitHub Actions, JamStack AWS
                    serverless and Figma.
                  </p>
                </div>
              </div>
              {/* item end here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainings;
