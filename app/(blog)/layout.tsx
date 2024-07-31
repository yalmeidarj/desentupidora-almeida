import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Suspense } from "react";

import AlertBanner from "./alert-banner";
import PortableText from "./portable-text";

import type { SettingsQueryResult } from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";

// export async function generateMetadata(): Promise<Metadata> {
//   const settings = await sanityFetch<SettingsQueryResult>({
//     query: settingsQuery,
//     // Metadata should never contain stega
//     stega: false,
//   });
//   const title = settings?.title || demo.title;
//   const description = settings?.description || demo.description;

//   const ogImage = resolveOpenGraphImage(settings?.ogImage);
//   let metadataBase: URL | undefined = undefined;
//   try {
//     metadataBase = settings?.ogImage?.metadataBase
//       ? new URL(settings.ogImage.metadataBase)
//       : undefined;
//   } catch {
//     // ignore
//   }
//   return {
//     metadataBase,
//     title: {
//       template: `%s | ${title}`,
//       default: title,
//     },
//     description: toPlainText(description),
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//   };
// }
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
    <html lang="pt-br" className={`${inter.variable} `}>
      <body className='bg-darkTheme-mainBg '>
        <section className=" gap-4">
          
          <NavBar />
            {draftMode().isEnabled && <AlertBanner />}
          <div className='pt-12 mt-16'>
          <Suspense>
            {children}
          </Suspense>
          </div>
        </section>
        {draftMode().isEnabled && <VisualEditing />}
      <Footer />
        <SpeedInsights />
      </body>

    </html>
  );
}
