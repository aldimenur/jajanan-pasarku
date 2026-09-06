import React from 'react';
import { orderSteps, businessInfo } from '../data/menuData';
import { PhoneCall } from 'lucide-react';

export default function OrderGuide() {
  const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rasa Ndeso, saya ingin tanya cara pemesanan jajanan pasar untuk acara saya.'
  )}`;

  return (
    <section className="py-16 sm:py-20 bg-cream-100/60 border-b border-brown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (NO eyebrow pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-950">
            Cara Pemesanan Jajanan
          </h2>
          <p className="text-brown-700 text-sm sm:text-base mt-1.5 leading-relaxed">
            Proses pemesanan mudah dan langsung terhubung dengan tim dapur Rasa Ndeso.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-brown-200 shadow-sm space-y-3"
            >
              <div className="text-sm font-bold font-serif text-pandan-800 border-b border-brown-100 pb-2">
                Langkah {step.step}
              </div>
              <h3 className="font-serif text-base font-bold text-brown-950">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-brown-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className="mt-10 text-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-pandan-700 hover:bg-pandan-800 text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-colors min-h-[48px]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Hubungi Kami via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
