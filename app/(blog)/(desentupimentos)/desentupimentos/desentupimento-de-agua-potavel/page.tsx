import React from 'react';
import ContentHeader from '../../../../../components/contenHeader';
import { Service, BreadcrumbList, WithContext } from 'schema-dts';
import Script from 'next/script';
import { Metadata } from 'next';
import TextLink from '@/components/textLink';
import CTA from '@/components/cta';
import ServicesLink from '@/components/ServicesLink';

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desentupimento de Água Potável",
    "description": "Desentupimento de água potável em residências e comércios no Rio de Janeiro. Atendimento 24 horas.",
    "url": "https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-agua-potavel",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Desentupidora Renovo",
        "description": "A Desentupidora Renovo oferece serviços profissionais de desentupimento para residências e comércios, incluindo atendimento emergencial 24 horas no Rio de Janeiro.",
        "url": "https://desentupidorarenovo.com.br",
        "telephone": "+55 21 4042-1046",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Bráulio Cordeiro",
            "addressLocality": "Rio de Janeiro",
            "addressRegion": "RJ",
            "postalCode": "20975-090",
            "addressCountry": "BR"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "sameAs": [
            "https://x.com/desentupirenovo"
        ],
        
        "priceRange": "$"
    },
    "areaServed": "Rio de Janeiro",
    "availableChannel": {
        "@type": "ServiceChannel",
        "availableLanguage": {
            "@type": "Language",
            "name": "Portuguese"
        },
        "serviceUrl": "https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-agua-potavel"
    },
    "category": "Plumber",
    "serviceType": "Desentupimento de Água Potável",
}, {
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
            "name": "Todos nossos serviços, como limpeza e desentupimentos em geral",
            "item": "https://desentupidorarenovo.com.br/desentupimentos"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": "Desentupimento de Água Potável",
            "item": "https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-agua-potavel"
        }]
    }];

export const metadata: Metadata = {
    title: 'Desentupimento de Água Potável | Desentupidora Renovo',
    description: 'Procura serviço de desentupimento de coluna de água potável no Rio de Janeiro? A Desentupidora Renovo oferece soluções rápidas, eficazes e garantidas para desobstruir suas tubulações. Entre em contato agora!',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-agua-potavel`,
    },
};

export default function Page() {
    return (
        <>
            <Script
                strategy="lazyOnload"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <div className="container">
                <ContentHeader title="Desentupimento de Água Potável"
                    description={'Desentupimento de Coluna de Água Potável: Essencial para a Saúde e Segurança do Seu Imóvel'}
                    link={{ href: '/rj/desentupimentos', label: 'Rio de Janeiro', currentPage: 'Desentupimento de Água Potável' }}
                />
                <ServicesLink />
                <p>
                    O desentupimento de coluna de água potável é um serviço crucial para manter a qualidade da água que abastece seu imóvel, especialmente em prédios e condomínios. Com o tempo, as colunas de água potável podem sofrer obstruções, comprometendo o fornecimento de água e colocando em risco a saúde dos moradores. Para resolver esses problemas de forma rápida e segura, contar com uma empresa especializada como a <TextLink href="/">Desentupidora Renovo</TextLink>, que atua no Rio de Janeiro, é a escolha ideal.
                </p>
                <h2 className="text-lg font-semibold mt-6 mb-4">Por Que as Colunas de Água Potável Entopem?</h2>
                <p>
                    Os motivos variam desde ácumulo de resíduos, corrosão e ferrugem, incrustações de minerais, falhas de manutenção entre outros..
                </p>
                <p>
                    Ao enfrentar um entupimento na coluna de água potável, é essencial agir rapidamente para evitar problemas maiores, como a interrupção do abastecimento de água ou a contaminação do sistema.
                </p>
                {/* <h2 className="text-lg font-semibold mt-6 mb-4">Como Funciona o Desentupimento de Coluna de Água Potável?</h2> */}

                <h2 className="text-lg font-semibold mt-6 mb-4">Prevenção de Entupimentos em Colunas de Água Potável</h2>
                <p>
                    Além de realizar o desentupimento, a Desentupidora Renovo também se preocupa com a prevenção de novos problemas. Seguindo algumas dicas simples, é possível prolongar a vida útil das colunas de água potável e evitar futuros entupimentos:
                </p>
                <p className="mt-4">
                    Manutenção regular, filtro de água e inspeções frequentes são algumas das medidas que podem ser adotadas para garantir o bom funcionamento das tubulações.
                </p>
                <h2 className="text-lg font-semibold mt-6 mb-4">Contate a Desentupidora Renovo</h2>
                <p>
                    Para garantir a segurança e a qualidade da água em seu imóvel, entre em contato com a <TextLink href="/">Desentupidora Renovo</TextLink>. Oferecemos serviços de desentupimento de colunas de água potável no Rio de Janeiro, com atendimento emergencial e profissionais qualificados. Não espere que o problema se agrave solicite agora mesmo um orçamento e proteja seu imóvel!
                </p>
                <CTA
                    title="Precisa desentupir Coluna de Água Potável?"
                    description="Atendimento 24 horas no Rio de Janeiro. Entre em contato e solicite um orçamento sem compromisso!"
                />
            </div>
        </>
    );
}