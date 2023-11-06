'use client'
import React from "react";
import Image from "next/image";
import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { zoomIn } from "@/utils/motion";


const Infro = () => {
  return (
    <motion.div >
    <div className=" text-white body-font py-24 mx-auto"  id="Intro">
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={2} className="px-4 py-12 mx-4 justify-center">
        <GridItem  className="lg:w-2/3 w-full my-16 mx-auto py-10 px-4">
          <h1 className="title-font sm:text-4xl text-4xl my-6 font-medium text-yellow-500">
            Rida R. Syed
          </h1>
          <h1 className="title-font sm:text-md text-yellow-500 text-2xl my-6 font-medium uppercase">
            software engineer
          </h1>
          <div className="justify-center text-zinc-400 sx:text-md text-md font-base">
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
        <GridItem  className="justify-center mx-auto py-8">
          <Image
            src={"/asserts/profile_pic.png"}
            alt="profile_pic"
            style={{ "width": "auto", "height":"auto"}}
            width={350}
            height={300}
          />
        </GridItem>
      </Grid>
      </div>
      </motion.div>
  );
};

export default Infro;
