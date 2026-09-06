import React from 'react';
import { packages, businessInfo } from '../data/menuData';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';

export default function PackageSection({ onSelectCustomPackage }) {
  const getWhatsAppPackageUrl = (pkg) => {
    const text = `Halo Rasa Ndeso, saya tertarik memesan *${pkg.name}* (${pkg.subtitle}). Boleh minta informasi detail dan ketersediaan tanggalnya?`;
    return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="paket" className="py-16 sm:py-20 bg-cream-100/60 border-b border-brown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-950">
            Pilihan Paket Jajanan Pasar
          </h2>
          <p className="text-brown-700 text-sm sm:text-base mt-1.5 leading-relaxed">
            Mulai dari camilan sarapan keluarga, tampah arisan, hingga snack box rapat instansi dengan penyajian rapi dan bersih.
          </p>
        </div>

        {/* 4 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all bg-white border ${
                pkg.popular
                  ? 'border-pandan-700 shadow-md ring-1 ring-pandan-700/20'
                  : 'border-brown-200 shadow-sm hover:border-brown-300'
              }`}
            >
              <div className="space-y-4">
                {pkg.popular && (
                  <span className="inline-block text-[11px] font-bold text-pandan-800 bg-pandan-100 px-2.5 py-0.5 rounded">
                    Pilihan Populer
                  </span>
                )}

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-accent-700 block">
                    {pkg.idealFor}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-brown-950">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-brown-600">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="py-3 border-y border-cream-200">
                  <span className="text-[11px] text-brown-500 block">Estimasi Harga</span>
                  <span className="text-lg font-bold font-serif text-pandan-800">
                    {pkg.priceRange}
                  </span>
                </div>

                {/* Items list */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-brown-900 block">Rincian:</span>
                  <ul className="space-y-2 text-xs text-brown-700">
                    {pkg.itemsInclude.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-pandan-700 shrink-0 mt-0.5" />
                        <span className="leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Minimum 44px touch target */}
              <div className="pt-6 mt-6 border-t border-cream-200">
                {pkg.id === 'paket-custom' ? (
                  <button
                    onClick={onSelectCustomPackage}
                    className="w-full py-3 px-4 rounded-lg text-xs font-bold bg-accent-600 hover:bg-accent-700 text-white transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <span>Buka Kalkulator Box</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={getWhatsAppPackageUrl(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 min-h-[44px] ${
                      pkg.popular
                        ? 'bg-pandan-700 hover:bg-pandan-800 text-white'
                        : 'bg-cream-50 hover:bg-cream-200 text-brown-900 border border-brown-200'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
