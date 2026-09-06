import React from 'react';
import { testimonials } from '../data/menuData';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-cream-50 border-b border-brown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (NO eyebrow pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-950">
            Testimoni Pelanggan
          </h2>
          <p className="text-brown-700 text-sm sm:text-base mt-1.5 leading-relaxed">
            Cerita pengalaman dari pelanggan rumah tangga, koordinator arisan, dan instansi di Manyar serta Surabaya.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-brown-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="text-accent-600 font-bold text-xs tracking-wider">
                  ★ 5.0 &bull; {t.event}
                </div>
                <p className="text-xs sm:text-sm text-brown-800 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-brown-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-cream-200 text-brown-900 font-serif font-bold text-sm flex items-center justify-center border border-brown-300">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-brown-950 leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-brown-600">
                    {t.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
