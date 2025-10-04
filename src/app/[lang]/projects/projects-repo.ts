import { Locale } from "@/locales";
import projects from "./projects.json";

export class ProjectRepo {
  public getProject(id: string, lang: Locale): Project {
    return projects
      .filter((p) => p.id === id)
      .map(
        (p) =>
          ({
            id: p.id,
            name: p.name[lang],
            description: p.description[lang],
            imagesSrc: p.imagesSrc,
          } as Project)
      )[0];
  }
}

export type Project = {
  id: string;
  name: string;
  description: string;
  imagesSrc: string[];
};
