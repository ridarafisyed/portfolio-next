import React from "react";

import databasesData from "@/data/database.json";
import frameworksData from "@/data/framework.json";
import serversData from "@/data/servers.json";
import langauagesData from "@/data/langauges.json"
import { useColorMode } from "@chakra-ui/react";

type DataType = {
  name: string;
  description: string;
  score: number;
};

type SkillsDataType = {
  servers: DataType[];
  databases: DataType[];
  frameworks: DataType[];
  languages: DataType[];
}
type SkillSetDataType = {
  skillsDataType: SkillSetDataType
}
const CodingSkills = () => {
  const {colorMode} = useColorMode()
  const { servers } = serversData as SkillsDataType;
  const { databases } = databasesData as SkillsDataType;
  const { frameworks } = frameworksData as SkillsDataType;
  const { languages } = langauagesData as SkillsDataType

  return (
    <section className=" body-font py-8" id="skills">
      <div className="container mx-auto flex px-3 py-8 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full my-8 py-10">
          <h1 className="title-font sm:text-4xl text-3xl py-4 font-medium text-yellow-500">
            Skills
          </h1>
          <div className="">
            <h3 className={`title-font sm:text-2xl text-xl my-4 font-medium ${colorMode === "dark"? "text-zinc-300":"text-zinc-500"}`}>
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left py-5">
              {languages.map((database: DataType, index) => (
                <div key={index}>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-zinc-700">
                    <div
                      className="bg-yellow-500 text-xs font-medium text-zinc-100 text-center p-0.5 leading-none rounded-full"
                      style={{ width: `${database.score}%` }}>
                      {" "}
                      % {database.score}
                    </div>
                  </div>
                  <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">
                    {database.name}
                  </h2>
                
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`title-font sm:text-2xl text-xl my-4 font-medium ${colorMode === "dark"? "text-zinc-300":"text-zinc-500"}`}>
              Serverside Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left py-5">
              {servers.map((server: DataType, index) => (
                <div key={index}>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-zinc-700">
                    <div
                      className="bg-yellow-500 text-xs font-medium text-zinc-100 text-center p-0.5 leading-none rounded-full"
                      style={{ width: `${server.score}%` }}>
                      {" "}
                      % {server.score}
                    </div>
                  </div>
                  <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">
                    {server.name}
                  </h2>
                 
                </div>
              ))}
              </div>
          </div>
          <div>
            <h3 className={`title-font sm:text-2xl text-xl my-4 font-medium ${colorMode === "dark"? "text-zinc-300":"text-zinc-500"}`}>
              JS Frameworks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left py-5">
              {frameworks.map((framework: DataType, index) => (
                <div key={index}>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-zinc-700">
                    <div
                      className="bg-yellow-500 text-xs font-medium text-zinc-100 text-center p-0.5 leading-none rounded-full"
                      style={{ width: `${framework.score}%` }}>
                      {" "}
                      % {framework.score}
                    </div>
                  </div>
                  <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">
                    {framework.name}
                  </h2>
                  
                </div>
              ))}
            </div>
          </div>
          <div>
          <h3 className={`title-font sm:text-2xl text-xl my-4 font-medium ${colorMode === "dark"? "text-zinc-300":"text-zinc-500"}`}>
            Databases
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left py-5">
            {databases.map((database: DataType, index) => (
              <div key={index}>
                <div className="w-full bg-gray-200 rounded-full dark:bg-zinc-700">
                  <div
                    className="bg-yellow-500 text-xs font-medium text-zinc-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${database.score}%` }}>
                    {" "}
                    % {database.score}
                  </div>
                </div>
                <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">
                  {database.name}
                </h2>
               
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingSkills;
