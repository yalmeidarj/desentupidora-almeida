import MainBanner from "../../components/MainBanner";
import ServicesSection from "../../components/ServicesSection";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";

import CTA from "@/components/cta";
import CallLandLineButton from "@/components/CallLandLineButton";
import { CiMail, CiPhone } from "react-icons/ci";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import MainSection from "@/components/mainSection";

export default async function Page() {

  return (
    <main className="min-h-screen">      
      <div className=" flex flex-col items-center justify-center  ">
        {/* <MainBanner />  */}
        <MainSection />
      <ServicesSection />
        <SobreNos />
      </div>
    </main>
  );
}


const SobreNos: React.FC = () => {
  return (
    <section className="py-16 ">
      <div className=" mx-auto px-4">
        <div className="">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Desentupidora Confiável no Rio de Janeiro ao Seu Serviço!
          </h2>
          <p className="text-gray-700 mb-6">
            É hora de agendar uma manutenção rotineira? Não consegue parar aquele vazamento incômodo? Precisa de desentupimento de emergência? Seja qual for o caso, Somos especialistas em desentupimento e estamos aqui para resolver o problema.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Conte com uma Desentupidora de confiança no Rio de Janeiro!
          </h3>
          <p className="text-gray-700 mb-6">
            Entre em contato e veja como podemos ajudar.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <Link href="tel:+552140421046" aria-label="Telefone" className="text-darkTheme-text bg-darkTheme-bg hover:bg-darkTheme-accent transition-colors duration-300 p-2 rounded" prefetch={false}>
              <CiPhone className="h-5 w-5" />
            </Link>
            <Link href="https://wa.me/5521966495454" aria-label="Whatsapp" className="text-darkTheme-text bg-darkTheme-bg hover:bg-darkTheme-accent transition-colors duration-300 p-2 rounded" prefetch={false}>
              <FaWhatsapp className="h-5 w-5" />
            </Link>
            <Link href="mailto:desentupidorarenovo.rj@gmail.com" aria-label="Email" className="text-darkTheme-text bg-darkTheme-bg hover:bg-darkTheme-accent transition-colors duration-300 p-2 rounded" prefetch={false}>
              <CiMail className="h-5 w-5" />
            </Link>
          </div>
          {/* <div className="mt-8">
            <CallLandLineButton
              phoneNumber="4042-1046"             
            />

          </div> */}
          <CTA
            title="Precisa desentupir?"
            description="Entre em contato conosco e solicite um orçamento sem compromisso."            
           />
        </div>
      </div>
    </section>
  );
};


