import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectList = ({ project }: any) => {
  return (
    <div className=" grid gap-2 grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      {/* image of project */}
      <div className="">
        <Image
          className="rounded-t-xl"
          src={project.path}
          width={450}
          height={350}
          alt={project.name}
        />
      </div>
      <div className=" col-span-2">
        <div className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs space-x-2 space-y-2">
            <time dateTime="2020-03-16" className="text-zinc-200">
              {project.date}
            </time>
            <a
              href="#"
              className="relative z-10 rounded-full bg-yellow-600 px-3 py-1.5 font-medium text-zinc-200 hover:bg-gray-100">
              {project.type}
            </a>
            <span>
              {project.subType.map((sub_type: string, index: number) => (
                <span
                  className="relative z-10 rounded-full bg-zinc-600 px-3 py-1.5 mx-1 font-medium text-zinc-200 hover:bg-gray-100"
                  key={index}>
                  {sub_type}
                </span>
              ))}
            </span>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-200 group-hover:text-zinc-300">
              <a href={`portfolio/${project.id}`}>
                <span className="absolute inset-0"></span>
                {project.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-200">
              {project.shortDescription}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <div className="text-sm leading-6">
              <p className="font-semibold text-yellow-500">
                {project.tools.map((tool: string, index: number) => (
                  <span key={index}>{tool} </span>
                ))}
              </p>
              <Link href={`/portfolio/${project.id}`} className="text-zinc-200">
                Learn More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
