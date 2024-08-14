import ContentHeader from "@/components/contenHeader";
import ServicesLink from "@/components/ServicesLink";
import ZoneDescription from "@/components/ZoneDescription";
import { areasDeAtendimento } from "@/lib/utils";
import { Service,BreadcrumbList, WithContext } from 'schema-dts';
import Script from 'next/script';
import { Metadata } from 'next';

const jsonLd: WithContext<Service |BreadcrumbList>[] = [{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://desentupidorarenovo.com.br"
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Desentupimentos em todo Rio de Janeiro",
        "item": "https://desentupidorarenovo.com.br/rj"
    }, {
        "@type": "ListItem",
        "position": 3,
        "name": "Desentupidora Zona Sul RJ",
        "item": "https://desentupidorarenovo.com.br/rj/desentupidora-zona-sul-rj"
    }]
}, {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desentupimento na Zona Sul RJ",
    "description": "Desentupimentos na Zona Sul do Rio. A Desentupidora Renovo é especialista em desentupimentos na Zona Sul RJ. Atendimento 24 horas, chegamos em seu local rápido!",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Desentupidora Renovo",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Bráulio Cordeiro",
            "addressLocality": "Rio de Janeiro",
            "addressRegion": "RJ",
            "addressCountry": "BR"
        },
        "telephone": "+55214042-1046"
    }
}];
    

const urlBase = 'https://desentupidorarenovo.com.br';
export async function generateMetadata(): Promise<Metadata> {
    
    return {
        title: {
            template: `%s | Desentupidora Renovo`,
            default: 'Desentupimento na Zona Sul RJ',
        },
        description: "Desentupidora em Botafogo, Lagoa, Leblon, Copacabana, Ipanema e mais. Desentupidora Renovo, 24h na Zona Sul do Rio.",
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: `${urlBase}/rj/zona-sul-rj`,
        },
        // openGraph: {
        //     images: [
        //         {
        //             url: 'https://desentupidorarenovo.com.br/images/desentupimento-de-coluna.jpg',
        //             width: 800,
        //             height: 600,
        //             alt: 'Desentupimento de Coluna',
        //         },
        //     ],
        // },
    };
};

export default async function Page() {

    // Filter the areas to get only the "Zona Sul" zone
    const zonaSul = areasDeAtendimento.filter(area => area.zone === "Zona Sul");
    // Get the neighborhoods of the "Zona Sul" zone
    const neighborhoods = zonaSul[0].neighborhoods;

    return (
        <>
            <Script
                id="my-inline-script"
                strategy="lazyOnload"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
            }}
        />
        <div className='container min-h-screen'>
            <ContentHeader
                title='Zona Sul RJ'
                description='Desentupimentos na Zona Sul do Rio. A Desentupidora Renovo é especialista em desentupimentos na Zona Sul RJ. Atendimento 24 horas, chegamos em seu local rápido!'
                link={{ href: '/rj', label: 'Rio de Janeiro', currentPage: 'Áreas de Atendimento' }}
            />
            <ServicesLink />
            <ZoneDescription
                descritption="Conheçemos as peculiariades de cada bairro da Zona Sul, nossos técnicos já realizaram inúmeros serviços de desentupimento na região. Por isso, podemos garantir um atendimento rápido e eficiente, sem sujeira e com garantia de satisfação."
                neighborhoods={neighborhoods}
                />
        </div>
                </>
    );
}

