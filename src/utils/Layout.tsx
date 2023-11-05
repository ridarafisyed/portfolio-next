"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export default function Layout({ children, ...props }:  ThemeProviderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NextThemeProvider {...props}>
    <div className="h-screen ">
      <Navbar/>
      <div className="flex-1 flex overflow-hidden justify-center items-center">
        <div className="flex-1 overflow-y-scroll">{children}</div>
      </div>
    </div></NextThemeProvider>
  );
}
