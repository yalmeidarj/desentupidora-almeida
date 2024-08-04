import { cn } from '@/lib/utils';

import CallLandLineButton from './CallLandLineButton';

export default function CTA({className}: {className?: string}) {
    return (
        <div className={cn('w-ful my-14 bg-darkTheme-accent text-darkTheme-text rounded-lg p-6 text-center flex flex-col items-center', className)}>
                <h2 className='text-2xl font-bold'>Precisa de um serviço de desentupimento?</h2>
                <p className='mb-4'>Entre em contato conosco e solicite um orçamento sem compromisso.</p>
                
            <CallLandLineButton
                phoneNumber='40421046'
                label='Fale conosco'
                className='bg-darkTheme-bg'
            />            
        </div>
    )
}