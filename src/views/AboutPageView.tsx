'use client'
import { useColorMode } from "@chakra-ui/react";
import React from "react";

const About = () => {
const {colorMode} = useColorMode()
  return (
    <section className=" body-font overflow-hidden" id="about">
      <div className="container mx-auto flex px-5 py-24 items-center justify-left flex-col">
        <div className="lg:w-2/3 w-full my-16 py-10">
          <h1 className="text-center title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Who Am I?
          </h1>

          <div className="container py-14 mx-auto">
            <div className="my-4">
              {/* item start here */}
              <h1 className={`"title-font sm:text-4xl text-3xl mb-4 font-medium  text-[#ffc000] "`}></h1>

              <p className={`"text-lg text-justify  mt-2 mb-8 w-full ${colorMode ==="dark"? "text-gray-200":"text-gray-600"}`}>
                Experienced web developer with 5+ years of expertise in
                <strong className="text-yellow-500"> JavaScript, React js, Next.js TypeScript Node.js, MySQL, SQLite, PostgresSQL and mongoDB</strong>.
                Proficient in <strong className="text-yellow-500"> Agile, Waterfall and DevOps</strong> development environments, with
                a focus on creating efficient and user-friendly web solutions.
                Passionate about problem-solving and committed to delivering
                high-quality results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <section className="text-zinc-200 body-font">
//       <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
//         <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 ">
//             About
//           </h1>

//           <p className="text-lg text-justify  mt-2 mb-8 w-full">
//             Experienced web developer with 5+ years of expertise in JavaScript,
//             React, Next.js TypeScript Node.js, and SQL. Proficient in Agile and
//             Waterfall development environments, with a focus on creating
//             efficient and user-friendly web solutions. Passionate about
//             problem-solving and committed to delivering high-quality results.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
