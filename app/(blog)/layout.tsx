import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Loading from "./loading";

export async function generateMetadata(): Promise<Metadata> {

    const title = "Desentupidora Renovo";
    const description = " Desentupidora Renovo é uma empresa especializada em desentupimento.";

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


export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={`${inter.variable} `}>
            <body className='bg-darkTheme-mainBg '>
                {/* {draftMode().isEnabled && <AlertBanner />} */}
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
                {/* {draftMode().isEnabled && <VisualEditing  />} */}
            </body>

        </html>
    );
}