import ContentHeader from "@/components/contenHeader";

export default async function Page() {
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupimentos', currentPage: 'Desentupimento de vaso sanitário' }}
                title='Desentupimento de vaso sanitário'
                description='Desentupimento de vaso sanitário em residências, comércios e indústrias. Atendimento 24 horas em toda a região.'
            />
            
        </div>
    )
}