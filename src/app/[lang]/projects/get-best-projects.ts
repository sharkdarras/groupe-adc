import { Locale } from "@/locales";
import projects from "./projects.json";

export const getBestProjects = (lang: Locale) => {
  return projects
    .map((p) => ({
      id: p.id,
      name: p.name[lang],
      description: p.description[lang],
      imageSrc: p.imagesSrc[0],
    }))
    .slice(0, 3);
};
