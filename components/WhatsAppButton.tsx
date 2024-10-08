"use client";
import { FaWhatsapp } from 'react-icons/fa';
import { cn } from '../lib/utils';

function WhatsAppButton() {
    const handleWhatsApp = () => {
        const message = "Olá, preciso de ajuda com desentupimento!";
        const phoneNumber = "5521988835428";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
    };

    return (
        <button
            className={cn(
                "flex items-center justify-center w-auto bg-green-500 rounded-lg leading-relaxed",
                "hover:bg-green-600 focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900",
                "p-3 text-white transition duration-200 ease-in-out",
                "text-lg font-semibold whitespace-nowrap" // Added this class
            )}
            onClick={handleWhatsApp}
            aria-label="Open WhatsApp"
        >
            <FaWhatsapp size={36} aria-hidden="true" />
        </button>
    );
}

export default WhatsAppButton;
