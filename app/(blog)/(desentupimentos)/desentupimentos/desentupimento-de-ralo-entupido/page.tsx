import ContentHeader from "@/components/contenHeader";
import LocationLink from "@/components/LocationLink";
import Script from 'next/script';
import { Metadata } from 'next';
import { WithContext, Service } from "schema-dts";
import CTA from "@/components/cta";
import ListLink from "@/components/ListLink";
import TextLink from "@/components/textLink";

const jsonLd: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento de Ralo',
    description: 'Desentupimento de ralos externos e internos, residenciais, comerciais e industriais. Atendimento 24 horas em todo Rio.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Desentupidora Renovo',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Bráulio Cordeiro',
            addressLocality: 'Rio de Janeiro',
            addressRegion: 'RJ',            
            addressCountry: 'BR'
        },
        url: 'https://www.desentupidorarenovo.com.br',
        telephone: '+55214042-1046',        
    }
}

export const metadata: Metadata = {
    title: 'Desentupimento de Ralo | Desentupidora Renovo',
    description: 'Desentupimento de ralos externos e internos, residenciais, comerciais e industriais. Atendimento 24 horas em todo Rio.',
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-ralo-entupido`,
    },
}
export default async function Page() {
    return (
                <>
            <Script
                id="my-inline-script"
                strategy='lazyOnload'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                }}
            />
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Nossos Serviços', currentPage: 'Desentupimento de ralo entupido' }}
                title='Desentupimento de ralo'
                description='Desentupimento de ralos externos e internos, residenciais, comerciais e industriais. Atendimento 24 horas no Rio de Janeiro.'
            />  
            <LocationLink />
                <article>
                    <h1 className="text-xl font-semibold mb-4">Desentupidora Renovo: Especialista em Desentupimento de Ralos no Rio de Janeiro</h1>
                    <p>
                        A <TextLink href="/">Desentupidora Renovo</TextLink> é a escolha ideal para quem precisa de serviços de desentupimento de ralos em toda a região do Rio de Janeiro. Sabemos que ralos entupidos podem causar grandes transtornos, afetando o uso de pias, chuveiros e áreas externas. Por isso, oferecemos soluções rápidas, eficientes e acessíveis, utilizando <TextLink href="/posts/servicos-residenciais-de-desentupimento">equipamentos modernos e técnicas avançadas</TextLink>, para garantir a satisfação total dos nossos clientes.
                    </p>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Por Que Escolher a Desentupidora Renovo?</h2>
                    <p>
                        Com mais de 10 anos de experiência no mercado carioca, a Desentupidora Renovo se destaca por sua agilidade, eficiência e preços competitivos. Nossa equipe é formada por profissionais altamente qualificados, especializados no <TextLink href="/desentupimentos/desentupimento-de-ralo-entupido">desentupimento de ralos</TextLink> residenciais, comerciais e industriais. Utilizamos <TextLink href="/desentupimentos/desentupimento-comercial">tecnologias de ponta</TextLink> para resolver qualquer problema de obstrução, garantindo um serviço rápido e sem complicações.
                    </p>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Serviços de Desentupimento de Ralos Oferecidos</h2>
                    <ul className="mt-4 bg-darkTheme-bg p-6 rounded-md">
                        <ListLink href="/desentupimentos/desentupimento-de-pia">Desentupimento de Ralo de Pia</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-ralo-entupido">Desentupimento de Ralo de Chuveiro</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-ralo-entupido">Desentupimento de Ralo de Áreas Externas</ListLink>
                    </ul>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Benefícios de Escolher a Desentupidora Renovo</h2>
                    <p className="mt-4">
                        Ao contratar a Desentupidora Renovo para desentupir ralos, você contará com uma equipe de profissionais qualificados, além de serviço ágil e limpo!
                    </p>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Prevenção de Entupimentos</h2>
                    <p>
                        Além de resolver problemas de entupimento, oferecemos orientações para <TextLink href="/posts/desentupir-ralo-e-remover-cabelo">prevenir novos incidentes</TextLink>. Recomendamos a limpeza regular dos ralos e o uso de protetores para evitar que resíduos sólidos, como cabelos e restos de comida, causem novos bloqueios.
                    </p>                    

                </article>
                <CTA
                    title="Ralo entupido?"
                    description="Desentupir ralo nem sempre é uma tarefa fácil. Entre em contato conosco e solicite um orçamento sem compromisso."
                />
            </div>
        </>
    )
}