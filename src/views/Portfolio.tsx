'use client'
import ProjectList from "@/components/Portfolio/ProjectList";
import {Grid, GridItem, useColorMode} from "@chakra-ui/react"
import React from "react";

import portfolioData from "@/data/portfolio.json";

import { ProjectType, ProjectDataType } from "@/types/projecttype";

const Portfolio = () => {
  const {colorMode} = useColorMode()
  const { projects } = portfolioData as ProjectDataType;
  return (
    <section className=" body-font overflow-hidden" id="about">
      <div className="container mx-auto flex px-5 py-2 items-left justify-left flex-col">
        <div className=" w-full my-16 py-4">
          <h1 className=" title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Work Portfolio
          </h1>
          <p className={`mt-2 text-lg leading-8 ${ colorMode === "dark" ? "text-zinc-200": "text-zinc-500"}`}>
            A collection of my recent projects and accomplishments
          </p>
          <div className="py-4 mx-auto items-center justify-center">
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}  gap={6} className="mx-auto mt-10  max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
              {projects.map((project: ProjectType, index) => (
                <GridItem className="mb-4" key={index}>
                    <ProjectList project={project} />
                </GridItem>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
