import ContentHeader from "@/components/contenHeader";

export default async function Page() {
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupiemtnos', currentPage: 'Desentupimento emergencial' }}
                title='Desentupimento emergencial'
                description='Desentupimento emergencial em residências, comércios e indústrias. Atendimento 24 horas em toda a região.'
            />
        </div>
    )
}