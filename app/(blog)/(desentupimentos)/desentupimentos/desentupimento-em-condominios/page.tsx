import ListLink from "@/components/ListLink";
import TextLink from "@/components/textLink";
import Script from 'next/script';
import { Metadata } from 'next';
import { BreadcrumbList, WithContext, Service } from "schema-dts";
import CTA from "@/components/cta";
import ContentHeader from "@/components/contenHeader";

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento em Condomínios',
    description: 'Desentupidora Renovo oferece serviços de desentupimento em condomínios na Zona Sul, Zona Norte, Zona Oeste e Centro do Rio de Janeiro. Atendimento 24 horas.',
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
}, {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://desentupidorarenovo.com.br'
    }, {
        '@type': 'ListItem',
        position: 2,
        name: 'Desentupimentos',
        item: 'https://desentupidorarenovo.com.br/desentupimentos'
    }, {
        '@type': 'ListItem',
        position: 3,
        name: 'Desentupimento em Condomínios',
        item: 'https://desentupidorarenovo.com.br/desentupimentos/desentupimento-em-condominios'
    }]
}];

export const metadata: Metadata = {
    title: 'Desentupimento em Condomínios | Desentupidora Renovo',
    description: 'Desentupidora Renovo oferece serviços de desentupimento em condomínios na Zona Sul, Zona Norte, Zona Oeste e Centro do Rio de Janeiro. Atendimento 24 horas.',
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-em-condominios`,
    },
}


export default function Page() {
    return (
        <>
            <section className="container md:min-h-[40vw] min-h-[80vw]">
                <Script
                    id="my-inline-script"
                    strategy='lazyOnload'
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd)
                    }}
                />
                
                    <ContentHeader
                        link={{ href: '/desentupimentos', label: 'Desentupimentos', currentPage: 'Desentupimento em Condomínios' }}
                        title='Desentupimento em Condomínios'
                        description='Desentupidora Renovo oferece serviços de desentupimento em condomínios na Zona Sul, Zona Norte, Zona Oeste e Centro do Rio de Janeiro. Atendimento 24 horas.'
                    />
                <article className="">
                    <h1 className="text-xl font-semibold mb-4">Orçamento Sem Compromisso para Condomínios no Rio de Janeiro</h1>
                    <p>
                        Estamos prontos para atender condomínios em toda a <TextLink href="/rj/zona-sul-rj">Zona Sul</TextLink>, <TextLink href="/rj/zona-norte-rj">Zona Norte</TextLink>, <TextLink href="/rj/zona-oeste-rj">Zona Oeste</TextLink> e <TextLink href="/rj/centro-rj">Centro do Rio de Janeiro</TextLink>, 24 horas por dia, incluindo fins de semana e feriados.
                    </p>
                    {/* <p className="mt-4">
                        Srs. Síndicos e Zeladores: Solicitem agora seu <TextLink href="/orcamento-desentupidora-rj">orçamento sem compromisso</TextLink> e recebam um atendimento imediato e especializado!
                    </p> */}
                    <h2 className="text-lg font-semibold mt-6 mb-4">Serviços da Desentupidora Renovo para Condomínios</h2>
                    <ul className="mt-4 p-6 bg-darkTheme-bg rounded-md">
                        <ListLink href="/desentupimentos/desentupimento-tubulacoes-rj">Desentupimento e Raspagem</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-esgoto">Manutenção de Colunas Coletoras de Esgoto e Águas Servidas</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-esgoto">Limpeza de Colunas Coletoras de Águas Pluviais</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-pia">Desentupimento de Ramais (Pia, Ralo, Tanque, Vaso Sanitário e Lavatório)</ListLink>
                        <ListLink href="/desentupimentos/limpeza-de-fossa">Limpeza de Fossa Séptica e Sumidouro</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-caixa-gordura">Limpeza de Caixa de Gordura e Poço</ListLink>
                    </ul>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Equipe Técnica Altamente Especializada</h2>
                    <p>
                        Nossa equipe é composta por técnicos qualificados e uniformizados, preparados para entregar um serviço de excelência. Com mais de 20 anos de experiência, a <TextLink href="/">Desentupidora Renovo</TextLink> oferece segurança e conforto para os condomínios do Rio de Janeiro, garantindo um atendimento ágil e eficiente em todas as regiões da cidade.
                    </p>                    
                </article>
                <CTA
                    title='Precisa de desentupimento em seu condomínio?'
                    description='Entre em contato com a Desentupidora Renovo e solicite um orçamento gratuito.'
                />
                
        </section>
        </>
    );
}
