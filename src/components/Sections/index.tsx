import React from "react";
import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import Experiance from "./Experiance";
import CodingSkills from "./CodingSkills";
import Contact from "./Contact";
import Trainings from "./Training";
import Publication from "./Publication";
import Education from "./Education";
import { useColorMode } from "@chakra-ui/react";
import Certification from "./Certification";
import Membership from "./Membership";

const ContentSide = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={`${colorMode === "dark"? "bg-[#0d1117] text-white":"bg-slate-50  text-[#0d1117]"} `}>
      <section id="hero">
        <Intro />
      </section>
      <hr />
      <section id="about">
        <About />
      </section>
      <hr />
      <section id="education">
        <Education />
      </section>
      <hr />
      <section id="experiance">
        <Experiance />
      </section>
      <hr />
      <section id="skills">
        <CodingSkills />
      </section>
      <hr />
      <section id="services">
        <Services />
      </section>
      <hr />
      <section id="publications">
        <Publication />
      </section>
      <hr />
      <section id="certification">
        <Certification />
      </section>
      <hr />
      <section id="training">
        <Trainings />
      </section>
      <hr />
      <section id="membership">
        <Membership />
      </section>
      <hr />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default ContentSide;
