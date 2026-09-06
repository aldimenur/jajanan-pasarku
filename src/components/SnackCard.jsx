import React from 'react';
import { Plus, MessageCircle, Check } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function SnackCard({ item, onAddToBox, isAdded }) {
  const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    `Halo Rasa Ndeso, saya ingin pesan menu: *${item.name}* (Rp ${item.price.toLocaleString('id-ID')}/${item.unit}). Berapa minimal order untuk hari ini?`
  )}`;

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-brown-200 shadow-sm hover:border-pandan-600/60 transition-all flex flex-col justify-between">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badges on mobile */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {item.isBestSeller && (
            <span className="bg-accent-600 text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm">
              Favorit
            </span>
          )}
          <span className={`text-[10px] sm:text-[11px] font-medium px-1.5 sm:px-2 py-0.5 rounded shadow-sm ${
            item.category === 'manis' 
              ? 'bg-cream-100/95 text-brown-900 border border-brown-200' 
              : 'bg-pandan-100/95 text-pandan-900 border border-pandan-200'
          }`}>
            {item.category === 'manis' ? 'Manis' : 'Gurih'}
          </span>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-2 right-2 bg-brown-950/90 text-white px-2 py-0.5 sm:py-1 rounded shadow text-right">
          <span className="text-xs sm:text-sm font-bold font-serif">
            Rp {item.price.toLocaleString('id-ID')}
          </span>
          <span className="text-[10px] text-cream-200 ml-0.5">/{item.unit}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5">
        <div className="space-y-1">
          <h4 className="font-serif text-sm sm:text-lg font-bold text-brown-950 leading-snug">
            {item.name}
          </h4>
          <p className="text-[11px] sm:text-xs text-brown-700 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Flavor characteristic */}
          <div className="hidden sm:block pt-1 text-[11px] text-brown-600">
            <span className="font-semibold text-pandan-800">Cita rasa: </span>
            <span>{item.tasteNotes}</span>
          </div>
        </div>

        {/* Action Buttons: 44px touch target on mobile */}
        <div className="pt-2 border-t border-brown-100 flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => onAddToBox(item)}
            className={`flex-1 py-2 sm:py-2.5 px-2.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1 min-h-[40px] sm:min-h-[42px] ${
              isAdded
                ? 'bg-pandan-800 text-white'
                : 'bg-cream-100 hover:bg-cream-200 text-brown-900 border border-brown-200'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Di Box</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">+ Box</span>
              </>
            )}
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 bg-cream-50 hover:bg-pandan-700 hover:text-white text-brown-800 rounded-lg transition-colors border border-brown-200 min-h-[40px] min-w-[40px] sm:min-h-[42px] sm:min-w-[42px] flex items-center justify-center shrink-0"
            title={`Pesan ${item.name} via WhatsApp`}
            aria-label={`Pesan ${item.name} via WhatsApp`}
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
