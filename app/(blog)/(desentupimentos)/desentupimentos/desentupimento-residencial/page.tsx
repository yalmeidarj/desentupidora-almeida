import ContentHeader from "@/components/contenHeader";

export default async function Page() {

    
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Home', currentPage: 'Desentupimentos' }}
                title={'Desentupimento Residencial'}
                description={'Desentupimento em residências, apartamentos, casas, condomínios, etc.\nQualquer tipo de entupimento doméstico, nós podemos ajudar!'}
            /> 

        </div>
    )
}