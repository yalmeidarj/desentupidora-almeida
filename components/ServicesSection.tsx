import Link from 'next/link';
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
        <Link
            href="/desentupimentos"
            className="group flex flex-col items-center justify-center bg-darkTheme-bg text-darkTheme-text p-6 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/5 h-[12rem] m-2 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-darkTheme-accent"
        >
            <div className="group-hover:bg-darkTheme-bg rounded-full p-4 text-4xl mb-4">{icon}</div>
            <h3 className="text-lg font-bold">{title}</h3>
        </Link>
    );
};


const ServicesSection: React.FC = () => {
    return (
        <section className=" w-full py-16 bg-gray-100">
            <div className='container '>            
            
            <h2 className="text-3xl font-bold text-center mb-12">
                Serviços Desentupimento no Rio de Janeiro
            </h2>
            <div className="flex flex-wrap justify-center items-center">
                <ServiceCard
                    icon={<PiPipe className="fas fa-tools"/>}
                    title="Desentupimento de Canos"
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
            </div>                
        </section>
    );
};

export default ServicesSection;
