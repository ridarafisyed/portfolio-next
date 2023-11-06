"use client";
import { Suspense} from "react";
import ContentSide from "@/components/HomePage";
import Loading from "./loading";


export default function Home() {
  
  return (
     <Suspense fallback={<Loading />}>
        <ContentSide />
      </Suspense>);
}
