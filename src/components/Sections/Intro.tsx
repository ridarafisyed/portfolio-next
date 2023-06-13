import React from "react";
import Image from "next/image";

const Infro = () => {
  return (
    <section className=" text-white body-font py-8" id="Intro">
      <div className="container grid grid-cols-2 gap-4 mx-auto px-5 py-24 items-center justify-center flex-col">
        <div className="lg:w-2/3 w-full my-16 py-10">
          <h1 className="title-font sm:text-4xl text-4xl my-6 font-medium text-yellow-500">
            Rida R. Syed
          </h1>
          <h1 className="title-font sm:text-2xl text-xl my-6 font-medium uppercase">
            software engineer
          </h1>
          <div className="justify-center text-zinc-400 sx:text-md text-md font-base">
            <p>
              Hello! I am Software Developer from Pakistan, Lahore. Specialized
              in software & web application design and development, also I am
              good at graphic designing and illustration.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center mx-auto mt-16 text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-transparent hover:text-yellow-600 hover:border  border-yellow-600 rounded text-lg ">
              Contact Me
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <Image
            src={"/asserts/profile_pic.png"}
            alt="profile_pic"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Infro;
