import React, { useState } from 'react';
import { faqs, businessInfo } from '../data/menuData';
import { ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rasa Ndeso, saya punya pertanyaan lain seputar pesanan jajanan pasar.'
  )}`;

  return (
    <section className="py-16 sm:py-20 bg-cream-100/60 border-b border-brown-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (NO eyebrow pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-950">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-brown-700 text-sm sm:text-base mt-1.5 leading-relaxed">
            Informasi praktis seputar pemesanan, waktu antar subuh, dan daya tahan jajanan.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-brown-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-cream-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-brown-950">
                    {faq.question}
                  </span>
                  <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-pandan-700' : 'text-brown-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 pt-0 text-xs sm:text-sm text-brown-700 leading-relaxed border-t border-brown-100">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Support */}
        <div className="mt-8 text-center sm:text-left bg-white rounded-lg p-5 border border-brown-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif font-bold text-sm text-brown-950">Ada pertanyaan yang belum terjawab?</h3>
            <p className="text-xs text-brown-600">Hubungi langsung tim dapur kami untuk konfirmasi ketersediaan porsi atau menu khusus.</p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pandan-700 hover:bg-pandan-800 text-white font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-colors shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
