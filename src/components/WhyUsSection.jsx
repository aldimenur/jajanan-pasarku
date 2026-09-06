import React from 'react';
import { whyChooseUs } from '../data/menuData';
import { Check, X } from 'lucide-react';

export default function WhyUsSection() {
  const comparisons = [
    {
      feature: "Waktu Pengolahan",
      rasaNdeso: "Dimasak fresh subuh hari H (03.00 - 05.00 WIB)",
      others: "Seringkali sisa kemarin atau dihangatkan ulang",
    },
    {
      feature: "Pewarna & Pemanis",
      rasaNdeso: "100% Gula Aren murni & Daun Suji Pandan Asli",
      others: "Campuran biang gula (sakarin/siklamat) & pewarna kimia",
    },
    {
      feature: "Kepadatan Isian",
      rasaNdeso: "Padat & melimpah (ayam bumbu suwir, unti kelapa tebal)",
      others: "Isian tipis, dominan adonan tepung kulit",
    },
    {
      feature: "Dukungan Acara & Kantor",
      rasaNdeso: "Bisa nota resmi stempel basah, invoice PDF, & kurir tepat waktu",
      others: "Tanpa nota resmi, sulit koordinasi jadwal acara",
    },
  ];

  return (
    <section id="keunggulan-kami" className="py-16 sm:py-20 bg-cream-100/60 border-b border-brown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (NO eyebrow pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-950">
            Kenapa Memilih Rasa Ndeso?
          </h2>
          <p className="text-brown-700 text-sm sm:text-base mt-1.5 leading-relaxed">
            Rasa autentik seperti buatan rumah, dibuat fresh setiap hari, bahan berkualitas, pilihan beragam, harga terjangkau, dan siap melayani pesanan jumlah banyak untuk berbagai acara.
          </p>
        </div>

        {/* 6 Grid Benefits (Clean typography, no neon icon blobs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-brown-200 shadow-sm space-y-2"
            >
              <h3 className="font-serif text-lg font-bold text-brown-950">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-brown-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-brown-200 shadow-sm overflow-hidden">
          <h3 className="font-serif text-xl font-bold text-brown-950 mb-1">
            Standar Dapur Kami vs Jajanan Pasar Biasa
          </h3>
          <p className="text-xs text-brown-600 mb-6">
            Komitmen kami untuk menyajikan jajanan tradisional yang sehat, higienis, dan lezat untuk keluarga Anda.
          </p>

          {/* Mobile Comparison Cards (< sm) */}
          <div className="sm:hidden space-y-3">
            {comparisons.map((c, i) => (
              <div key={i} className="rounded-xl border border-brown-200 overflow-hidden text-xs">
                <div className="bg-cream-100/80 px-3.5 py-2 font-bold text-brown-950 border-b border-brown-200">
                  {c.feature}
                </div>
                <div className="p-3 bg-pandan-50/50 flex items-start gap-2 border-b border-pandan-100">
                  <Check className="w-4 h-4 text-pandan-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-pandan-950 block text-[11px] mb-0.5">Rasa Ndeso:</span>
                    <span className="text-pandan-900 leading-relaxed">{c.rasaNdeso}</span>
                  </div>
                </div>
                <div className="p-3 bg-white flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brown-600 block text-[11px] mb-0.5">Jajanan Pasar Biasa:</span>
                    <span className="text-brown-700 leading-relaxed">{c.others}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet Comparison Table (>= sm) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-brown-200 text-brown-900">
                  <th className="py-2.5 px-3 font-bold w-1/3">Aspek Kualitas</th>
                  <th className="py-2.5 px-3 bg-pandan-50 text-pandan-900 font-bold w-1/3">
                    Rasa Ndeso Manyar
                  </th>
                  <th className="py-2.5 px-3 text-brown-600 font-medium w-1/3">
                    Jajanan Pasar Biasa
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown-100">
                {comparisons.map((c, i) => (
                  <tr key={i} className="hover:bg-cream-50/50">
                    <td className="py-3 px-3 font-semibold text-brown-900">{c.feature}</td>
                    <td className="py-3 px-3 bg-pandan-50/40 text-pandan-900">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-pandan-700 shrink-0 mt-0.5" />
                        <span>{c.rasaNdeso}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-brown-700">
                      <div className="flex items-start gap-1.5">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{c.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
