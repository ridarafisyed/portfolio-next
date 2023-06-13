import ProjectList from "@/views/ProjectList";
import Link from "next/link";
import React from "react";

import portfolioData from "@/data/portfolio.json";

type ProjectType = {
  id: string;
  title: string;
  shortDescription: string;
  path: string;
  date: string;
  type: string;
  subType: string[];
  tools: string[];
};

type ProjectDataType = {
  projects: ProjectType[];
};

const Portfolio = () => {
  const { projects } = portfolioData as ProjectDataType;
  return (
    <section className="text-white body-font overflow-hidden" id="about">
      <div className="container mx-auto flex px-5 py-24 items-left justify-left flex-col">
        <div className=" w-full my-16 py-10">
          <h1 className=" title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Work Portfolio
          </h1>
          <p className="mt-2 text-lg leading-8 text-zinc-200">
            A collection of my recent projects and accomplishments
          </p>
          <div className="container py-14 mx-auto items-center justify-center">
            <div className="mx-auto mt-10  max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
              {projects.map((project: ProjectType, index) => (
                <div className="mb-4">
                  <ProjectList project={project} key={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
