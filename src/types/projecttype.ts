export type ProjectType = {
  id: string;
  title: string;
  shortDescription: string;
  path: string;
  date: string;
  type: string;
  subType: string[];
  tools: string[];
};

export type ProjectDataType = {
  projects: ProjectType[];
};