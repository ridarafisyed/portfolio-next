import React from "react";
import data from "../../../data/portfolio.json";
import DetailPage from "@/views/DetailPage";

async function CourseDetail({ params }: any) {
  const projectId = params.id;

  const projectObj = data.projects.find((project) => project.id === projectId);

  return <DetailPage project={projectObj} />;
}

export default CourseDetail;
