import React from 'react';
import { businessInfo } from '../data/menuData';
import { MapPin, Clock, Truck, Phone, Navigation } from 'lucide-react';

export default function LocationContact() {
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Manyar Kertoarjo Surabaya')}`;
  const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rasa Ndeso Manyar, saya ingin menanyakan lokasi dan jadwal pengiriman.'
  )}`;

  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-cream-50 border-b border-brown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (NO eyebrow pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-950">
            Lokasi Dapur & Jam Operasional
          </h2>
          <p className="text-brown-700 text-sm sm:text-base mt-1.5 leading-relaxed">
            Dapur utama kami berlokasi di Manyar, Surabaya. Siap melayani pengantaran pagi ke seluruh Surabaya dan sekitarnya.
          </p>
        </div>

        {/* 2 Columns: Information & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address */}
            <div className="bg-white rounded-xl p-5 border border-brown-200 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-pandan-800 font-bold text-xs">
                <MapPin className="w-4 h-4" />
                <span>Alamat Usaha</span>
              </div>
              <p className="text-sm font-semibold text-brown-950">
                {businessInfo.address}
              </p>
              <div className="pt-1">
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-pandan-800 hover:text-pandan-900 bg-pandan-50 hover:bg-pandan-100 px-3 py-1.5 rounded-lg border border-pandan-200/60 transition-colors min-h-[36px]"
                >
                  <Navigation className="w-3.5 h-3.5 text-pandan-700" />
                  <span>Buka Petunjuk Arah di Google Maps</span>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-5 border border-brown-200 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-accent-700 font-bold text-xs">
                <Clock className="w-4 h-4" />
                <span>Jam Buka</span>
              </div>
              <p className="text-sm font-semibold text-brown-950">
                {businessInfo.operationalHours}
              </p>
              <p className="text-xs text-brown-600">
                Pesanan subuh hari H untuk sarapan / kantor dilayani mulai pukul 05.00 WIB.
              </p>
            </div>

            {/* Delivery Area */}
            <div className="bg-white rounded-xl p-5 border border-brown-200 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-pandan-800 font-bold text-xs">
                <Truck className="w-4 h-4" />
                <span>Jangkauan Pengantaran</span>
              </div>
              <p className="text-xs sm:text-sm text-brown-800 leading-relaxed">
                {businessInfo.deliveryCoverage}
              </p>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 bg-pandan-700 hover:bg-pandan-800 text-white rounded-lg text-center text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Dapur: {businessInfo.displayPhone}</span>
              </a>
            </div>

          </div>

          {/* Map Embed (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-2 border border-brown-200 shadow-sm overflow-hidden">
              <div className="rounded-lg overflow-hidden aspect-[16/10] bg-cream-100 border border-brown-100">
                <iframe
                  title="Peta Lokasi Rasa Ndeso Manyar Surabaya"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.73016487146!2d112.7570!3d-7.2790!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbdc59345d47%3A0x6a2c2b3e8a4d46!2sJl.+Manyar+Kertoarjo%2C+Surabaya%2C+Jawa+Timur!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-3 text-xs text-brown-600 flex items-center justify-between">
                <span>Dapur Rasa Ndeso &bull; Manyar, Surabaya</span>
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pandan-700 font-semibold underline"
                >
                  Lihat rute &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
