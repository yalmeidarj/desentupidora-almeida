import React from 'react';
import { FaToilet } from "react-icons/fa6";
import { MdOutlinePlumbing } from "react-icons/md";
import { MdLocationSearching } from "react-icons/md";
import { PiPipe } from "react-icons/pi";


interface ServiceCardProps {
    icon: JSX.Element;
    title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/5 h-[12rem] m-2">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-lg font-bold">{title}</h3>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-12">
                Serviços Desentupimento no Rio de Janeiro
            </h2>
            <div className="flex flex-wrap justify-center items-center">
                <ServiceCard
                    icon={<PiPipe className="fas fa-tools"/>}
                    title="Entupimento de Canos"
                />
                <ServiceCard
                    icon={<MdOutlinePlumbing className="fas fa-wrench" />}
                    title="Reparos de Encanamento"
                />
                <ServiceCard
                    icon={<MdLocationSearching className="fas fa-search" />}
                    title="Diagnóstico e Inspeção de Encanamento"
                />
                <ServiceCard
                    icon={<FaToilet className="fas fa-toilet"/>}
                    title="Limpeza de Esgoto"
                />
            </div>
        </section>
    );
};

export default ServicesSection;
