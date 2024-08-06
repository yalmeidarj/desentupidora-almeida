import { cn } from '@/lib/utils';

import CallLandLineButton from './CallLandLineButton';


type CTAProps = {
    title: string;
    description: string;
    phoneNumber?: string;
    className?: string;

};

export default function CTA({ title, description, phoneNumber, className }: CTAProps) {
    
    return (
        <div className={cn('w-full my-14 group-hover:bg-darkTheme-bg bg-darkTheme-accent text-darkTheme-text rounded-lg p-6 text-center flex flex-col items-center group', className)}>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='mb-4'>{description}</p>
            <CallLandLineButton
                phoneNumber={phoneNumber || '4042-1046'}
                label='Fale conosco'                    
                className='bg-darkTheme-bg hover:underline hover:bg-darkTheme-accent'
            />            
        </div>

    );
}