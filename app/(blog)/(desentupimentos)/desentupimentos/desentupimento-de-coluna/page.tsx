import Link from 'next/link';
import React from 'react';
// import ContentHeader from '../../../../../components/contenHeader';
import ContentHeader from '../../../../../components/contenHeader';
import { BreadcrumbList, Service, WithContext } from 'schema-dts';
import Script from 'next/script';
import { Metadata } from 'next';
import CTA from '@/components/cta';

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Desentupimento de Coluna",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Desentupidora Renovo",
        "url": "https://desentupidorarenovo.com.br",
        "telephone": ["+55 21 4042-1046", "+55 21 98883-5428"],

    },
    "areaServed": {
        "@type": "Place",
        "name": "Rio de Janeiro"
    },
    "description": "Serviço especializado de limpeza e desentupimento de coluna realizado pela Desentupidora Renovo. Atendimento rápido e eficaz para desobstrução de colunas em edifícios residenciais e comerciais.",
    "offers": {
        "@type": "Offer",
        "url": "http://localhost:3000/desentupimentos/desentupimento-de-coluna",
        "priceCurrency": "BRL",
        "price": "Sob consulta"
    }
}, {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Desentupimentos",
        "item": "https://desentupidorarenovo.com.br/desentupimentos"
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Desentupimento de Colunas",
        "item": "https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-coluna"
    }]
}];



export const metadata: Metadata = {
    title: 'Desentupimento de Colunas | Desentupidora Renovo',
    description: 'Desentupir colunas é crucial para o bom funcionamento do encanamento em grandes edifícios, especialmente condomínios. Saiba mais sobre desentupimento de colunas e como evitar problemas.',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `https://desentupidorarenovo.com.br/desentupimentos/desentupimento-de-coluna`,
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
    


export default async function Page() {


    return (
        <div className=" min-h-screen px-6 py-8">
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <article className="max-w-3xl mx-auto">
                <ContentHeader
                    link={{ href: '/', label: 'Desentupimentos', currentPage: 'Desentupimento de Colunas' }}
                    title='Desentupimento de Colunas'
                    description='Desentupir colunas é crucial para o bom funcionamento do encanamento em grandes edifícios, especialmente condomínios. As colunas coletoras transportam resíduos dos apartamentos para a rede pública de esgoto. Qualquer obstrução pode causar vazamentos, maus odores e danos estruturais. Manter as colunas desentupidas é essencial para a segurança dos moradores e preservação do edifício.'
                />

                <section className="mt-12">
                    <p className="mt-4 leading-7">
                        O desentupimento de colunas não é apenas uma medida corretiva; é uma ação preventiva que protege todo o sistema de encanamento do edifício. Quando uma coluna coletora entope, os riscos vão além dos problemas imediatos, como inundações e entupimentos locais. Os danos podem se estender para a estrutura do prédio, comprometendo a integridade das paredes, pisos e até mesmo dos alicerces. Além disso, o acúmulo de resíduos e água parada cria um ambiente propício para a proliferação de fungos, bactérias e outros agentes patogênicos, representando um sério risco à saúde dos moradores.
                    </p>
                    <p className="mt-4 leading-7">
                        Manutenção de colunas regular é, portanto, essencial para evitar reparos custosos e preservar o bem-estar de todos os residentes. Investir em desentupimento preventivo é uma maneira inteligente de economizar dinheiro e evitar dores de cabeça no futuro. Saiba mais sobre <Link href="/desentupimentos/desentupimento-comercial" className="text-darkTheme-accent underline hover:text-darkTheme-bg">desentupimento comercial</Link>.
                    </p>
                </section>

                <section className="mt-12 border-t border-darkTheme-primary pt-8">
                    <h2 className="text-2xl font-semibold mt-10 tracking-tight">Causas Comuns de Entupimento</h2>
                    <p className="mt-4 leading-7">
                        Os entupimentos de colunas podem ocorrer por várias razões, mas algumas são mais comuns:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-4">
                        <li><strong>Acúmulo de gordura:</strong> A gordura despejada pelo ralo da cozinha se solidifica nas paredes internas das colunas, reduzindo gradualmente o diâmetro da tubulação até que ocorra o entupimento total.</li>
                        <li><strong>Objetos sólidos:</strong> Produtos como papel higiênico em excesso, absorventes, fraldas e outros objetos que não se decompõem facilmente podem se acumular nas colunas, causando obstruções.</li>
                        <li><strong>Descarte inadequado de resíduos:</strong> O descarte de restos de alimentos, óleos e até produtos químicos pelas pias e vasos sanitários contribui significativamente para o entupimento das colunas.</li>
                        <li><strong>Falhas na instalação:</strong> Problemas na inclinação da tubulação ou materiais de baixa qualidade também podem resultar em entupimentos frequentes.</li>
                    </ul>
                    <p className="mt-4 leading-7">
                        Compreender essas causas ajuda a tomar medidas preventivas e a educar os moradores sobre práticas que evitam esses problemas. Para saber mais sobre como evitar esses problemas em residências, visite nossa página de <Link href="/desentupimentos/desentupimento-residencial" className="text-darkTheme-accent underline hover:text-darkTheme-bg">desentupimento residencial</Link>.
                    </p>
                </section>

                <section className="mt-12 border-t border-darkTheme-primary pt-8 bg-darkTheme-bg text-darkTheme-text p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mt-10 tracking-tight">Medidas Preventivas</h2>
                    <p className="mt-4 leading-7">
                        Evitar o entupimento das colunas coletoras é possível com algumas práticas simples e eficazes:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-4">
                        <li><strong>Manutenção regular:</strong> Agendar serviços de manutenção de colunas periodicamente pode identificar e resolver problemas antes que eles se tornem graves.</li>
                        <li><strong>Descarte correto de resíduos:</strong> Incentivar os moradores a não jogar gordura, resíduos de alimentos e objetos sólidos pelo ralo ou vaso sanitário.</li>
                        <li><strong>Instalação de telas protetoras:</strong> Utilizar telas nos ralos das pias e nos ralos de chão pode evitar que detritos maiores entrem nas colunas.</li>
                        <li><strong>Educação dos moradores:</strong> Informar regularmente sobre os riscos do descarte inadequado e as práticas corretas para manter o sistema de encanamento em bom estado.</li>
                    </ul>
                    <p className="mt-4 leading-7">
                        Essas medidas preventivas são fundamentais para reduzir a necessidade de intervenções mais drásticas e custosas no futuro. Confira também nossas dicas de <Link href="/desentupimentos/desentupimento-de-pia" className="text-darkTheme-accent underline hover:text-darkTheme-bg">desentupimento de pia</Link> para evitar problemas na cozinha.
                    </p>
                </section>

                <section className="mt-12 border-t border-darkTheme-primary pt-8">
                    <h2 className="text-2xl font-semibold mt-10 tracking-tight">Serviços Profissionais de Desentupimento</h2>
                    <p className="mt-4 leading-7">
                        Quando o entupimento já ocorreu, a solução mais eficaz é contratar uma desentupidora de colunas especializada. Profissionais qualificados utilizam técnicas avançadas para resolver o problema rapidamente e sem danificar a infraestrutura do prédio. Entre os métodos mais comuns estão:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-4">
                        <li><strong>Hidrojateamento de colunas:</strong> Utiliza jatos de água de alta pressão para desobstruir as tubulações, removendo completamente resíduos e incrustações das paredes internas das colunas.</li>
                        <li><strong>Máquinas Roto Rooter:</strong> Ferramentas rotativas que conseguem penetrar e remover obstruções mais resistentes, como raízes de árvores ou grandes acúmulos de gordura.</li>
                    </ul>
                    <p className="mt-4 leading-7">
                        Escolher uma empresa com experiência comprovada em desentupimento de colunas é crucial para garantir um serviço eficiente e duradouro. Além disso, a utilização de tecnologias avançadas, como câmeras de inspeção, permite identificar o problema com precisão e atuar diretamente no ponto de obstrução. Em caso de emergência, não hesite em contactar nosso <Link href="/desentupimentos/desentupimento-emergencial" className="text-[#1E90FF] underline hover:text-[#289DB9]">serviço de desentupimento emergencial</Link>.
                    </p>
                </section>

                <section className="mt-12 border-t border-darkTheme-primary bg-darkTheme-bg text-darkTheme-text p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mt-10 tracking-tight">Sinais de uma Coluna Entupida</h2>
                    <p className="mt-4 leading-7">
                        Reconhecer os primeiros sinais de uma coluna entupida pode prevenir maiores complicações. Fique atento a:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-4">
                        <li><strong>Esgoto voltando pelos ralos:</strong> Se a água começa a retornar pelos ralos ou vasos sanitários, é um sinal claro de entupimento.</li>
                        <li><strong>Maus odores:</strong> O cheiro de esgoto nas áreas comuns ou dentro dos apartamentos é um indício de que algo está obstruindo a passagem dos resíduos.</li>
                        <li><strong>Drenagem lenta:</strong> Se a água demora mais tempo para escoar pelos ralos, pode haver uma obstrução parcial que precisa ser resolvida antes que se agrave.</li>
                        <li><strong>Infiltrações e vazamentos:</strong> Manchas de umidade ou infiltrações em paredes e tetos próximos às colunas podem indicar um entupimento que está causando acúmulo de água.</li>
                    </ul>
                    <p className="mt-4 leading-7">
                        Ao notar qualquer um desses sinais, é essencial agir rapidamente para evitar que o problema se agrave e cause danos maiores. Visite nossa página de <Link href="/desentupimentos/desentupimento-de-ralo-entupido" className="text-darkTheme-accent underline hover:text-darkTheme-bg">desentupimento de ralo</Link> para mais informações.
                    </p>
                </section>
                <CTA
                    title='Precisa de Desentupimento de Colunas?'
                    description='O desentupimento de colunas é um serviço vital para a manutenção da saúde e da estrutura dos edifícios. A prevenção é sempre o melhor caminho, mas quando necessário, contar com uma empresa especializada garante que o problema seja resolvido de forma eficiente e segura. Não espere até que o problema se torne uma emergência; entre em contato conosco para uma consulta ou serviço de desentupimento de colunas em seu condomínio. Estamos prontos para ajudar com soluções rápidas e eficazes.'
                />
            </article>
        </div>
    );
}

