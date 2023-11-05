import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaAt} from "react-icons/fa";

const Contact = () => {
  const {colorMode} = useColorMode()
  return (
    <section className="text-white body-font" id="contact">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full my-16 py-10">
          <h1 className="title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Contact Me
          </h1>
          <div className="flex justify-center mx-auto gap-3 border-b border-gray-300/10 pb-12">
              <a href="https://www.facebook.com/ridarsyed/" className={`hover:text-yellow-500 ${colorMode ==="dark"?"text-zinc-100":"text-zinc-500"}`}>
               <FaFacebookF/> 
              </a>
            <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=ridarafisyed/" className={`hover:text-yellow-500 ${colorMode ==="dark"?"text-zinc-100":"text-zinc-500"}`}>
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/ridarafisyed/" className={`hover:text-yellow-500 ${colorMode ==="dark"?"text-zinc-100":"text-zinc-500"}`}>
              <FaInstagram />
            </a>
            <a href="https://github.com/ridarafisyed/" className={`hover:text-yellow-500 ${colorMode ==="dark"?"text-zinc-100":"text-zinc-500"}`}>
              <FaGithub/> 
              </a>
            <a href="mailto:ridarafisyed@gmail.com?Subject=Web%20Profile%20Requestgit" className={`hover:text-yellow-500 ${colorMode ==="dark"?"text-zinc-100":"text-zinc-500"}`}>
              <FaAt/>
            </a>
            </div>  
        </div>
      </div>
    </section>
  );
};

export default Contact;
