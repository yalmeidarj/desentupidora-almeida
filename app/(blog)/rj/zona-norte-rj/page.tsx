import ContentHeader from "@/components/contenHeader";
import ServicesLink from "@/components/ServicesLink";
import ZoneDescription from "@/components/ZoneDescription";
import { areasDeAtendimento } from "@/lib/utils";

export default async function Page() {
    // Filter the areas to get only the "Zona Norte" area
    const zonaNorte = areasDeAtendimento.filter(area => area.zone === "Zona Norte");
    // Get the neighborhoods of the "Zona Norte" area
    const neighborhoods = zonaNorte[0].neighborhoods;

    return (
        <div className='container'>
            <ContentHeader
                title='Zona Norte RJ'
                description='Desentupimentos na Zona Norte do Rio. A Desentupidora Renovo é especialista em desentupimentos na Zona Norte RJ. Atendimento 24 horas, chegamos em seu local rápido!'
                link={{ href: '/rj', label: 'Rio de Janeiro', currentPage: 'Áreas de Atendimento' }}
            />
            <ServicesLink />
            <ZoneDescription
                descritption="Conheçemos as peculiariades de cada bairro da Zona Norte, nossos técnicos já realizram inúmeros serviços de desentupimento na região. Por isso, podemos garantir um atendimento rápido e eficiente, sem sujeira e com garantia de satisfação."
                neighborhoods={neighborhoods}
            />
        </div>
    );
}