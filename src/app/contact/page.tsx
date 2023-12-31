
import ContactForm from "@/views/ContactForm";
import React, {useState} from "react";

const Contact = () => {
 
 
  return (
    <>
      <section className="text-white body-font" id="contact">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full my-16 py-10">
            <h1 className="title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
              Contact Me
            </h1>
            <div className="flex justify-center gap-3 border-b border-gray-300/10 pb-12">
              <a href="#" className="">
               <span className="text-yellow-500 font-bold text-xl"> f </span> Facebook
              </a>
              <a href="#" className="">
               <span className="text-yellow-500 font-bold text-xl"> in </span> LinkedIn
              </a>

              <a href="#" className="">
                <span className="text-yellow-500 font-bold text-xl"> @ </span>  ridarafisyed@gmail.com
              </a>
            </div>
            <div></div>

            <div className="item-left justify-start text-left ">
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Contact;
