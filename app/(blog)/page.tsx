import MainBanner from "../../components/MainBanner";
import ServicesSection from "../../components/ServicesSection";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { Button } from "../../components/ui/button";


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
          <div className="flex flex-row gap-2 text-3xl">
          <IoLogoWhatsapp className="text-green-300 " />
          <IoIosMail className="text-gray-300 " />
            
          </div>
          <div className="mt-8">
            <Button
              className="bg-darkTheme-bg text-darkTheme-text
              hover:bg-darkTheme-accent hover:text-darkTheme-text transition-color
              flex flex-row gap-4">
              <FaPhone className="text-gray-300 " />
              <span>
              Ligue Agora
              </span>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};


export default async function Page() {

  return (
    <main className="min-h-screen">      
      <div className=" flex flex-col items-center justify-center  ">
      <MainBanner /> 
      <ServicesSection />
        <SobreNos />
      </div>
    </main>
  );
}

