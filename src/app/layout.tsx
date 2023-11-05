import "./globals.css";
import Head from "next/head";
import ChakraWrapper from "@/layout/chakraWapper";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Rida Rafi Syed | FUll Stack Developer",
  description:
    "Discover the power of the latest tech stack for software development. Our website is your ultimate resource for software developers, web app developers, mobile app developers, and full-stack developers. Learn how to leverage cutting-edge technologies like React, Node.js, PostgreSQL, MongoDB, Gatsby, TypeScript, and more to build innovative and high-performance applications. Access tutorials, guides, and expert insights to stay ahead in the dynamic world of technology. Collaborate with our experienced team for tailored development services. Join our vibrant community and unlock your full development potential today",
  keywords:
    "software development, tech stack, React, Node.js, PostgreSQL, MongoDB, Gatsby, TypeScript, web development, mobile app development, full-stack development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="ONWD4U7ux9eCUCRg3ysLYS_h3gBMfdHgj8EcJI_H63g" />
        
      </Head>
      <html lang="en">
        <body suppressHydrationWarning={true} className="">
          <ChakraWrapper>
            <Navbar/>
            {children}
          </ChakraWrapper>
        </body>
      </html>
    </>
  );
}
