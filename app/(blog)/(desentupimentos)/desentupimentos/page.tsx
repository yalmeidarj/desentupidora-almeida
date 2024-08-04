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
                description='A Desentupidora Ralo Limpo é uma empresa que atua no mercado de desentupimento há mais de 10 anos, sempre oferecendo serviços de qualidade e com garantia de satisfação. Atendemos em todo o Rio de Janeiro, com rapidez e eficiência.'
            />
            <ul className='grid grid-cols-2 gap-6 my-14'>
                {servicesList.map((subLink, index) => (
                    <li key={index} className='mt-10 '>
                        <Link href={subLink.url} className='flex flex-row items-start'>
                            <IoIosCheckmarkCircle className='text-darkTheme-bg text-3xl' />                            
                            <h2 className='text-xl md:text-2xl font-bold'>{subLink.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
            <CTA />

        </div>
    )
}


