import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { LangParams } from "@/locales";

const kanit = Kanit({
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Groupe ADC",
  description:
    "Groupe ADC offre des services de consultation hôtelière pour la gestion, la conception et l’ouverture d’hôtels. Dirigé par Alain Darras, expert reconnu, nous accompagnons les hôteliers au Québec, en Ontario, en Alberta et au Nouveau-Brunswick avec des solutions stratégiques et conformes aux normes internationales.",
};

export default async function RootLayout({
  children,
  params,
}: React.PropsWithChildren<LangParams>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Groupe ADC" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${kanit.className} text-darkgray`}>
        <Header lang={lang}></Header>
        {children}
      </body>
    </html>
  );
}
