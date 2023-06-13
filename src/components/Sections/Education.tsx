import React from "react";

const Education = () => {
  return (
    <section className="text-white body-font overflow-hidden" id="education">
      <div className="container mx-auto flex px-5 py-24 items-center justify-left flex-col">
        <div className="lg:w-2/3 w-full my-16 py-10">
          <h1 className="text-center title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Education
          </h1>
          <div className="container py-14 mx-auto">
            <div className="my-4 divide-y-2 divide-gray-100">
              {/* item start here */}
              <div className="py-4 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-yellow-500">
                    University of Sargodha
                  </span>
                  <span className="mt-1 text-zinc-400 text-sm">2019</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-zinc-200 title-font mb-2">
                    MS - Computer Science
                  </h2>
                  <p className="leading-relaxed text-zinc-400">
                    I completed advanced courses in computer science and
                    developed an emotion detection system using facial
                    expression for my thesis. This project enhanced my skills in
                    computer vision techniques, algorithm development, and
                    analytical problem-solving.
                  </p>
                </div>
              </div>
              {/* item end here */}
              {/* item start here */}
              <div className="py-4 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-yellow-500">
                    Virtual University Of Pakistan
                  </span>
                  <span className="mt-1 text-zinc-400 text-sm">2014</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-zinc-200 title-font mb-2">
                    Master&apos;s in Computer Sciences
                  </h2>
                  <p className="leading-relaxed text-zinc-400">
                    I completed a range of computer science courses, including
                    programming, data communications, software engineering, web
                    engineering, and more. For my final project, I developed an
                    online chess game, gaining experience in software
                    development and design, database management, and artificial
                    intelligence.
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

export default Education;
