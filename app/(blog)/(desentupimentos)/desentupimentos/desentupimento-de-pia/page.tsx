import ContentHeader from "@/components/contenHeader";

export default async function Page() {
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupimentos', currentPage: 'Desentupimento de pia' }}
                title='Desentupimento de pia'
                description='Desentupimento de pia de cozinha, banheiro e lavanderia. Atendimento 24 horas em toda a região.'
            />
        </div>
    )
}