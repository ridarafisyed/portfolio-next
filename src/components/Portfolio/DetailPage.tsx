"use client"
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiOutlineArrowLeft} from "react-icons/ai"

const ProjectDetailPage = ({ project }: any) => {
  
  const {colorMode} = useColorMode()
  return (
    <div>
      <div className="container mx-auto">

        <div className=" w-full my-16 py-10 ">
           <div> 
            <Link href="portfolio" className=""> {<AiOutlineArrowLeft/>}</Link>
          </div>
          <h2 className="mt-3 text-4xl font-semibold leading-6 text-[#ffc000] py-4 group-hover:text-[#ffc000] ">
            <a href="#">
              <span className="absolute inset-0 "></span>
              {project.title}
            </a>
          </h2>
          <SimpleGrid >
            <Box >
              <Image className="rounded-lg" width={500} height={450} src={project.path} alt="" />
              <div className=" max-w-xl flex flex-row mt-3 px-3 py-1.5 font-medium gap-4">
                <Link href="#">GitHub </Link>
                <Link href={project.link} className="text-[#ffc000]">
                  Demo
                </Link>
              </div>
            </Box>
            <Box >
              <article className=" justify-between text-justify">
                <div className="group relative">
                  <div className="flex items-center mt-5 gap-x-6 text-xs">
                    <time dateTime="2020-03-16" className={`${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`}>
                      {project.date}
                    </time>
                    <a
                      href="#"
                      className={`relative z-10 rounded-full bg-[#ffc000] px-3 py-1.5 font-medium ${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`}>
                      {project.type}
                    </a>
                    <a
                      href="#"
                      className={`relative z-10 rounded-full bg-[#ffc000] px-3 py-1.5 font-medium ${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`}>
                      {project.subType.map((type: string, index: number) => (
                        <span
                          className={`relative z-10 rounded-full bg-[#ffc000] px-3 py-1.5 font-medium ${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`}
                          key={index}>
                          {type}{" "}
                        </span>
                      ))} 
                    </a>
                  </div>
                  <div className="mt-5 text-sm leading-6">
                    <h4 className="text-xl text-[#ffc000]">Overview:</h4>
                     <p className={`${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`}> {project.overview}</p>
                  </div>
                  <div className="mt-5 text-sm leading-6 ">
                    <h4 className="text-xl text-[#ffc000]">Challenges:</h4>
                    <ul className="gap-x-8 gap-y-16">
                      {project.challenges.map(
                        (feature: string, index: number) => (
                          <li className={`${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`} key={index} >
                            - {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="mt-5  text-sm leading-6 text-zinc-200">
                    <h4 className="text-xl text-[#ffc000] ">Features:</h4>
                    <ul className="gap-x-8 gap-y-16">
                      {project.features.map(
                        (feature: string, index: number) => (
                          <li className={`${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`} key={index}>
                            - {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="mt-5  text-sm leading-6 text-zinc-200">
                    <h4 className="text-xl text-[#ffc000]">
                      Future Improvements:
                    </h4>
                    <ul className="gap-x-8 gap-y-16">
                      {project.future_improvements.map(
                        (feature: string, index: number) => (
                          <li className={`${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`} key={index}>
                            - {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="mt-5 text-sm leading-6 text-zinc-200">
                    <h4 className="text-xl text-[#ffc000]">Result:</h4>
                    <p className={`${colorMode === "dark"? "text-zinc-200": "text-zinc-500"}`}>{project.results}</p>
                  </div>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <div className="flex items-center mt-5  gap-x-4 text-xs">
                      <h4 className=" text-lg text-[#ffc000] ">
                        Technologies:
                      </h4>
                      {project.tools.map((tool: string, index: number) => (
                        <span
                          className="relative z-10 rounded-full bg-zinc-600 px-3 py-1.5 font-medium text-zinc-200 hover:bg-[#ffc000] hover:text-white"
                          key={index}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
