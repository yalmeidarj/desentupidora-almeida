import ContentHeader from "@/components/contenHeader";

export default async function Page() {
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Desentupimentos', currentPage: 'Desentupimento de caixa de gordura' }}
                title='Desentupimento de caixa de gordura'
                description='A caixa de gordura é um item essencial para o bom funcionamento da rede de esgoto de sua residência ou empresa. A Desentupidora Renovo é especialista em desentupimento de caixa de gordura, com equipamentos modernos e equipe treinada para resolver o problema de forma rápida e eficiente.'
            />
        </div>
    )
}