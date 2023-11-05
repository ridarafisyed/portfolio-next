import React, {Suspense} from "react";
import data from "@/data/portfolio.json";
import DetailPage from "@/components/Portfolio/DetailPage";
import Loading from "../loading";

async function CourseDetail({ params }: any) {
  const projectId = params.id;

  const projectObj = data.projects.find((project) => project.id === projectId);

  return <Suspense fallback={<Loading/>}>
          <DetailPage project={projectObj} />  
        </Suspense>;
}

export default CourseDetail;
