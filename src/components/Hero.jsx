import React from 'react';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function Hero() {
  const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rasa Ndeso Manyar, saya ingin memesan jajanan pasar tradisional fresh.'
  )}`;

  return (
    <section id="beranda" className="pt-24 pb-12 sm:pt-36 sm:pb-20 bg-cream-50 border-b border-brown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Direct Location & Freshness Tag */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-pandan-800 bg-pandan-100/70 border border-pandan-200/80 px-3 py-1 rounded-md">
              <MapPin className="w-3.5 h-3.5 text-pandan-700 shrink-0" />
              <span>Dapur Manyar, Surabaya &bull; Dibuat Fresh Tiap Subuh</span>
            </div>

            {/* Headline - fluid font sizing for mobile */}
            <h1 className="font-serif text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-brown-950 leading-[1.2] sm:leading-[1.18] tracking-tight">
              Jajanan Pasar Tradisional, <br className="hidden sm:inline" />
              <span className="text-pandan-700 font-semibold block sm:inline">
                Rasa yang Selalu Bikin Rindu
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg text-brown-800 leading-relaxed max-w-2xl font-normal">
              {businessInfo.subheadline}
            </p>

            {/* Solid Value Attributes */}
            <div className="pt-1 pb-1 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-y-2 sm:gap-x-6 text-xs sm:text-sm text-brown-800 font-medium border-y border-brown-200/60 py-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-pandan-700 shrink-0" />
                <span>Gula Aren & Suji Pandan Asli</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-pandan-700 shrink-0" />
                <span>100% Tanpa Pengawet</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-pandan-700 shrink-0" />
                <span>Siap Kirim Subuh ke Manyar & Sekitarnya</span>
              </div>
            </div>

            {/* Action CTAs: Full width on mobile with 48px touch height */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-pandan-700 hover:bg-pandan-800 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-colors shadow-sm min-h-[48px]"
              >
                <span>Pesan Jajanan Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-cream-100 text-brown-900 font-medium text-sm sm:text-base px-5 py-3.5 rounded-xl border border-brown-200 transition-colors min-h-[48px]"
              >
                <span>Lihat Menu</span>
              </a>

              <a
                href="#kalkulator"
                className="w-full sm:w-auto text-center text-accent-600 hover:text-accent-700 font-semibold text-sm sm:text-base py-2.5 sm:px-3 transition-colors underline decoration-1 underline-offset-4"
              >
                Pesan Snack Box &rarr;
              </a>
            </div>

            {/* Honest Grounded Summary */}
            <div className="pt-1 text-xs text-brown-600 leading-normal">
              Melayani pesanan harian sarapan, kumpul arisan tampah, dan snack box rapat instansi di Surabaya & Gresik.
            </div>

          </div>

          {/* Right Column: Hero Photo Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-brown-200 bg-white p-2 sm:p-2.5 shadow-sm">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-cream-100">
                <img
                  src="/images/hero-jajanan-pasar.jpg"
                  alt="Aneka Jajanan Pasar Tradisional Nusantara Rasa Ndeso Manyar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Clean Editorial Caption Below Image */}
              <div className="pt-3 pb-1 px-1.5 flex items-center justify-between text-xs text-brown-800">
                <div className="pr-2">
                  <p className="font-serif font-bold text-sm text-brown-950">Aneka Jajanan Pasar Tradisional</p>
                  <p className="text-brown-600 text-[11px] sm:text-xs truncate">Klepon, onde-onde, lemper, pastel, lumpur</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-pandan-700 block">Dibuat Fresh</span>
                  <span className="text-[11px] text-brown-500">Mulai Rp 3.000/pcs</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
