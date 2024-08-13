import { MdPlumbing } from 'react-icons/md';
import Link from 'next/link';

export default function ServicesLink() {
    return (
        <Link
            href='/desentupimentos'
            className='group text-darkTheme-accent flex flex-row items-center gap-2 p-2 hover:underline hover:text-darkTheme-bg focus:outline-none focus:ring-2 focus:ring-darkTheme-primary transition-colors duration-300'
            aria-label='Veja todos nossos serviços'
        >
            <MdPlumbing className='group-hover:text-darkTheme-bg transition-colors duration-300 min-w-8' />
            <span className='font-bold group-hover:text-darkTheme-bg transition-colors duration-300'>
                Especialista em desentupimentos no RJ. Veja todos nossos serviços
            </span>
        </Link>
    );
}
