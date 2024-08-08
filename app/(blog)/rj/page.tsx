import ContentHeader from "@/components/contenHeader";
import CTA from "@/components/cta";
import ServicesLink from "@/components/ServicesLink";
import { areasDeAtendimento } from "@/lib/utils";
import Link from "next/link";

export default async function Page() {
    return (
        <section className='container flex flex-col justify-between gap-6 p-6 '>
            <ContentHeader
                title='Onde atendemos'
                description='Estamos preparados para atender todo Rio e Grande Rio. Veja abaixo a lista de regiões atendidas.'
                link={{ href: '/desentupimentos', label: 'Rio de Janeiro', currentPage: 'Áreas de Atendimento' }}
            />
            <ServicesLink />
            <div className='w-full flex flex-col gap-4'>
                <ul className='grid grid-cols-2 gap-4'>
                    {areasDeAtendimento.map((area) => (
                        <li key={area.zone} className='bg-darkTheme-bg p-4 rounded-md shadow-md'>
                            <Link href={area.link} className='text-darkTheme-text hover:text-darkTheme-primary'>
                                <h3 className='text-lg font-semibold'>{area.zone}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
                <CTA
                    title='Desentupimento no RJ?'
                    description='Pontos de apoio em todas as áreas do Rio de Janeiro nos possibilitam atender com rapidez e eficiência em qualquer região.'
                />
            </div>
        </section>
    )
}
