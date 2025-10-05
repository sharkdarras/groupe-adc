import { Locale } from "@/locales";
import projects from "../projects.json";

export const getProject = (id: string, lang: Locale) => {
  return projects
    .filter((p) => p.id === id)
    .map((p) => ({
      id: p.id,
      name: p.name[lang],
      description: p.description[lang],
      imageSrc: p.imagesSrc[0],
    }))[0];
};
