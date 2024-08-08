import Image from 'next/image';
import CallLandLineButton from './CallLandLineButton';

const MainBanner = () => {
    return (
        <div className="relative w-full z-0 max-w-4xl">
            {/* Background Image */}
            <Image
                // src="/desentupidora-confiavel-n.png"
                src="/desentupidora-confiavel-n2.jpg"
                alt="Técnico de desentupimento em ação"
                // width={771}
                // height={281}
                width={968}
                height={506}
                sizes="(max-width: 768px) 100vw, 768px"
                // quality={100}
                loading='eager'
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
                <CallLandLineButton
                    phoneNumber="4042-1046"
                    label='Ligue Agora'

                />
            </div>
        </div>
    );
};

export default MainBanner;
