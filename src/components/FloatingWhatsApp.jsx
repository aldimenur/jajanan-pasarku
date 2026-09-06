import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function FloatingWhatsApp({ hasStickyBar = false }) {
  const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo Dapur Rasa Ndeso Manyar, saya ingin memesan jajanan pasar tradisional.'
  )}`;

  return (
    <div
      className={`fixed right-4 sm:right-6 z-50 transition-all duration-300 ${
        hasStickyBar
          ? 'bottom-20 lg:bottom-6'
          : 'bottom-5 sm:bottom-6'
      }`}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 border border-white/20"
        aria-label="Chat WhatsApp Rasa Ndeso Manyar"
      >
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="text-xs sm:text-sm font-bold tracking-wide">
          <span className="inline sm:hidden">Pesan WA</span>
          <span className="hidden sm:inline">Pesan via WhatsApp</span>
        </span>
      </a>
    </div>
  );
}
