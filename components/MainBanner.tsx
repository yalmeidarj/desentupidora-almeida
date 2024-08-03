import Image from 'next/image';

const MainBanner = () => {
    return (
        <div className="relative w-full z-0 max-w-4xl">
            {/* Background Image */}
            <Image
                // src="/desentupidora-confiavel-n.png"
                src="/desentupidora-confiavel-n2.jpg"
                alt="Plumber working"
                // width={771}
                // height={281}
                width={1928}
                height={704}
                layout="responsive"
                quality={100}
                className="w-full h-full object-cover"
            />
            {/* Overlay for the CTA */}
            <div className="absolute bottom-0 left-0 w-full bg-white text-darkTheme-secondary bg-opacity-75 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                {/* CTA Content */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-2 sm:mb-4 md:mb-6 drop-shadow-lg">
                    Chame quem resolve!
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-4 sm:mb-6 md:mb-8 drop-shadow-lg">
                    A Desentupidora Renovo é a melhor opção para desentupimento.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 rounded-full transition-transform transform hover:scale-105">
                    Chamar Agora
                </button>
            </div>
        </div>
    );
};

export default MainBanner;
