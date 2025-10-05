import { Locale } from "@/locales";
import Block from "../block";
import BlockTitle from "../block-title";
import PageContent from "../page-content";
import HeaderBump from "../header-bump";
import { getBestProjects } from "./get-best-projects";
import ProjectBox from "./project-box";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const projects = [
    ...getBestProjects(lang),
    ...getBestProjects(lang),
    ...getBestProjects(lang),

    ...getBestProjects(lang),

    ...getBestProjects(lang),

    ...getBestProjects(lang),

    ...getBestProjects(lang),

    ...getBestProjects(lang),
  ];

  return (
    <>
      <HeaderBump />
      <PageContent>
        <Block className="pt-12">
          <BlockTitle>{texts[lang].projectsTitle}</BlockTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((p) => (
              <ProjectBox
                key={p.id + Math.random()}
                name={p.name}
                description={p.description}
                imageSrc={p.imageSrc}
                link={`/${lang}/projects/${p.id}`}
              ></ProjectBox>
            ))}
          </div>
        </Block>
      </PageContent>
    </>
  );
}

const texts = {
  fr: {
    projectsTitle: "Nos mandats",
  },
  en: {
    projectsTitle: "Our Projects",
  },
};
