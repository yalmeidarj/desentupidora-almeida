import ContentHeader from "@/components/contenHeader";

export default async function Page() {
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Home', currentPage: 'Desentupimento de ralo entupido' }}
                title='Desentupimento de ralo entupido'
                description='Desentupimento de ralo entupido em residências, comércios e indústrias. Atendimento 24 horas em toda a região.'
            />  
</div>
    )
}