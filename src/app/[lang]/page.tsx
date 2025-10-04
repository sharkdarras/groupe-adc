import { Locale } from "@/locales";
import CompanyHighlightBox from "./company-highlight-box";
import ArrowLink from "./arrow-link";
import ServiceBox from "./service-box";
import { getBestProjects } from "./projects/get-best-projects";
import ProjectBox from "./project-box";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const projects = getBestProjects(lang);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(/assets/hotel.jpeg)` }}
        className="lg:h-[750px] bg-cover bg-center wrapper relative z-0"
      >
        <div className="h-[400px] bg-linear-to-t from-darkgray to-transparent w-full absolute bottom-0 left-0 right-0"></div>

        <div className="pt-[160px] pb-12 px-8 wrapped text-white flex flex-col-reverse lg:flex-row justify-between lg:items-end relative">
          <div className="hidden lg:block mt-8 lg:mt-0">
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight">
              {texts[lang].titleSmall}
            </div>
            <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
              {texts[lang].titleBig}
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-auto lg:items-end gap-5 mt-4">
            <CompanyHighlightBox
              description={texts[lang].highlights[0].description}
              value="850"
              linkLabel={texts[lang].highlights[0].linkLabel}
              linkHref={`${lang}/services`}
              className="bg-darkgray"
            ></CompanyHighlightBox>
            <CompanyHighlightBox
              description={texts[lang].highlights[1].description}
              value="2007"
              linkLabel={texts[lang].highlights[1].linkLabel}
              linkHref={`${lang}/about`}
              className="bg-grayred"
            ></CompanyHighlightBox>
            <CompanyHighlightBox
              description={texts[lang].highlights[2].description}
              value="8.7M$"
              linkLabel={texts[lang].highlights[2].linkLabel}
              linkHref={`${lang}/mandates`}
              className="bg-red"
            ></CompanyHighlightBox>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapped py-20 px-8">
          <h2 className="font-bold md:text-4xl text-3xl">
            {texts[lang].serviceTitle}
          </h2>

          <div className="grid md:grid-cols-3 grid-cols-1 my-12 gap-4">
            <ServiceBox
              description={texts[lang].services[0].description}
              iconSrc="/assets/icons/construction.svg"
            ></ServiceBox>
            <ServiceBox
              description={texts[lang].services[1].description}
              iconSrc="/assets/icons/reception.svg"
            ></ServiceBox>
            <ServiceBox
              description={texts[lang].services[2].description}
              iconSrc="/assets/icons/teamwork.svg"
            ></ServiceBox>
          </div>

          <ArrowLink href={`${lang}/services`} className="text-red">
            {texts[lang].serviceLinkLabel}
          </ArrowLink>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapped py-16 px-10 bg-darkgray text-white">
          <h2 className="font-bold text-4xl">{texts[lang].projectsTitle}</h2>

          <div className="grid md:grid-cols-3 grid-cols-1 my-12 gap-4">
            {projects.map((p) => (
              <ProjectBox
                key={p.id}
                link={`${lang}/projects/${p.id}`}
                name={p.name}
                description={p.description}
                imageSrc={p.imageSrc}
              ></ProjectBox>
            ))}
          </div>

          <button className="bg-white text-darkgray px-4 py-2">
            <ArrowLink href={`${lang}/projects`}>
              {texts[lang].projectsLinkLabel}
            </ArrowLink>
          </button>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapped py-20 px-8 flex items-center justify-between">
          <div className="max-w-[38em]">
            <h2 className="font-bold text-4xl">{texts[lang].aboutTitle}</h2>

            <p className="mt-12 mb-4">{texts[lang].aboutP1}</p>
            <p className="mb-12">{texts[lang].aboutP2}</p>

            <ArrowLink href={`${lang}/about`} className="text-red">
              {texts[lang].aboutLinkLabel}
            </ArrowLink>
          </div>
          <div className="hidden lg:block">
            <div className="relative pl-5 pb-5 max-w-[18em]">
              <div className="bg-red">
                <img
                  src="/assets/alain-darras.jpg"
                  alt="Alain Darras"
                  className="relative top-5 right-5"
                />
              </div>
            </div>
            <div className="leading-none mt-4">
              <h4 className="text-2xl text-red font-bold">Alain Darras</h4>
              <h5>{texts[lang].alainTitle}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const texts = {
  fr: {
    titleSmall: "Consultant et gestionnaire en hôtellerie",
    titleBig: "D'EXPÉRIENCE",
    highlights: [
      {
        description: "Clients servis par mois dans nos établissements",
        linkLabel: "Nos services",
      },
      {
        description: "À l’oeuvre dans notre domaine depuis",
        linkLabel: "Notre histoire",
      },
      {
        description: "Valeur des projets supervisés en date d’aujourd’hui",
        linkLabel: "Nos projets",
      },
    ],
    serviceTitle: "Services offerts",
    serviceLinkLabel: "Tous les détails sur les services",
    services: [
      {
        description:
          "Gestion de projet de construction, agrandissement ou rénovation",
      },
      {
        description:
          "Gestion hôtelière pouvant inclure des services complets de comptabilité",
      },
      {
        description:
          "Embauche et formation du personnel existant ou à venir en cas de nouvelle construction",
      },
    ],
    projectsTitle: "Aperçu de mandats réalisés",
    projectsLinkLabel: "Voir tous nos mandats",
    aboutTitle: "Le Groupe ADC",
    aboutP1:
      "Groupe ADC est une firme de consultation spécialisée en hôtellerie. Son président, Alain Darras, possède une riche expérience en gestion hôtelière, ayant dirigé plusieurs établissements et supervisé de nombreuses ouvertures d’hôtels au Québec, en Ontario et au Nouveau-Brunswick. Son expertise couvre autant la conception de projets que l’optimisation des opérations et la mise en place d’équipes performantes.",
    aboutP2:
      "Reconnu pour son approche rigoureuse et son vaste réseau de professionnels, il accompagne ses clients dans le développement d’hôtels rentables et innovants, en conformité avec les normes nord-américaines et internationales.",
    aboutLinkLabel: "À propos du Groupe ADC",
    alainTitle: "Président, Groupe ADC",
  },
  en: {
    titleSmall: "Hospitality consultant and manager with",
    titleBig: "EXPERIENCE",
    highlights: [
      {
        description: "Clients served per month in our establishments",
        linkLabel: "Our services",
      },
      {
        description: "Working in our field since",
        linkLabel: "Our story",
      },
      {
        description: "Value of projects supervised to date",
        linkLabel: "Our projects",
      },
    ],
    serviceTitle: "Services offered",
    serviceLinkLabel: "All details on services",
    services: [
      {
        description:
          "Project management for construction, expansion or renovation",
      },
      {
        description: "Hotel management including full accounting services",
      },
      {
        description:
          "Hiring and training of existing or future staff in case of new construction",
      },
    ],
    projectsTitle: "Overview of our projects",
    projectsLinkLabel: "See all our projects",
    aboutTitle: "The Group ADC",
    aboutP1:
      "Group ADC is a consulting firm specializing in hospitality. Its president, Alain Darras, has extensive experience in hotel management, having managed several establishments and overseen numerous hotel openings in Quebec, Ontario and New Brunswick. His expertise covers both project design and operations optimization and the implementation of high-performance teams.",
    aboutP2:
      "Recognized for his rigorous approach and vast network of professionals, he supports his clients in the development of profitable and innovative hotels, in compliance with North American and international standards.",
    aboutLinkLabel: "About Group ADC",
    alainTitle: "President, Group ADC",
  },
};
