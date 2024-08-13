import ContentHeader from "@/components/contenHeader";
import TextLink from "@/components/textLink";
import Script from 'next/script';
import { Metadata } from 'next';
import { WithContext, Service } from "schema-dts";
import CTA from "@/components/cta";

const jsonLd: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento de Esgoto',
    description: 'Desentupimento de esgoto é um serviço essencial para manter a higiene e o bom funcionamento de sua residência ou empresa. A Desentupidora Renovo é especialista em desentupimento de esgoto, com equipamentos modernos e equipe treinada para resolver o problema de forma rápida e eficiente.',
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
        telephone: '+55214042-1046',        
    }
}

export const metadata: Metadata = {
    title: 'Desentupimento de Esgoto | Desentupidora Renovo',
    description: 'Desentupimento de esgoto é um serviço essencial para manter a higiene e o bom funcionamento de sua residência ou empresa. A Desentupidora Renovo é especialista em desentupimento de esgoto, com equipamentos modernos e equipe treinada para resolver o problema de forma rápida e eficiente.',
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-esgoto`,
    },
}
export default async function Page() {
    return (
        <>
            <Script
                strategy='lazyOnload'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                }}
            />                
        <div className='container min-h-screen '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Home', currentPage: 'Desentupimento de Esgoto' }}
                title='Desentupimento de Esgoto'
                description='Desentupimento de esgoto é um serviço essencial para manter a higiene e o bom funcionamento de sua residência ou empresa. A Desentupidora Renovo é especialista em desentupimento de esgoto, com equipamentos modernos e equipe treinada para resolver o problema de forma rápida e eficiente.'
            />
            <p>
                O sistema de esgoto é uma parte essencial da infraestrutura de qualquer residência ou estabelecimento comercial. Ele é fundamental para garantir um ambiente saudável, prevenindo a contaminação e evitando transtornos diários que podem surgir devido a entupimentos. Por isso, a <TextLink href="/desentupimentos/desentupimento-de-esgoto">manutenção e o desentupimento regular do esgoto</TextLink> são práticas imprescindíveis.
            </p>
            <p className="mt-4">
                Atuando nas regiões
                <TextLink href="/rj/desentupidora-zona-sul-rj">sul</TextLink>,
                <TextLink href="/rj/desentupidora-zona-norte-rj">norte</TextLink>,
                <TextLink href="/rj/desentupidora-zona-oeste-rj">oeste</TextLink> e
                <TextLink href="/rj/desentupidora-centro-rj">centro do Rio de Janeiro</TextLink>, a <TextLink href="/">Desentupidora Renovo</TextLink> se destaca pela expertise em desentupimentos de todo tipo. Nossa equipe qualificada está sempre pronta para solucionar entupimentos de maneira ágil e eficaz, proporcionando tranquilidade e segurança aos nossos clientes.
                </p>
                <CTA
                    title="Precisa desentupir Esgoto?"
                    description="Entre em contato conosco e solicite um orçamento sem compromisso."
                />
        </div>
        </>
    )
}