import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navItems } from './navItems';
import { FiMenu } from 'react-icons/fi';
import CallLandLineButton from '../CallLandLineButton';
import { FaRegClock } from "react-icons/fa";

interface MenuBarMobileProps {
    setter: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function MenuBarMobile({ setter }: MenuBarMobileProps): ReactElement {
    return (
        <nav className="fixed top-0 pt-6 md:pt-8 left-0 right-0 bg-darkTheme-bg md:pb-0 pb-6">
            <div className="container flex flex-col">
                <div className="flex justify-between items-center h-auto max-h-[65px] px-4">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-desentupidora-light.png"
                            alt="Logo da Desentupidora Almeida"
                            width={140}
                            height={140}
                            sizes="(max-width: 768px) 100vw, 
                                    (max-width: 1200px) 50vw, 
                                    33vw"
                        />
                    </Link>
                    <div className="hidden lg:flex">
                        <CallLandLineButton phoneNumber="4042-1046" />
                    </div>
                    <div className="flex justify-end lg:hidden px-4">
                        <CallLandLineButton phoneNumber="4042-1046" />
                    </div>
                    <button
                        className="block md:hidden text-4xl text-white"
                        aria-label="Abrir menu"
                        onClick={() => {
                            setter((oldVal) => !oldVal);
                        }}
                    >
                        <FiMenu />
                    </button>
                </div>

                <div className="hidden md:flex md:flex-row items-center  max-w-max mx-auto mt-2">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.route}
                            className="flex items-center gap-2 text-md pl-6 py-3 border-b border-b-white/10"
                        >
                            <div className="flex items-center justify-center w-[30px] text-xl text-darkTheme-text">
                                {item.icon}
                            </div>
                            <div className="text-darkTheme-text">{item.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}