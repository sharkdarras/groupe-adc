import { Locale } from "@/locales";
import CompanyHighlightBox from "./company-highlight-box";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <div
      style={{ backgroundImage: `url(/assets/hotel.jpeg)` }}
      className="lg:h-[750px] bg-cover bg-center wrapper relative z-0"
    >
      <div className="h-[400px] bg-linear-to-t from-darkgray to-transparent w-full absolute bottom-0 left-0 right-0"></div>

      <div className="pt-[160px] pb-12 px-8 wrapped text-white flex flex-col-reverse lg:flex-row justify-between lg:items-end relative">
        <div className="mt-8 lg:mt-0">
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
  },
};
