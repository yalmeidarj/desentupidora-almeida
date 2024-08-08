import ContentHeader from "@/components/contenHeader";
import CTA from "@/components/cta";
import { servicesList } from "@/lib/utils";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import LocationLink from "@/components/LocationLink";


export default async function Page() {

    
    return (

        <div className='container flex flex-col justify-around gap-4'>
            <ContentHeader
                link={{ href: '/', label: 'Home', currentPage: 'Desentupimentos' }}
                title='Sua Desentupidora de confiança no Rio de Janeiro'
                description='A Desentupidora Renovo é uma empresa que atua no mercado de desentupimento há mais de 10 anos, sempre oferecendo serviços de qualidade e com garantia de satisfação. Atendemos em todo Rio e Grande Rio, com rapidez e eficiência.'
            />
            <LocationLink />
            {/* <Link
                href='/rj'
                className='text-darkTheme-accent flex flex-row items-center gap-2'
            >
                <FiMapPin className='border border-r-2 border-gray-200' />
                <span className='font-bold'>Estamos em todas a áreas do RJ. Veja mais</span>
            </Link> */}
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


