'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "11925959788";
const WHATSAPP_TEXT = "Olá! Vim pelo site e quero transformar minha composição em uma guia musical profissional!";
const WHATSAPP_URL = `https://wa.me/55${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

export const handleWhatsAppClick = () => {
  // Track Meta Pixel standard event for Contact
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Contact');
  }
  window.open(WHATSAPP_URL, '_blank');
};

interface WhatsAppButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  showIcon?: boolean;
}

export function WhatsAppButton({ 
  children = "CHAMAR NO WHATSAPP", 
  className, 
  variant = 'primary',
  showIcon = true 
}: WhatsAppButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider transition-all duration-300 rounded-lg text-sm sm:text-base cursor-pointer";
  
  const variants = {
    primary: "bg-[#FF7A00] text-white hover:bg-[#E66A00] hover:scale-105 shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_30px_rgba(255,122,0,0.5)] px-8 py-4",
    outline: "border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white px-8 py-4",
    ghost: "text-[#FF7A00] hover:bg-white/5 px-4 py-2"
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {showIcon && <MessageCircle className="w-5 h-5" />}
      {children}
    </button>
  );
}
