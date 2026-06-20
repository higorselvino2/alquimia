'use client';

import { MessageCircle } from 'lucide-react';
import { handleWhatsAppClick } from './whatsapp-button';

export function FloatingWhatsApp() {
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
      
      {/* Tooltip */}
      <span className="absolute right-16 px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-800 shadow-xl pointer-events-none">
        Fale conosco
      </span>
    </button>
  );
}
