'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { handleWhatsApp } from './Hero';

export default function WhatsAppFloatingButton() {
  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-electric-500 to-navy-600 text-white rounded-full shadow-[0_10px_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(59,130,246,0.6)] hover:scale-110 transition-all duration-500 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-electric-500 animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <FaWhatsapp className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
    </button>
  );
}
