import { Locale } from "@/locales";
import Block from "../../block";
import BlockTitle from "../../block-title";
import PageContent from "../../page-content";
import HeaderBump from "../../header-bump";
import { getProject } from "./get-project";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}) {
  const { lang, id } = await params;
  const project = getProject(id, lang);

  return (
    <>
      <HeaderBump />
      <PageContent>
        <Block className="pt-12">
          <BlockTitle>{project.name}</BlockTitle>
        </Block>
      </PageContent>
    </>
  );
}
