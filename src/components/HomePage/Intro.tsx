import React from "react";
import Image from "next/image";
import { Grid, GridItem } from "@chakra-ui/react";


const Infro = () => {
  return (
    <div className=" text-white body-font py-2 mx-auto"  id="Intro">
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} className="grid grid-cols-2 px-4 py-4 mx-4 justify-center">
        <GridItem order={2} className="lg:w-2/3 w-full my-16 mx-auto py-10 px-4">
          <h1 className="title-font sm:text-4xl text-4xl my-6 font-medium text-yellow-500">
            Rida R. Syed
          </h1>
          <h1 className="title-font sm:text-md text-yellow-500 text-xl my-6 font-medium uppercase">
            software engineer
          </h1>
          <div className="justify-center text-zinc-400 sx:text-md text-sm font-base">
            <p className="text-justify">
              Hello! I am Software Developer from Pakistan, Lahore. Specialized
              in Software & Web application design and development, also I am
              good at graphic designing and illustration.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center mx-auto mt-16 uppercase font-semibold text-white bg-[#ffc000] border-2 py-2 px-8 focus:outline-none hover:bg-transparent hover:text-[#ffc000]  hover:border-2  border-[#ffc000] rounded text-md ">
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
        </GridItem>
        <GridItem order={1} className="justify-center mx-auto py-8">
          <Image
            src={"/asserts/profile_pic.png"}
            alt="profile_pic"
            width={350}
            height={300}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Infro;
