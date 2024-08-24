import ContentHeader from "@/components/contenHeader";
import ServicesLink from "@/components/ServicesLink";
import { urlBase } from "@/lib/utils";
import Script from 'next/script';
import { Metadata } from 'next';
import { BreadcrumbList, Service, WithContext } from "schema-dts";
import CTA from "@/components/cta";

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupidora 24 horas no Rio de Janeiro',
    description: 'Desentupidora 24 horas no Rio de Janeiro, atendimento emergencial e serviços de desentupimento em geral.',
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
        telephone: '+55214042-1046'
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
        name: 'Desentupidora 24 horas no Rio de Janeiro',
        item: 'https://desentupidorarenovo.com.br/desentupidora-24-horas-rio-de-janeiro'
    }]
    }];

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: {
            template: `%s | Desentupidora Renovo`,
            default: 'Desentupidora 24 horas no Rio de Janeiro',
        },
        description: 'Desentupidora 24 horas no Rio de Janeiro, atendimento emergencial e serviços de desentupimento em geral.',
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: `${urlBase}/desentupidora-24-horas-rio-de-janeiro`,
        },
    };
}                   

export default function Desentupidora24HorasRJ() {
    return (
        <>
            <Script strategy="lazyOnload">
                {`
                    ${JSON.stringify(jsonLd)}
                `}
            </Script>
            <ContentHeader title="Desentupidora 24 horas no Rio de Janeiro"
                description={"Desentupidora 24 horas no Rio de Janeiro, atendimento emergencial e serviços de desentupimento em geral."}
                link={{
                    href: '',
                    label: 'Desentupidora 24 horas no Rio de Janeiro',
                    currentPage: 'Desentupidora 24 horas no Rio de Janeiro'
                }}
            />
            <ServicesLink />
            <article className=''>
                <h2 className='text-2xl font-bold'>Desentupidora 24 horas no Rio de Janeiro</h2>
                <p className='text-lg'>Disponíveis 24 horas por dia, 7 dias por semana, nossos serviços de desentupimento emergencial são a solução ideal para resolver problemas de entupimento em qualquer horário. Atendemos residências, comércios e indústrias em toda a cidade do Rio de Janeiro e região metropolitana.</p>
            </article>
            <CTA
                title="Precisa de uma desentupidora 24 horas no Rio de Janeiro?"
                description="Entre em contato com a Desentupidora Renovo e solicite um orçamento sem compromisso."
            />
        </>
    );
}