import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center  bg-darkTheme-mainBg text-darkTheme-text">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-darkTheme-primary mb-4">404</h1>
                <h2 className="text-2xl text-darkTheme-outerWave mb-6">Página não encontrada <span className='text-3xl'>:/</span></h2>
                <p className="text-darkTheme-secondary mb-8">
                    Desculpe, a página que você está procurando não existe.
                </p>
                <Link
                    href="/"
                    className="px-6 py-2 bg-darkTheme-primary rounded hover:bg-darkTheme-accent transition-colors"
                >
                    Voltar à página inicial
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
