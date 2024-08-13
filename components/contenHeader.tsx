import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FaHouse } from "react-icons/fa6";


type ContentHeaderProps = {
    title: string,
    description: string,
    link: {
        label: string,
        href: string,
        currentPage: string
    },
    className?: string
}

export default async function ContentHeader({ link, title, description, className }: ContentHeaderProps) {
    return (
        <>
        <div className={cn(className, 'my-4 ')}>
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
        </>
    )

}