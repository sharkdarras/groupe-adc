"use client";

import { useWindowDimensions } from "@/hooks/use-window-dimensions";
import { Locale } from "@/locales";
import Link from "next/link";
import { useState } from "react";

export default function Header({ lang }: { lang: Locale }) {
  const pageLabels = {
    fr: {
      services: "Services",
      projects: "Mandats",
      about: "À propos",
      contact: "Contact",
    },
    en: {
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
  };

  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 absolute w-full wrapper z-1">
      <div className="bg-lightgray p-6 px-8 md:flex justify-between items-center wrapped">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              src="/assets/logo-groupe-adc.png"
              alt="Groupe ADC Logo"
              className="h-18 md:h-20"
            />
          </Link>
          <img
            src="/assets/icons/menu.svg"
            alt="Navigation"
            className="h-6 md:hidden cursor-pointer"
            onClick={toggleIsMenuOpen}
          />
        </div>

        <div
          className="flex flex-col items-end overflow-hidden transition-all duration-500"
          style={{ maxHeight: isMenuOpen || width >= 768 ? "450px" : "0px" }}
        >
          <div className="flex items-center text-lg border-darkgray border-t-2 mt-6 pt-4 pb-2 md:p-0 md:m-0 md:border-0 w-full justify-center md:justify-end">
            <a href="tel:418-955-5653" className="font-bold">
              418 955-5653
            </a>
            <span className="mx-2">|</span>
            <img
              src="/assets/icons/linkedin.svg"
              alt="Page LinkedIn de Alain Darras"
              className="h-4"
            />
            <span className="mx-2">|</span>
            <div>
              <Link href={lang === "fr" ? "/en" : "/fr"}>
                {lang === "fr" ? "EN" : "FR"}
              </Link>
            </div>
          </div>
          <nav className="flex-col items-center md:flex-row w-full flex gap-4 text-xl mt-2">
            <Link href={`/${lang}/services`}>{pageLabels[lang].services}</Link>
            <Link href={`/${lang}/projects`}>{pageLabels[lang].projects}</Link>
            <Link href={`/${lang}/about`}>{pageLabels[lang].about}</Link>
            <Link href={`/${lang}/contact`}>{pageLabels[lang].contact}</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
