"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
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
    <div className="relative h-screen">
      <Navbar isScrolled={isScrolled} />
      <div className="bg-zinc-100 dark:bg-gray-600 w-64 main-page"></div>
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
