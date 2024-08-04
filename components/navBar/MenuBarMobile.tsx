import React, { ReactElement } from 'react';
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
        <nav className="fixed top-0 left-0 right-0 h-[175px] md:h-[145px] bg-darkTheme-bg  ">
            <div className='container flex flex-col mt-2'>
                <div className='flex justify-between  items-center '>
                    <div className='ml-6 flex items-center gap-2 text-darkTheme-text w-3/4'>
                        <FaRegClock className=' text-darkTheme-accent' />                        
                        <span className=''>Atendimento rápido 24hrs</span>
                        
                    </div>
                    <div className=' block lg:hidden'>
                    <CallLandLineButton
                            phoneNumber="4042-1046"                    
                    />
                    </div>
                </div>
            <div className='container flex justify-between items-center z-60 px-4 mb-8'>
            <Link href="/" className="flex items-center text-3xl text-white">
                <Image
                    src="/logo-desentupidora-light.png"
                    alt="Logo da Desentupidora Almeida"
                    width={100}
                    height={100}
                />
            </Link>
                    <div className=' hidden lg:flex'>
                        
                    <CallLandLineButton
                            phoneNumber="4042-1046"                    
                        />
                        </div>
            <div className="flex items-center justify-between gap-8 py-1">
                <button
                    className="block md:hidden text-4xl text-white"
                    onClick={() => {
                        setter((oldVal) => !oldVal);
                    }}
                >
                    <FiMenu />
                </button>
                <div className="hidden md:flex md:flex-row items-center">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.route}
                            // onClick={() => {
                            //     setter((oldVal) => !oldVal);
                            // }}
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
            </div>
            </div>
        </nav>
    );
}
