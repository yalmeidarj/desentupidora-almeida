import ContentHeader from "@/components/contenHeader";
import CTA from "@/components/cta";
import ListLink from "@/components/ListLink";
import TextLink from "@/components/textLink";
import { Service, BreadcrumbList, WithContext } from 'schema-dts';
import Script from 'next/script';
import { Metadata } from 'next';
import { urlBase } from '@/lib/utils';

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento de Fossa',
    description: 'Desentupimento de fossa é essencial para manter o bom funcionamento do sistema e evitar problemas de contaminação do solo e da água.',
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
        name: 'Desentupimentos',
        item: 'https://desentupidorarenovo.com.br/desentupimentos'
    }, {
        '@type': 'ListItem',
        position: 3,
        name: 'Desentupimento de Sumidouro',
        item: 'https://desentupidorarenovo.com.br/desentupimentos/limpeza-de-fossa-rj'
    }]
    }];

export default async function Page() {
    return (
        <div className='container min-h-[80vw] md:min-h-[40vw]'>
            <Script
                id="my-inline-script"
                strategy='lazyOnload'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                }}
            />
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupimentos', currentPage: 'Limpeza e Desentupimento de Fossas' }}
                title='Desentupimento de Fossa'
                description='Desentupimento de fossa é essencial para manter o bom funcionamento do sistema e evitar problemas de contaminação do solo e da água.'
            />
            <article className=''>
                
            </article>
            <CTA
                title='Precisa desentupir Fossa?'
                description='Entre em contato conosco e solicite um orçamento sem compromisso.'
            />
        </div>
    );
}