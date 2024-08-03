'use client'
import { BsTelephoneForward } from 'react-icons/bs';
import { cn } from '../lib/utils'

export default function CallLandLineButton({ phoneNumber }: { phoneNumber: string }) {
    const handleCallUs = () => {
        window.location.href = `tel:+5521${phoneNumber}`;
    };

    return (
        <button
            className={cn(
                "flex items-center text-indigo-400 leading-relaxed",
                "hover:text-indigo-500"
            )}
            onClick={handleCallUs}
            aria-label={`Ligue para nosso número (21) ${phoneNumber}`}
        >
            <BsTelephoneForward aria-hidden="true" className="mr-2" />
            (21) {phoneNumber}
        </button>
    );
}