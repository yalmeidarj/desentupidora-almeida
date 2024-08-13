'use client'
import './globals.css';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navBar/NavBar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ServicesLink from '@/components/ServicesLink';
import LocationLink from '@/components/LocationLink';

const NotFound = () => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleBack = () => {
        if (mounted) {
            router.back();
        }
    };

    return (
        <>
            <NavBar />
            <section className="container pt-16">
                <div className="text-center items-center flex flex-col pt-16 mt-16 w-full min-h-[80vh]">
                    <h1 className="text-8xl font-bold text-darkTheme-primary mb-4">404</h1>
                    <h2 className="text-2xl text-darkTheme-outerWave mb-6">Página não encontrada <span className='text-3xl'>:/</span></h2>
                    <p className="text-darkTheme-secondary mb-8">
                        Desculpe, a página que você está procurando não existe.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="/"
                            className="px-6 py-2 bg-darkTheme-primary text-darkTheme-text rounded hover:bg-darkTheme-accent transition-colors"
                        >
                            Voltar à página inicial
                        </Link>
                        <button
                            onClick={handleBack}
                            className="px-6 py-2 bg-darkTheme-primary text-darkTheme-text rounded hover:bg-darkTheme-accent transition-colors"
                        >
                            Voltar à página anterior
                        </button>
                    </div>
                        <ServicesLink />
                        <LocationLink />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NotFound;
