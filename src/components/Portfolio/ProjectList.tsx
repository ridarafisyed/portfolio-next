'use client'
import {useColorMode, Card, CardHeader, CardBody, CardFooter , Image, Stack, Heading, Text, Divider, ButtonGroup, Button} from '@chakra-ui/react'
// import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectList = ({ project }: any) => {
  const { colorMode } = useColorMode()
  
  return (
    <Link href={`/portfolio/${project.id}`}>
      <div className={`justify-center rounded-lg shadow-md  ${colorMode === "dark"? "hover:shadow-yellow-500": "hover:shadow-yellow-300"}`}>
        <div>
          <Image
            src={project.path}
            alt={project.title}
            borderRadius='lg'
          />
          <div className='py-4'>
            <h3 className={`text-center capitalize ${colorMode === "dark"? "text-zinc-200 ":"text-zinc-500"}`}>{project.title}</h3>
          </div>
        </div>
 
      </div>
   </Link>
  )
  
};

export default ProjectList;
