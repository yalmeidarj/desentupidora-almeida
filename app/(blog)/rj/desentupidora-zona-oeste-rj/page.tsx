import ContentHeader from "@/components/contenHeader";
import ServicesLink from "@/components/ServicesLink";
import ZoneDescription from "@/components/ZoneDescription";
import { areasDeAtendimento } from "@/lib/utils";

import { Service, BreadcrumbList, WithContext } from 'schema-dts';
import Script from 'next/script';
import { Metadata } from 'next';
import { urlBase } from '@/lib/utils';

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento na Zona Oeste RJ',
    description: 'Desentupimentos na Zona Oeste do Rio. A Desentupidora Renovo é especialista em desentupimentos na Zona Sul RJ. Atendimento 24 horas, chegamos em seu local rápido!',
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
        name: 'Desentupimentos em todo Rio de Janeiro',
        item: 'https://desentupidorarenovo.com.br/rj'
    }, {
        '@type': 'ListItem',
        position: 3,
        name: 'Desentupidora Zona Oeste RJ',
        item: 'https://desentupidorarenovo.com.br/rj/desentupidora-zona-oeste-rj'
    }]
    }];

export const metadata: Metadata = {
    title: 'Desentupimento na Zona Oeste RJ | Desentupidora Renovo',
    description: 'Desentupimentos na Zona Oeste do Rio. A Desentupidora Renovo é especialista em desentupimentos na Zoan Oeste RJ. Atendimento 24 horas, chegamos em seu local rápido!',
    alternates: {
        canonical: `${urlBase}/rj/desentupidora-zona-oeste-rj`,
    },
}

export default async function Page() {
    // Filter the areas to get only the "Zona Oeste" zone
    const zonaOeste = areasDeAtendimento.filter(area => area.zone === "Zona Oeste");
    // Get the neighborhoods of the "Zona Oeste" zone
    const neighborhoods = zonaOeste[0].neighborhoods;

    return (
        <div className='container min-h-[80vw] md:min-h-[40vw] '>
            <Script
                strategy='lazyOnload'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContentHeader
                title='Zona Oeste RJ'
                description='Desentupimentos na Zona Oeste do Rio. A Desentupidora Renovo é especialista em desentupimentos na Zona Oeste RJ. Atendimento 24 horas, chegamos em seu local rápido!'
                link={{ href: '/rj', label: 'Rio de Janeiro', currentPage: 'Áreas de Atendimento' }}
            />
            <ServicesLink />
            <ZoneDescription
                descritption="Conheçemos as peculiariades de cada bairro da Zona Oeste, nossos técnicos já realizram inúmeros serviços de desentupimento na região. Por isso, podemos garantir um atendimento rápido e eficiente, sem sujeira e com garantia de satisfação."                
                neighborhoods={neighborhoods}
            />
        </div>
    );
}