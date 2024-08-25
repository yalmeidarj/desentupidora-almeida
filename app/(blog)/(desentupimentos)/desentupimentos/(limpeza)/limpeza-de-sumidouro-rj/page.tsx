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
    name: 'Desentupimento de Sumidouro',
    description: 'Desentupimento de sumidouro é essencial para manter o bom funcionamento do sistema e evitar problemas de contaminação do solo e da água.',
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
        telephone: ["+55 21 4042-1046", "+55 21 98883-5428"]
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
        item: 'https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-sumidouro-rj'
    }]
    }];


export const metadata: Metadata = {
    title: 'Desentupimento de Sumidouro | Desentupidora Renovo',
    description: 'Desentupimento de sumidouro é essencial para manter o bom funcionamento do sistema e evitar problemas de contaminação do solo e da água.',
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-sumidouro-rj`,
    },
}

export default async function Page() {
    return (
        <div className='container min-h-[80vw] md:min-h-[40vw]'>
            <Script
                id="json-ld"
                strategy='lazyOnload'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                }}
            />
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupimentos', currentPage: 'Desentupimento de sumidouro' }}
                title="Desentupimento de sumidouro"
                description="O sumidouro é um sistema de esgoto ecológico, que permite a infiltração da água no solo. O desentupimento de sumidouro é essencial para manter o bom funcionamento do sistema e evitar problemas de contaminação do solo e da água."
            />
        
            <section className="">
                <article className="">
                    <p>
                        Sumidouros são essenciais para a gestão de resíduos, mas podem enfrentar entupimentos devido a vários fatores, como chuvas intensas que sobrecarregam as fossas, fissuras que levam ao desmoronamento das paredes internas ou até mesmo vazamentos em tubulações de água.
                    </p>
                    <p>
                        Para prevenir esses problemas, a <TextLink href="/desentupimentos/limpeza-de-sumidouros">limpeza regular dos sumidouros</TextLink> é fundamental. Esse procedimento, quando realizado corretamente, inclui também a <TextLink href="/desentupimentos/desentupimento-de-caixa-de-gordura">limpeza das canalizações conectadas</TextLink>, garantindo o bom funcionamento de todo o sistema.
                    </p>
                    <p>
                        Após a primeira limpeza, é normal que o intervalo até o próximo enchimento da fossa seja menor do que o período inicial. Por isso, é importante não esperar que o entupimento aconteça. Entre em contato com a <TextLink href="/">Desentupidora Renovo</TextLink> e agende uma visita para esvaziar e higienizar seu sumidouro.
                    </p>
                    <p>
                        Atendemos em todas as regiões do Rio de Janeiro, incluindo a <TextLink href="/rj/desentupidora-zona-oeste-rj">Barra da Tijuca</TextLink>, oferecendo nossos serviços para diversos segmentos, como comércios, indústrias e residências.
                    </p>
                    <p>
                        Além da <TextLink href="/desentupimentos/limpeza-de-fossa">limpeza de fossas sépticas</TextLink> e <TextLink href="/desentupimentos/desentupimento-de-esgoto">desentupimento de esgoto</TextLink>, disponibilizamos contratos de manutenção periódica para aqueles que necessitam de serviços regulares, garantindo tranquilidade e eficiência contínua.
                    </p>

                    <CTA 
                        title="Precisa de desentupimento de sumidouro?"
                        description="Entre em contato conosco e solicite um orçamento sem compromisso."
                    />

                    <h2>Limpeza de Sumidouros com Segurança e Qualidade</h2>
                    <p>
                        Garantimos a imunização e desinfecção completa do local, eliminando riscos à saúde e preservando o meio ambiente, sempre com a mais alta qualidade e segurança.
                    </p>
                    <p>
                        Solicite seu orçamento agora mesmo <TextLink href="/contato">clicando aqui</TextLink> e fale conosco!
                    </p>
                </article>
            </section>
        </div>
    )
}