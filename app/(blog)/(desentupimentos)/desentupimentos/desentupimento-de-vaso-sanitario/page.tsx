import ContentHeader from "@/components/contenHeader";
import Script from 'next/script';
import { Metadata } from 'next';
import { WithContext, Service, BreadcrumbList } from "schema-dts";
import CTA from "@/components/cta";
import ListLink from "@/components/ListLink";
import TextLink from "@/components/textLink";
import Link from "next/link";

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento de Vaso Sanitário',
    description: 'Precisa de uma desentupidora de vaso sanitário no Rio de Janeiro? A Desentupidora Renovo oferece serviços rápidos e garantidos. Ligue agora e resolva seu problema!',
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
},
{
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
        name: 'Desentupimento de Vaso Sanitário',
        item: 'https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-vaso-sanitario'
    }]
}];

export const metadata: Metadata = {
    title: 'Desentupimento de Vaso Sanitário | Desentupidora Renovo',
    description: 'Desentupimento de vaso sanitário em residências, comércios e indústrias. Atendimento 24 horas no rj.',
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-vaso-sanitario`,
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
        <div className='container min-h-[80vh] '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupimentos', currentPage: 'Desentupimento de vaso sanitário' }}
                title='Desentupimento de vaso sanitário'
                description='Desentupimento de vaso sanitário em residências, comércios e indústrias. Atendimento 24 horas no rj.'
                />
                
                <article>
                    <h1 className="text-xl font-semibold mb-4">Desentupidora de Vaso Sanitário no Rio de Janeiro | Serviço Rápido e Garantido</h1>
                    <p>
                        Se você está enfrentando problemas com um vaso sanitário entupido, sabe o quanto essa situação pode ser incômoda e urgente. Além de causar mau cheiro, o entupimento pode levar a transbordamentos e até danificar o <TextLink href="/desentupimentos/desentupimento-de-esgoto">sistema de esgoto</TextLink> da sua casa. Por isso, contar com uma empresa especializada como a <TextLink href="/">Desentupidora Renovo</TextLink> no Rio de Janeiro é essencial para resolver o problema de forma rápida e eficiente.
                    </p>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Quem Somos</h2>
                    <p>
                        A Desentupidora Renovo é referência no mercado carioca, oferecendo serviços de <TextLink href="/desentupimentos/desentupimento-de-vaso-sanitario">desentupimento de vaso sanitário</TextLink> e outras soluções para problemas de esgoto. Com mais de 10 anos de experiência, nossa equipe é composta por profissionais altamente treinados e equipados garantir que seu vaso sanitário esteja em pleno funcionamento em pouco tempo.
                    </p>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Por Que o Vaso Sanitário Entope?</h2>
                    <ul className="mt-4">
                        <li className="text-darkTheme-secondary " >Acúmulo de Papel Higiênico</li>
                        <li className="text-darkTheme-secondary " >Objetos Estranhos</li>
                        <li className="text-darkTheme-secondary " >Gordura e Resíduos</li>
                        <li className="text-darkTheme-secondary " >Instalação Incorreta</li>
                    <Link
                        href="/posts/o-que-fazer-quando-o-vaso-sanitario-entope"
                        >
                            <li
                                className="underline text-darkTheme-bg hover:text-darkTheme-accent"
                            >
                                Veja o que Fazer Quando o Vaso Sanitário Entope
                            </li>
                    </Link>
                    </ul>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Como Prevenir Entupimentos Futuros</h2>
                    <p>
                        Além de resolver o problema, a Desentupidora Renovo também oferece dicas para evitar futuros entupimentos:
                    </p>

                    <h2 className="text-lg font-semibold mt-6 mb-4">Lembre-se e evite vaso sanitário entupido!</h2>
                    <ul className="mt-4 bg-darkTheme-bg p-6 rounded-md">
                        <ListLink href="/posts/o-que-fazer-quando-o-vaso-sanitario-entope">Evite Descartar Objetos no Vaso</ListLink>
                        <ListLink href="/posts/o-que-fazer-quando-o-vaso-sanitario-entope">Limpeza Regular</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-vaso-sanitario">Manutenção Preventiva</ListLink>
                    </ul>                    
                </article>
                <CTA
                    title='Precisa desentupir vaso sanitário?'
                    description='Entre em contato com a Desentupidora Renovo e solicite um orçamento gratuito.'                   
                />
        </div>
        </>
    )
}