import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectDetailPage = ({ project }: any) => {
  return (
    <section className="text-white body-font overflow-hidden" id="about">
      <div className="container mx-auto flex px-5 py-24 items-left justify-left flex-col">
        <div className=" w-full my-16 py-10 ">
          <h2 className="mt-3 text-4xl font-semibold leading-6 text-yellow-500  group-hover:text-yellow-500 ">
            <a href="#">
              <span className="absolute inset-0 "></span>
              {project.title}
            </a>
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-16 w-full my-4 py-4">
            <div className="col-span-4">
              <Image className="rounded-lg" src={project.path} alt="" />
              <div className=" max-w-xl flex flex-row mt-3 px-3 py-1.5 font-medium gap-4">
                <Link href="#">GitHub </Link>
                <Link href="#" className="text-yellow-500">
                  Demo{" "}
                </Link>
              </div>
            </div>
            <div className="col-span-8 space-x-2 space-y-4">
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <div className="flex items-center mt-5  gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-zinc-200">
                      {project.date}
                    </time>
                    <a
                      href="#"
                      className="relative z-10 rounded-full bg-yellow-600 px-3 py-1.5 font-medium text-zinc-200 hover:bg-gray-100">
                      {project.type}
                    </a>
                    <a
                      href="#"
                      className="relative z-10 rounded-full bg-zinc-600 px-3 py-1.5 font-medium text-zinc-200 hover:bg-gray-100">
                      {project.subType}
                    </a>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-zinc-200">
                    <h4 className="text-xl text-yellow-600  ">Overview:</h4>
                    {project.overview}
                  </p>
                  <div className="mt-5 text-sm leading-6 text-zinc-200">
                    <h4 className="text-xl text-yellow-600 ">Challenges:</h4>
                    <ul className="gap-x-8 gap-y-16">
                      {project.challenges.map(
                        (feature: string, index: number) => (
                          <li className="" key={index}>
                            - {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="mt-5  text-sm leading-6 text-zinc-200">
                    <h4 className="text-xl text-yellow-500 ">Features:</h4>
                    <ul className="gap-x-8 gap-y-16">
                      {project.features.map(
                        (feature: string, index: number) => (
                          <li className="" key={index}>
                            - {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="mt-5  text-sm leading-6 text-zinc-200">
                    <h4 className="text-xl text-yellow-500">
                      Future Improvements:
                    </h4>
                    <ul className="gap-x-8 gap-y-16">
                      {project.future_improvements.map(
                        (feature: string, index: number) => (
                          <li className="" key={index}>
                            - {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="mt-5 text-sm leading-6 text-zinc-200">
                    <h4 className="text-xl text-yellow-500">Result:</h4>
                    {project.results}
                  </div>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <div className="flex items-center mt-5  gap-x-4 text-xs">
                      <h4 className=" text-lg text-yellow-500 ">
                        Technologies:{" "}
                      </h4>
                      {project.tools.map((tool: string, index: number) => (
                        <span
                          className="relative z-10 rounded-full bg-zinc-600 px-3 py-1.5 font-medium text-zinc-200 hover:bg-gray-100"
                          key={index}>
                          {tool}{" "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
