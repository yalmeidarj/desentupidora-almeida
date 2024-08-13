import ContentHeader from "@/components/contenHeader";
import ServicesLink from "@/components/ServicesLink";

export default async function Page() {
    return (
        <section className='container min-h-[80vw] md:min-h-[40vw]'>
            <ContentHeader
                title="Desentupidora Renovo - RJ"
                description="Desentupimentos em todo Rio de Janeiro. A Desentupidora Renovo é especialista em desentupimentos em todo Rio de Janeiro. Atendimento 24 horas, chegamos em seu local rápido!"
                link={{ href: '/', label: 'Home', currentPage: 'Desentupidora Renovo' }}

            />
            <ServicesLink />
            <p className='text-lg mt-8'>
                A Desentupidora Renovo é especialista em desentupimentos em todo Rio de Janeiro. Atendimento 24 horas, chegamos em seu local rápido!
            </p>
        </section>
    )
}