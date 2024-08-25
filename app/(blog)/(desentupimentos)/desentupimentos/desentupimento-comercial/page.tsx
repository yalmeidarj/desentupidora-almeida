import ContentHeader from "@/components/contenHeader";
import { Service, WithContext } from 'schema-dts';
import Script from 'next/script';
import { Metadata } from 'next';
import TextLink from "@/components/textLink";
import CTA from "@/components/cta";
import ListLink from "@/components/ListLink";

const jsonLd: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento Comercial',
    description: 'Atendemos a empresas, condomínios, escolas, hospitais, hotéis, restaurantes e outros estabelecimentos comerciais. Garatimos o bom funcionamento de seu estabelecimento.',
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
        telephone: ["+55 21 4042-1046", "+55 21 98883-5428"],
    }
}

export const metadata: Metadata = {
    title: 'Desentupimento Comercial | Desentupidora Renovo',
    description: 'Atendemos a empresas, condomínios, escolas, hospitais, hotéis, restaurantes e outros estabelecimentos comerciais. Garatimos o bom funcionamento de seu estabelecimento.',
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-comercial`,
    },
}

export default async function Page() {
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupimento', currentPage: 'Desentupimento Comercial' }}
                title='Desentupimentos Comerciais'
                description='Atendemos a empresas, condomínios, escolas, hospitais, hotéis, restaurantes e outros estabelecimentos comerciais. Garatimos o bom funcionamento de seu estabelecimento.'
            />
            <Script
                strategy='lazyOnload'
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                }}
            />
            <section>
                <p>
                    Estamos prontos para atender sua empresa com visita gratuita e orçamento sem compromisso. A <TextLink
                        href="/">
                            Desentupidora Renovo</TextLink> opera 24 horas por dia.
                </p>
                <p className="mt-4">
                    Atendemos com rapidez e eficiência as empresas localizadas nas
                    <TextLink href="/rj/desentupidora-zona-sul-rj"> zonas sul</TextLink>,
                    <TextLink href="/rj/desentupidora-zona-norte-rj"> norte</TextLink>,
                    <TextLink href="/rj/desentupidora-zona-oeste-rj"> oeste</TextLink> e
                    <TextLink href="/rj/desentupidora-centro-rj"> centro do Rio de Janeiro</TextLink>.
                </p>
                <h2 className="text-lg font-semibold mt-6 mb-4">Solicite seu Orçamento</h2>
                <p>
                    Se você faz parte do departamento de compras ou manutenção, entre em contato conosco para solicitar um
                    orçamento sem compromisso
                </p>
                <CTA
                    title="Desentupimento 24Horas para Empresas no Rio de Janeiro"
                    description="Visita gratuita e orçamento sem compromisso! Atendemos sua empresa com rapidez e eficiência nas zonas sul, norte, oeste e centro do Rio de Janeiro. Entre em contato agora e resolva o problema de entupimento com a Desentupidora Renovo."
                />
                <h2 className="text-lg font-semibold mt-6 mb-4">Serviços Especializados para Empresas</h2>
                <ul className="p-6 rounded-md bg-darkTheme-bg" >
                    <ListLink href="/desentupimentos">Desentupimento e raspagem de tubulações</ListLink>
                    <ListLink href="/desentupimento-de-esgoto">Coluna coletora de esgoto de águas servidas</ListLink>                    
                    <ListLink href="/desentupimento-de-pia">Desentupimento de ramais de pia, ralo, tanque, vaso sanitário e lavatório</ListLink>
                    <ListLink href="/limpeza-de-fossa">Limpeza de fossa séptica e sumidouro</ListLink>
                    <ListLink href="/desentupimento-de-caixa-de-gordura">Limpeza de caixa de gordura e poço</ListLink>
                </ul>
                <p className="mt-4">
                    Experiência, sucesso e segurança para as empresas do Rio de Janeiro. Atendemos com agilidade e eficiência, sempre garantindo a satisfação dos nossos clientes.
                </p>
                <h2 className="text-lg font-semibold mt-6 mb-4">Equipamentos Modernos</h2>
                <p>
                    Utilizamos máquinas desentupidoras com sistema rotativo e hidrojateamento para desobstrução de tubulações, além de equipamentos de
                    <TextLink href="/limpeza-de-sumidouro-rj"> limpeza de fossas</TextLink> e sucção de dejetos.
                </p>

            </section>
        </div>
    )
}
