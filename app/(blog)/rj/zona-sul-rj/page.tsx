import ContentHeader from "@/components/contenHeader";
import ServicesLink from "@/components/ServicesLink";
import ZoneDescription from "@/components/ZoneDescription";
import { areasDeAtendimento } from "@/lib/utils";

export default async function Page() {
    // Filter the areas to get only the "Zona Sul" zone
    const zonaSul = areasDeAtendimento.filter(area => area.zone === "Zona Sul");
    // Get the neighborhoods of the "Zona Sul" zone
    const neighborhoods = zonaSul[0].neighborhoods;

    return (
        <div className='container min-h-screen'>
            <ContentHeader
                title='Zona Sul RJ'
                description='Desentupimentos na Zona Sul do Rio. A Desentupidora Renovo é especialista em desentupimentos na Zona Sul RJ. Atendimento 24 horas, chegamos em seu local rápido!'
                link={{ href: '/rj', label: 'Rio de Janeiro', currentPage: 'Áreas de Atendimento' }}
            />
            <ServicesLink />
            <ZoneDescription
                descritption="Conheçemos as peculiariades de cada bairro da Zona Sul, nossos técnicos já realizram inúmeros serviços de desentupimento na região. Por isso, podemos garantir um atendimento rápido e eficiente, sem sujeira e com garantia de satisfação."
                neighborhoods={neighborhoods}
            />
        </div>
    );
}

