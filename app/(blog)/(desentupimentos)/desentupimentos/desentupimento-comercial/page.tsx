import ContentHeader from "@/components/contenHeader";

export default async function Page() {
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/', label: 'Home', currentPage: 'Desentupimento Comercial' }}
                title='Desentupimentos Comerciais'
                description='Atendemos a empresas, condomínios, escolas, hospitais, hotéis, restaurantes e outros estabelecimentos comerciais. Garatimos o bom funcionamento de seu estabelecimento.'
                            
            />
        </div>
    )
}