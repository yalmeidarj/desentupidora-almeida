import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
  VisualEditing,
  toPlainText,
} from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Suspense } from "react";

import AlertBanner from "../app/(blog)/alert-banner";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

export async function generateMetadata(): Promise<Metadata> {

  const title = "Desentupidora Almeida";
  const description = " Desentupidora Almeida é uma empresa especializada em desentupimento.";

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} `}>
      <body className='bg-darkTheme-mainBg '>
        <section className=" gap-4 min-h-screen flex flex-col justify-between">
          
          <NavBar />
            {draftMode().isEnabled && <AlertBanner />}
          <div className='pt-12 mt-16'>
          <Suspense>
            {children}
          </Suspense>
          </div>
        {draftMode().isEnabled && <VisualEditing />}
      <Footer />
        </section>
        <SpeedInsights />
      </body>

    </html>
  );
}
