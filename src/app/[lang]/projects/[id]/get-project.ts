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
      imagesSrc: p.imagesSrc,
      website: p.website,
      tasks: p.tasks ? p.tasks[lang] : [],
      prizes: p.prizes ? p.prizes[lang] : [],
      stats: p.stats
        ? p.stats.map((stat) => ({
            label: stat.label[lang],
            value: stat.value,
          }))
        : [],
    }))[0];
};
