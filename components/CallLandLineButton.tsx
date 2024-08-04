'use client'
import { BsTelephoneForward } from 'react-icons/bs';
import { cn } from '../lib/utils'

export default function CallLandLineButton({ phoneNumber, label, className }: { phoneNumber: string, label?: string, className?: string }) {
    const handleCallUs = () => {
        window.location.href = `tel:+5521${phoneNumber}`;
    };

    return (
        <button
            className={cn(
                "flex items-center justify-center w-auto bg-darkTheme-accent rounded-lg leading-relaxed",
                "hover:bg-darkTheme-primary focus:bg-darkTheme-secondary focus:outline-none focus:ring-2 focus:ring-darkTheme-border",
                "px-2 py-3 text-darkTheme-text transition duration-200 ease-in-out",
                "text-lg font-semibold whitespace-nowrap", // Added this class
                className // Ensures any additional classes passed via props are included
            )}
            onClick={handleCallUs}
            aria-label={`Ligue para nosso número (21) ${phoneNumber}`}
        >
            <BsTelephoneForward aria-hidden="true" className="mr-2" />
            <span className="font-semibold">{label ? label : `(21) ${phoneNumber}`}</span>
        </button>
    );
}
