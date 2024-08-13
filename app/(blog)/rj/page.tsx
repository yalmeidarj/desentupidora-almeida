import ContentHeader from "@/components/contenHeader";
import CTA from "@/components/cta";
import ServicesLink from "@/components/ServicesLink";
import { areasDeAtendimento } from "@/lib/utils";
import Link from "next/link";
import { Service, BreadcrumbList, WithContext } from 'schema-dts';
import Script from 'next/script';
import { Metadata } from 'next';

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimentos em todo Rio de Janeiro',
    description: 'Desentupimentos em todo Rio de Janeiro. A Desentupidora Renovo é especialista em desentupimentos em todo Rio de Janeiro. Atendimento 24 horas, chegamos em seu local rápido!',
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
        name: 'Áreas de Atendimento',
        item: 'https://desentupidorarenovo.com.br/rj'
    }]
    }];

export const metadata: Metadata = {
    title: 'Desentupimentos em todo Rio de Janeiro | Desentupidora Renovo',
    description: 'Desentupimentos em todo Rio de Janeiro. A Desentupidora Renovo é especialista em desentupimentos em todo Rio de Janeiro. Atendimento 24 horas, chegamos em seu local rápido!',
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/rj`,
    },
}

export default async function Page() {
    return (
        <section className='container min-h-[80vw] md:min-h-[40vw]'>
            <Script
                id="my-inline-script"
                strategy='lazyOnload'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                }}
            />
            <ContentHeader
                title='Onde atendemos'
                description='Estamos preparados para atender todo Rio e Grande Rio. Veja abaixo a lista de regiões atendidas.'
                link={{ href: '/desentupimentos', label: 'Rio de Janeiro', currentPage: 'Áreas de Atendimento' }}
            />
            <ServicesLink />
            <div className='w-full flex flex-col gap-4'>
                <ul className='grid grid-cols-2 gap-4'>
                    {areasDeAtendimento.map((area) => (
                        <li key={area.zone} className='bg-darkTheme-bg p-4 rounded-md shadow-md'>
                            <Link href={area.link} className='text-darkTheme-text hover:text-darkTheme-primary'>
                                <h3 className='text-lg font-semibold'>{area.zone}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
                <CTA
                    title='Desentupimento no RJ?'
                    description='Pontos de apoio em todas as áreas do Rio de Janeiro nos possibilitam atender com rapidez e eficiência em qualquer região.'
                />
            </div>
        </section>
    )
}
