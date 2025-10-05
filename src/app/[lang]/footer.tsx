import { Locale } from "@/locales";

export default function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="text-white p-4 pt-12 wrapper">
      <div className="bg-darkgray pt-12 px-4 pb-4 wrapped text-center">
        <span>{texts[lang].copyrightLine}</span>
      </div>
    </footer>
  );
}

const texts = {
  fr: {
    copyrightLine: "© 2025 Groupe ADC inc. | Tous droits réservés.",
  },
  en: {
    copyrightLine: "© 2025 Groupe ADC inc. | All rights reserved.",
  },
};
