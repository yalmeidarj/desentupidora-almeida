import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Loading from "./loading";
import Script from "next/script";
import { WithContext, LocalBusiness } from "schema-dts";

const jsonLd: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Desentupidora Renovo",
    "description": "A Desentupidora Renovo oferece serviços profissionais de desentupimento para residências e comércios, incluindo atendimento emergencial 24 horas no Rio de Janeiro.",
    "url": "https://desentupidorarenovo.com.br",
    "telephone": "+55 21 4042-1046",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Bráulio Cordeiro",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ",
        "postalCode": "20975-090",
        "addressCountry": "BR"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
        "https://x.com/desentupirenovo"
    ],
    "logo": "/logo-desentupidora-light.png",
    "priceRange": "$"
};

export async function generateMetadata(): Promise<Metadata> {

    const title = "Desentupidora Renovo";
    const description = "Dicas e informações sobre desentupimento e serviços de desentupidora no Rio de Janeiro.";

    return {
        title: {
            template: `%s | ${title}`,
            default: title,
        },
        keywords: ['desentupidora', 'desentupimento', 'desentupidora rj'],
        alternates: {
            canonical: "https://desentupidorarenovo.com.br",
        },
        robots: {
            index: true,
            follow: true,
        },
        description: description,
        openGraph: {
            images: [
                {
                    url: '/logo-desentupidora-light.png',
                    width: 1200,
                    height: 630,
                    alt: "Logo Desentupidora Renovo"
                }
            ],
        },
    };
}

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});


export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={`${inter.variable} `}>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <body className='bg-darkTheme-mainBg '>               
                <section className=" gap-4 min-h-screen flex flex-col justify-between">
                    <NavBar />
                    <div className='md:pt-8 md:mt-[10rem] pt-6 mt-[6rem]'>
                        <Suspense fallback={<Loading />} >
                            {children}
                        </Suspense>
                    </div>
                    <Footer />
                </section>
                <div className="fixed bottom-4 right-4 z-50">                    
                    <WhatsAppButton />                    
                </div>
            </body>
        </html>
    );
}