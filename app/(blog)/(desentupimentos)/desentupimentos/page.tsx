import ContentHeader from "@/components/contenHeader";
import CTA from "@/components/cta";
import { servicesList } from "@/lib/utils";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default async function Page() {

    
    return (

        <div className='container flex flex-col justify-around gap-4'>
            <ContentHeader
                link={{ href: '/', label: 'Home', currentPage: 'Desentupimentos' }}
                title='Sua Desentupidora de confiança no Rio de Janeiro'
                description='A Desentupidora Renovo é uma empresa que atua no mercado de desentupimento há mais de 10 anos, sempre oferecendo serviços de qualidade e com garantia de satisfação. Atendemos em todo o Rio de Janeiro, com rapidez e eficiência.'
            />
            <ul className='md:grid md:grid-cols-2 gap-2 my-14'>
                {servicesList.map((subLink, index) => (
                    <li key={index} className='mt-10 text-md '>
                        <Link href={subLink.url} className='flex flex-row items-center justify-start gap-2'>
                            <IoIosCheckmarkCircle className='text-darkTheme-bg min-w-xl' />                            
                            <h2 className='text-xl md:text-2xl font-bold'>{subLink.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
            <CTA
                title='Desentupidora Renovo'
                description='Nosso atendimento é rápido, eficiente e sem sujeira. Não deixe seu problema de entupimento se tornar um transtorno. Entre em contato conosco e solicite um orçamento sem compromisso.'
                phoneNumber='4042-1046'               

            />

        </div>
    )
}


