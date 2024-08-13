import ContentHeader from "@/components/contenHeader";
import ServicesLink from "@/components/ServicesLink";
import ZoneDescription from "@/components/ZoneDescription";
import { areasDeAtendimento } from "@/lib/utils";
import Script from 'next/script';
import { Metadata } from 'next';
import { BreadcrumbList, Service, WithContext } from "schema-dts";

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento no Centro RJ',
    description: 'Desentupimentos no Centro do Rio. A Desentupidora Renovo é especialista em desentupimentos no Centro RJ. Atendimento 24 horas, chegamos em seu local rápido!',
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
        name: 'Desentupidora Centro RJ',
        item: 'https://desentupidorarenovo.com.br/rj/desentupidora-centro-rj'
        }]
}];
    
const urlBase = 'https://desentupidorarenovo.com.br';
export const metadata: Metadata = {
    title: 'Desentupimento no Centro RJ | Desentupidora Renovo',
    description: 'Desentupimentos no Centro do Rio. A Desentupidora Renovo é especialista em desentupimentos no Centro RJ. Atendimento 24 horas, chegamos em seu local rápido!',
    alternates: {
        canonical: `${urlBase}/rj/desentupidora-centro-rj`,
    },
}
export default async function Page() {
// Filter the areas to get only the "Centro" area
    const centro = areasDeAtendimento.filter(area => area.zone === "Centro");
// Get the neighborhoods of the "Centro" area
    const neighborhoods = centro[0].neighborhoods;

    return (
        <div className='container min-h-[80vw] md:min-h-[40vw]'>
            <Script
                id="my-inline-script"
                strategy="lazyOnload"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <ContentHeader
                title='Desentupidora no Centro RJ'
                description='Desentupimentos no Centro do Rio. A Desentupidora Renovo é especialista em desentupimentos no Centro RJ. Atendimento 24 horas, chegamos em seu local rápido!'
                link={{ href: '/rj', label: 'Rio de Janeiro', currentPage: 'Áreas de Atendimento' }}
            />
            <ServicesLink />
            <ZoneDescription
                descritption="Conheçemos as peculiariades de cada bairro do Centro, nossos técnicos já realizram inúmeros serviços de desentupimento na região. Por isso, podemos garantir um atendimento rápido e eficiente, sem sujeira e com garantia de satisfação."
                neighborhoods={neighborhoods}
            />
        </div>
    );
}