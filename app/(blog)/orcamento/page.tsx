import ContentHeader from "@/components/contenHeader"
import CTA from "@/components/cta"
import { Service, BreadcrumbList, WithContext } from 'schema-dts';
import Script from 'next/script';
import { Metadata } from 'next';
import { urlBase } from '@/lib/utils';

const jsonLd: WithContext<Service | BreadcrumbList>[] = [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desentupimento de Fossa',
    description: 'Orçamento para serviços de desentupimentos em geral. ',
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
            item: 'https://desentupidorarenovo.com.br/orcamento'
        }
    ]
    }];

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: {
            template: `%s | Desentupidora Renovo`,
            default: 'Orçamento',
        },
        description: 'Orçamento para serviços de desentupimentos em geral.',
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: `${urlBase}/orcamento`,
        },
    };
}

const princingFaq = [
    {
        question: "Quanto custa um serviço de desentupimento?",
        answer: "O valor do serviço de desentupimento varia de acordo com o tipo de serviço, a complexidade do problema e o local onde o serviço será realizado. Para saber o preço exato, é necessário fazer uma avaliação do problema. Entre em contato conosco para agendar uma visita técnica e solicitar um orçamento sem compromisso."
    },
    {
        question: "Qual é o preço para desentupir ?",
        answer: "O preço para desentupir varia de acordo com o tipo de serviço, a complexidade do problema e o local onde o serviço será realizado. Para saber o valor exato, é necessário fazer uma avaliação do problema. Entre em contato conosco para agendar uma visita técnica e solicitar um orçamento sem compromisso."
    },
    {
        question: "Como é cobrado o serviço de desentupimento ?",
        answer: "O serviço de desentupimento é cobrado de acordo com o tipo de serviço, a complexidade do problema e o local onde o serviço será realizado. O valor do serviço pode ser cobrado por hora, por metro linear ou por serviço realizado. Para saber o valor exato, é necessário fazer uma avaliação do problema. Entre em contato conosco para agendar uma visita técnica e solicitar um orçamento sem compromisso."
    },
    {
        question: "Como desentupidora cobra ?",
        answer: "A desentupidora cobra de acordo com o tipo de serviço, a complexidade do problema e o local onde o serviço será realizado. O valor do serviço pode ser cobrado por hora, por metro linear ou por serviço realizado. Para saber o valor exato, é necessário fazer uma avaliação do problema. Entre em contato conosco para agendar uma visita técnica e solicitar um orçamento sem compromisso."
    }

];

export default function Page() {
    return (
        <div className='container min-h-[80vw] md:min-h-[40vw]'>
            <ContentHeader
                link={{ href: '/', label: 'Desentupimentos', currentPage: 'Orçamento' }}
                title='Perguntas Frequentes'
                description='Tire suas dúvidas sobre desentupimento e saiba mais sobre os serviços da Desentupidora Renovo.'
            />
            <article className=''>
                <h2 className='text-2xl font-bold'>Perguntas Frequentes</h2>
                <ul className='space-y-4'>
                    {princingFaq.map((faq, index) => (
                        <li key={index}>
                            <h3 className='text-xl font-bold'>{faq.question}</h3>
                            <p className='text-lg'>{faq.answer}</p>
                        </li>
                    ))}
                </ul>
            </article>
            <CTA
                title='Precisa de um serviço de desentupimento?'
                description='Entre em contato conosco e solicite um orçamento sem compromisso.'
            />
        </div>
    );
}

