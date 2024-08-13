import ContentHeader from "@/components/contenHeader";
import DesentupimentoResidencial from "@/components/staticTexts/desentupimentoResidencial";

export default async function Page() {

    
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Home', currentPage: 'Desentupimentos' }}
                title={'Desentupimento Residencial'}
                description={'Desentupimento em residências, apartamentos, casas, condomínios, etc. Qualquer tipo de entupimento doméstico, nós podemos ajudar!'}
            /> 
            <DesentupimentoResidencial />

        </div>
    )
}