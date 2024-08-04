import ContentHeader from "@/components/contenHeader";

export default async function Page() {
    return (
        <div className='container '>
            <ContentHeader
                link={{ href: '/desentupimentos', label: 'Home', currentPage: 'Desentupimento de Esgoto' }}
                title='Desentupimento de Esgoto'
                description='Desentupimento de esgoto é um serviço essencial para manter a higiene e o bom funcionamento de sua residência ou empresa. A Desentupidora Renovo é especialista em desentupimento de esgoto, com equipamentos modernos e equipe treinada para resolver o problema de forma rápida e eficiente.'
            />
        </div>
    )
}