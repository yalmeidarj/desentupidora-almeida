import ContentHeader from "@/components/contenHeader";
import ServicesLink from "@/components/ServicesLink";
import ZoneDescription from "@/components/ZoneDescription";
import { areasDeAtendimento } from "@/lib/utils";

export default async function Page() {
// Filter the areas to get only the "Centro" area
    const centro = areasDeAtendimento.filter(area => area.zone === "Centro");
// Get the neighborhoods of the "Centro" area
    const neighborhoods = centro[0].neighborhoods;

    return (
        <div className='container'>
            <ContentHeader
                title='Centro RJ'
                description='Desentupimentos no Centro do Rio. A Desentupidora Renovo é especialista em desentupimentos no Centro RJ. Atendimento 24 horas, chegamos em seu local rápido!'
                link={{ href: '/rj', label: 'Rio de Janeiro', currentPage: 'Áreas de Atendimento' }}
            />
            <ServicesLink />
            <ZoneDescription
                descritption="Conheçemos as peculiariades de cada bairro do Centro, nossos técnicos já realizram inúmeros serviços de desentupimento na região. Por isso, podemos garantir um atendimento rápido e eficiente, sem sujeira e com garantia de satisfação."
                neighborhoods={neighborhoods}
            />
        </div>
    );
}