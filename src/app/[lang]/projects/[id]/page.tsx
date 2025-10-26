"use client";
import { Locale } from "@/locales";
import Block from "../../block";
import BlockTitle from "../../block-title";
import PageContent from "../../page-content";
import HeaderBump from "../../header-bump";
import { getProject } from "./get-project";
import { use, useState } from "react";
import ExternalLinkIcon from "@/icons/external-link-incon";
import BackLink from "../../back-link";
import RightArrow from "@/icons/right-arrow";

export default function Page({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}) {
  const { lang, id } = use(params);
  const project = getProject(id, lang);

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  return (
    <>
      <HeaderBump />
      <PageContent>
        <Block className="pt-6 md:pt-12">
          <BackLink href="/projects" className="mb-4">
            {texts[lang].backLinkLabel}
          </BackLink>

          <BlockTitle>{project.name}</BlockTitle>

          <a
            className="text-red underline mt-2 block"
            href={project.website}
            target="_blank"
          >
            {project.website}
            <ExternalLinkIcon className="inline w-3 h-3 ml-1 text-darkgray" />
          </a>

          <div className="flex md:h-100 lg:h-150 overflow-hidden mt-8">
            <div className="grow relative">
              <img
                src={project.imagesSrc[selectedPhotoIndex]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              {project.imagesSrc.length > 1 && (
                <div className="absolute bottom-0 right-0 w-full py-1 md:p-4 flex justify-center md:justify-end items-center text-white bg-darkgray md:bg-transparent">
                  <RightArrow
                    className="rotate-180 h-6 cursor-pointer"
                    onClick={() =>
                      setSelectedPhotoIndex(
                        (selectedPhotoIndex - 1 + project.imagesSrc.length) %
                          project.imagesSrc.length
                      )
                    }
                  />
                  <div className="w-16 text-center">
                    {selectedPhotoIndex + 1} / {project.imagesSrc.length}
                  </div>
                  <RightArrow
                    className="h-6 cursor-pointer"
                    onClick={() =>
                      setSelectedPhotoIndex(
                        (selectedPhotoIndex + 1) % project.imagesSrc.length
                      )
                    }
                  />
                </div>
              )}
            </div>
            {project.imagesSrc.length > 1 && (
              <div className="w-50 lg:w-72 grow-0 shrink-0 p-2 bg-darkgray hidden md:grid grid-cols-1 gap-2 h-full overflow-y-scroll">
                {project.imagesSrc.map((imgSrc, index) => (
                  <img
                    key={imgSrc}
                    src={imgSrc}
                    alt={project.name}
                    onClick={() => setSelectedPhotoIndex(index)}
                    className={
                      selectedPhotoIndex === index
                        ? "border-4 border-white cursor-pointer"
                        : "cursor-pointer"
                    }
                  />
                ))}
              </div>
            )}
          </div>
          <div className="lg:flex justify-between mt-8">
            <div>
              <div className="mt-4">
                <h3 className="font-bold text-2xl mb-2">
                  {texts[lang].tasksTitle}
                </h3>
                <ul className="list-disc ml-6 text-lg">
                  {project.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>

              {project.prizes.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-bold text-2xl mb-2">
                    {texts[lang].prizesTitle}
                  </h3>
                  <ul className="list-disc ml-6 text-lg">
                    {project.prizes.map((prize) => (
                      <li key={prize}>{prize}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="border-2 border-red text-red p-5 w-full lg:w-90 mt-10 lg:mt-0">
              <h3 className="font-bold text-2xl">{texts[lang].statsTitle}</h3>
              {project.stats.map((stat) => (
                <div className="mt-4" key={stat.label}>
                  <h4 className="font-light uppercase">{stat.label}</h4>
                  <div className="font-bold text-4xl">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Block>
      </PageContent>
    </>
  );
}

const texts = {
  fr: {
    backLinkLabel: "Retour aux projets",
    tasksTitle: "Le mandat",
    prizesTitle: "Prix et distinctions",
    statsTitle: "En chiffres",
  },
  en: {
    backLinkLabel: "Back to projects",
    tasksTitle: "Our mandate",
    prizesTitle: "Awards and distinctions",
    statsTitle: "In numbers",
  },
};
