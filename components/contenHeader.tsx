import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FaHouse } from "react-icons/fa6";

export default async function ContentHeader({ link, title, description, className }: { link: { label: string, href: string, currentPage: string}, title: string, description: string, className?: string }) {
    return (
        <div className={cn(className, 'mt-16')}>
            <div className='w-full flex flex-row items-start gap-2'>
                <div className='flex flex-row gap-2'>
                    <Link href={link.href} className='text-darkTheme-accent flex flex-row items-center gap-2'>
                        <FaHouse className='border border-r-2 border-gray-200' />
                        <span className='font-bold'>{link.label}</span>
                    </Link>
                </div>
                <div className=''>                    
                    <span>
                    » {link.currentPage}
                    </span>
                </div>            
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-xl text-gray-600 font-semibold ">{description}</p>
        </div>
    )

}