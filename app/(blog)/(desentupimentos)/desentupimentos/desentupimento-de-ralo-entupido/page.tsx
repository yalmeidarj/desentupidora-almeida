import ContentHeader from "@/components/contenHeader";
import LocationLink from "@/components/LocationLink";

export default async function Page() {
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Nossos Serviços', currentPage: 'Desentupimento de ralo entupido' }}
                title='Desentupimento de ralo'
                description='Desentupimento de ralos externos e internos, residenciais, comerciais e industriais. Atendimento 24 horas em toda a região.'
            />  
            <LocationLink />
</div>
    )
}