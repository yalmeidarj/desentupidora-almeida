import ContentHeader from "@/components/contenHeader";

export default async function Page() {

    
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Home', currentPage: 'Desentupimentos' }}
                title={'Desentupimento Residencial'}
                description={'Desentupimento residencial em residências, comércios e indústrias. Atendimento 24 horas em toda a região.'}
            />            
        </div>
    )
}