import ContentHeader from "@/components/contenHeader";
import CTA from "@/components/cta";
import ListLink from "@/components/ListLink";
import TextLink from "@/components/textLink";
import { Service, BreadcrumbList, WithContext } from 'schema-dts';
import Script from 'next/script';
import { Metadata } from 'next';


const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento de Caixa de Gordura',
    description: 'Desentupimento de caixa de gordura é essencial para manter o bom funcionamento do sistema e evitar problemas de contaminação do solo e da água.',
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
        name: 'Desentupimento de Caixa de Gordura',
        item: 'https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-caixa-de-gordura'
    }]
    }];

export const metadata: Metadata = {
    title: 'Desentupimento de Caixa de Gordura | Desentupidora Renovo',
    description: 'Desentupimento de caixa de gordura é essencial para manter o bom funcionamento do sistema e evitar problemas de contaminação do solo e da água.',
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-caixa-de-gordura`,
    },
}

export default async function Page() {
    return (
        <div className='container '>
            <Script
                strategy="lazyOnload"
                id="json-ld-desentupimento-de-caixa-de-gordura"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupimentos', currentPage: 'Desentupimento de caixa de gordura' }}
                title='Desentupimento de caixa de gordura'
                description='A caixa de gordura é um item essencial para o bom funcionamento da rede de esgoto de sua residência ou empresa. A Desentupidora Renovo é especialista em desentupimento de caixa de gordura, com equipamentos modernos e equipe treinada para resolver o problema de forma rápida e eficiente.'
            />
            <section className="">
                <article className="">
                    <h1 className="text-3xl font-bold text-darkTheme-text mb-6">Desentupimento e Limpeza de Caixa de Gordura para Residências e Empresas</h1>
                    <p className="leading-relaxed  mb-4">
                        A <TextLink href="/servicos/limpeza-de-caixa-de-gordura">caixa de gordura</TextLink> é uma das estruturas mais essenciais em qualquer imóvel, sendo fundamental manter a sua limpeza em dia. Localizada entre a pia da cozinha e a rede de esgoto ou fossa, ela desempenha um papel crucial ao separar a gordura da água descartada, prevenindo a obstrução dos canos.
                    </p>
                    <p className="leading-relaxed  mb-4">
                        Quando há acúmulo de gordura, pode ser necessário contratar um serviço especializado de <TextLink href="/servicos/desentupimento-de-caixa-de-gordura">desentupimento de caixa de gordura</TextLink>. O entupimento pode causar problemas sérios, como mau cheiro, retorno de dejetos e a proliferação de pragas.
                    </p>
                    <p className="leading-relaxed  mb-4">
                        Esses transtornos podem ser evitados com a <TextLink href="/servicos/limpeza-preventiva">manutenção preventiva</TextLink> adequada dessa estrutura, que limpa e filtra a água. Nossa equipe é altamente qualificada para atender a diferentes segmentos, utilizando equipamentos de ponta.
                    </p>
                    <p className="leading-relaxed  mb-6">
                        Na Desentupidora Renovo, sua satisfação é nossa prioridade. Oferecemos os melhores serviços de <TextLink href="/servicos/desentupimento-de-esgotos">desentupimento de esgotos</TextLink> em toda a Zona Sul do Rio de Janeiro.
                    </p>

                    <h2 className="text-2xl font-semibold text-darkTheme-text mb-4">Outros Serviços de Desentupimento e Limpeza</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 bg-darkTheme-bg p-6 rounded-md">
                        <ListLink href="/desentupimentos/desentupimento-de-esgoto">Desentupimento de esgoto em geral</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-fossa">Desentupimento de fossa</ListLink>
                        <ListLink href="/desentupimentos">Desentupimento de galerias</ListLink>
                        <ListLink href="/desentupimentos/limpeza-de-sumidouros">Limpeza de sumidouros</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-fossa">Limpeza de fossa</ListLink>                        
                        <ListLink href="/desentupimentos/desentupimento-de-coluna">Desentupimento de colunas</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-pia">Desentupimento e Limpeza de Pias</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-ralo-entupido">Desentupimento e Limpeza de Ralos</ListLink>
                        <ListLink href="/desentupimentos/limpeza-de-tanques">Desentupimento e Limpeza de Tanques</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-de-vaso-sanitario">Desentupimento e Limpeza de Vasos Sanitários</ListLink>
                    </ul>

                    <h2 className="text-2xl font-semibold text-darkTheme-text mb-4">Desentupimento de Caixa de Gordura: Quando é Necessário?</h2>
                    <p className="leading-relaxed  mb-4">
                        O <TextLink href="/desentupimentos/desentupimento-de-caixa-de-gordura">desentupimento de caixa de gordura</TextLink> pode ser necessário devido a descuidos ou ao descarte inadequado de óleos. Por ser uma estrutura obrigatória em todos os imóveis, desde condomínios até empresas, principalmente aquelas do setor alimentício que possuem regulamentações específicas, o serviço se torna essencial.
                    </p>
                    <p className="leading-relaxed  mb-4">
                        Se você precisa de um desentupimento de caixa de gordura rápido e eficiente no Rio de Janeiro, a Desentupidora Renovo é a sua melhor escolha. Oferecemos agilidade e qualidade em todos os nossos serviços, desde pequenos desentupimentos até a <TextLink href="/servicos/limpeza-de-sumidouros">limpeza de sumidouros</TextLink> e <TextLink href="/servicos/desentupimento-de-estacoes-de-esgoto">estações de esgoto</TextLink>.
                    </p>
                    <CTA 
                        title='Precisa de Desentupimento de Caixa de Gordura?'
                        description='Entre em contato com a Desentupidora Renovo e solicite um orçamento sem compromisso. Atendemos 24 horas por dia, 7 dias por semana em toda a Zona Sul do Rio de Janeiro.'

                    />
                </article>

            </section>            
        </div>
    )
}