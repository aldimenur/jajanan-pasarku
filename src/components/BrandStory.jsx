import React from 'react';
import { businessInfo } from '../data/menuData';

export default function BrandStory() {
  const pillars = [
    {
      title: "Fresh Berdasarkan Pesanan",
      description: "Jajanan dibuat dan dikukus subuh hari H sesuai jumlah pesanan. Tidak ada stok sisa kemarin, sehingga kelembutan dan aroma daun pisang tetap terjaga prima."
    },
    {
      title: "Bahan Alami Pilihan",
      description: "Menggunakan gula aren murni dari perajin lokal, santan perasan pertama kelapa segar, dan pewarna hijau dari sari perasan daun suji pandan asli."
    },
    {
      title: "Proses Bersih & Higienis",
      description: "Dapur kami menerapkan standar kebersihan yang ketat di setiap tahapan pengolahan dan pengemasan, aman dikonsumsi anak-anak hingga orang tua."
    },
    {
      title: "Penyajian Rapi untuk Acara",
      description: "Tampilan tertata cantik dan pantas untuk hidangan tamu, mulai dari kotak mika harian, snack box formal instansi kantor, hingga tampah arisan keluarga."
    }
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-20 bg-cream-100/60 border-b border-brown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Story Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brown-950 leading-snug">
            “Dari jajanan sederhana, lahir rasa yang istimewa.”
          </h2>
          <p className="text-sm sm:text-base text-brown-800 leading-relaxed font-normal">
            {businessInfo.story}
          </p>
        </div>

        {/* Keunggulan Section */}
        <div className="border-t border-brown-200/80 pt-12">
          <div className="max-w-2xl mb-8">
            <h3 className="font-serif text-2xl font-bold text-brown-950">
              Keunggulan Rasa Ndeso
            </h3>
            <p className="text-xs sm:text-sm text-brown-700 mt-1 leading-relaxed">
              Semua jajanan dibuat fresh berdasarkan pesanan, menggunakan bahan pilihan, tanpa menghilangkan cita rasa tradisional. Kami menjaga kebersihan proses produksi, kualitas rasa, dan tampilan produk agar setiap jajanan cocok disajikan untuk keluarga maupun berbagai acara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-brown-200/80 shadow-sm space-y-2.5"
              >
                <div className="text-xs font-bold text-pandan-700 tracking-wider">
                  0{index + 1}
                </div>
                <h4 className="font-serif text-lg font-bold text-brown-950">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-brown-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
