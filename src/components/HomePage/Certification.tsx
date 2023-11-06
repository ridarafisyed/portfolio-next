import React from "react";
import certificationData from "@/data/certification.json"
import { Certificate } from "crypto";
import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";


type CertificationType = {
  company: string;
  year: string;
  name: string;
  bagde: string;

};

type CertificationsDataType = {
  certifications: CertificationType[];
};

const Certification = () => {
  const {colorMode} = useColorMode()
  const {certifications} = certificationData as CertificationsDataType
  return (
    <section className="text-white body-font overflow-hidden" id="cerfication">
      <div className="container mx-auto flex px-5 py-24 items-center justify-left flex-col">
        <div className="lg:w-2/3 w-full my-16 py-16">
          <h1 className="text-center title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
            Certifications
          </h1>

          
          <div className="container py-24 mx-auto">
            <div className="my-4 divide-y-2 divide-gray-100">
              {certifications.map((certificate, index) => {
                return (
                  <div className="py-4 flex flex-wrap md:flex-nowrap gap-3" key={index}>
                    <div>
                      <Image src={certificate.bagde} height={50} width={50} alt={certificate.name} />
                    </div>
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-yellow-500">
                        {certificate.company}
                      </span>
                      
                      
                      <span className="mt-1 text-zinc-400 text-sm">
                        {certificate.year}
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className={`text-2xl font-medium title-font mb-2 ${colorMode === "dark" ?"text-zinc-200":"text-zinc-500"}`}>
                        {certificate.name}
                      </h2>
                    </div>
                  </div>
                )
              })}
       
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
