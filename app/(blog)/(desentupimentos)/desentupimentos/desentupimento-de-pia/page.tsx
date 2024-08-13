import ContentHeader from "@/components/contenHeader";
import TextLink from "@/components/textLink";
import Script from 'next/script';
import { Metadata } from 'next';
import { WithContext, Service } from "schema-dts";
import CTA from "@/components/cta";
import ListLink from "@/components/ListLink";

const jsonLd: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento de Pia',
    description: 'Desentupimento de pia de cozinha, desentupimento de pia de banheiro e lavanderia. Atendimento 24 horas em toda a região.',
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
        url: 'https://www.desentupidorarenovo.com.br',
        telephone: '+55214042-1046',        
    }
}

export const metadata: Metadata = {
    title: 'Desentupimento de Pia | Desentupidora Renovo',
    description: 'Desentupimento de pia de cozinha, banheiro e lavanderia. Atendimento 24 horas em toda a região.',
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-pia`,
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
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupimentos', currentPage: 'Desentupimento de pia' }}
                title='Desentupimento de pia'
                description='Desentupimento de pia de cozinha, banheiro e lavanderia. Atendimento 24 horas em toda a região.'
                />
                <article>
                    <p>
                        Quando a pia da cozinha ou do banheiro resolve entupir, o caos se instala. Na cozinha, pilhas de louça se acumulam; no banheiro, um entupimento não só interrompe a rotina diária de higiene, mas uma pia transbordando tem a capacidade de mudar seu dia.
                    </p>
                    <p className="mt-4">
                        Se você está enfrentando um entupimento de pia, mantenha a calma. A <TextLink href="/desentupimentos/desentupimento-de-pia">Desentupidora Renovo</TextLink> é especialista em desentupimento de pias, oferecendo soluções rápidas e eficazes.
                    </p>
                    <p className="mt-4">
                        Nossa equipe é altamente qualificada e está preparada para lidar com desentupimentos em pias de cozinhas, banheiros, lavatórios e tanques. Contamos com profissionais experientes que resolvem o seu problema com rapidez, higiene e sem causar danos ao seu imóvel.
                    </p>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Atendimento 24 Horas para Desentupimento de Pia</h2>
                    <p>
                        Sabemos que pias podem entupir a qualquer momento, e por isso, estamos prontos para atender emergências em sua casa ou empresa, garantindo um <TextLink href="/desentupimentos/desentupimento-emergencial">serviço eficiente</TextLink> quando você mais precisa.
                    </p>
                    <h2 className="text-lg font-semibold mt-6 mb-4">Áreas de Atendimento</h2>
                    <p>Atendemos a diversos tipos de locais, incluindo:</p>
                    <ul className="bg-darkTheme-bg p-6 rounded-md mt-4">
                        <ListLink href="/desentupimentos/desentupimento-residencial">Residências (casas e apartamentos)</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-comercial">Condomínios (horizontais e verticais)</ListLink>
                        <ListLink href="/desentupimentos/desentupimento-comercial">Comércios (lojas, restaurantes, academias, hotéis, escolas, clínicas, hospitais, etc.)</ListLink>
                        {/* <ListLink href="/desentupimentos/desentupimento-industrial">Indústrias</ListLink> */}
                    </ul>                    
                </article>
                <CTA
                    title="Precisa desentupir a pia?"
                    description="Entre em contato conosco e solicite um orçamento sem compromisso."
                />
        </div>
                </>
    )
}