import CTA from '../cta';
import ListLink from '../ListLink';
import TextLink from '../textLink';
import { FaRegCheckCircle } from "react-icons/fa";

export default function DesentupimentoResidencial() {
    return (
        <section className="mt-6">            
            <p className="mb-4">
                Na <TextLink href="/">Desentupidora Renovo</TextLink>, estamos prontos para atender você a qualquer hora do dia ou da noite, incluindo fins de semana e feriados, sempre com agilidade e eficiência. Garantimos um <TextLink href="/orcamento">orçamento sem compromisso</TextLink>, proporcionando transparência e segurança em nossos serviços.
            </p>

            <h2 className="text-xl font-bold mb-4">Cobertura Completa no Rio de Janeiro</h2>
            <p className="mb-4">
                Atendemos rapidamente todas as regiões do Rio de Janeiro, incluindo zonas sul, norte, oeste e centro, para garantir que seu problema seja resolvido o mais rápido possível.
            </p>

            <h2 className="text-xl font-bold mb-4">Desentupimento de Esgoto Residencial</h2>
            <p className="mb-4">
                Nossos técnicos são especializados em realizar uma inspeção detalhada nas tubulações de esgoto, localizando e resolvendo a obstrução sem a necessidade de quebrar pisos ou azulejos. Utilizamos técnicas avançadas de desentupimento que garantem um desentupimento eficiente, preservando a integridade da sua residência.
            </p>

            <h3 className="text-lg font-bold mb-4">Nossos Serviços de Desentupimento</h3>
            <ul className="list-disc list-inside mb-4 bg-darkTheme-bg text-darkTheme-text rounded-md p-6">
                <ListLink href='/desentupimentos' >Desentupimento e raspagem de tubulações</ListLink>
                <ListLink href='/desentupimentos' >Limpeza de colunas coletoras de esgoto e águas pluviais</ListLink>
                <ListLink href='/desentupimentos' >Desentupimento de ramais de pia, ralo, tanque, vaso sanitário e lavatório</ListLink>
                <ListLink href='/desentupimentos' >Limpeza de fossa séptica, sumidouro, caixa de gordura e poços</ListLink>
            </ul>
            <h3 className="text-lg font-bold mb-4">Sintomas Comuns de Entupimento</h3>
            <p className="mb-4">
                Prevenir problemas maiores é sempre a melhor opção. Um dos sinais mais comuns de entupimento é a água escoando lentamente, o que indica uma possível obstrução nos canos. Caso observe entupimentos em pias, ralos, tanques ou vasos sanitários, evite utilizar objetos pontiagudos, como arames, para tentar resolver o problema, pois isso pode danificar as tubulações. Também não é recomendado o uso de <TextLink href="/desentupimento-com-produtos-quimicos">produtos químicos</TextLink>, que podem corroer os canos.
            </p>


            <h3 className="text-lg font-bold mb-4">Equipe Técnica Qualificada</h3>
            <p className="mb-4">
                Nossa equipe é composta por técnicos experientes e uniformizados, preparados para oferecer um atendimento profissional e de alta qualidade.
            </p>

            <CTA
                title="Precisa de Desentupir em sua Residencia?"
                description="Entre em contato conosco e solicite um orçamento sem compromisso."
            />

            <h2 className="text-xl font-bold mb-4">Desentupidora 24 Horas no Rio de Janeiro</h2>
            <p className="mb-4">
                Seja qual for o seu problema de entupimento, a Desentupidora Renovo está disponível <TextLink href="/desentupidora-24-horas-rio-de-janeiro">24 horas por dia</TextLink>, todos os dias da semana, para atender a todas as regiões do Rio de Janeiro com rapidez e eficiência. Conte conosco para resolver seus problemas de forma eficaz e sem complicações.
            </p>
        </section>
    );
}


