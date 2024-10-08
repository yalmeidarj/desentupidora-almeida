import { FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

export default function LocationLink() {
    return (
        <Link
            href='/rj'
            className='group text-darkTheme-accent flex flex-row items-center gap-2 p-2 hover:underline hover:text-darkTheme-bg focus:outline-none focus:ring-2 focus:ring-darkTheme-primary transition-colors duration-300'
        >
            <FiMapPin className='group-hover:text-darkTheme-bg transition-colors duration-300' />
            <span className='font-bold group-hover:text-darkTheme-bg transition-colors duration-300'>
                Estamos em todas as áreas do RJ. Veja mais
            </span>
        </Link>
    );
}
