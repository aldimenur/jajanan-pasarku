import React from 'react';
import { businessInfo } from '../data/menuData';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rasa Ndeso Manyar, saya ingin memesan jajanan pasar.'
  )}`;

  return (
    <footer className="bg-brown-950 text-cream-100 pt-14 pb-24 sm:pb-10 border-t border-brown-900 safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-brown-900">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-pandan-700 text-cream-50 flex items-center justify-center font-serif font-bold text-base">
                RN
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Rasa Ndeso
              </span>
            </div>
            <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed max-w-sm">
              Aneka jajanan pasar tradisional Indonesia dengan cita rasa autentik, dibuat fresh setiap subuh di Manyar, Surabaya.
            </p>
            <div className="text-xs text-pandan-300">
              100% Bahan Alami &bull; Tanpa Pengawet &bull; Fresh Setiap Subuh
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-serif text-sm font-bold text-white tracking-wide">
              Navigasi
            </h4>
            <ul className="space-y-1 text-xs text-cream-200/80">
              <li>
                <a href="#beranda" className="inline-block py-1 hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#keunggulan" className="inline-block py-1 hover:text-white transition-colors">Keunggulan Kami</a>
              </li>
              <li>
                <a href="#menu" className="inline-block py-1 hover:text-white transition-colors">Daftar Menu</a>
              </li>
              <li>
                <a href="#paket" className="inline-block py-1 hover:text-white transition-colors">Pilihan Paket</a>
              </li>
              <li>
                <a href="#kalkulator" className="inline-block py-1 hover:text-white transition-colors">Kalkulator Snack Box</a>
              </li>
              <li>
                <a href="#lokasi" className="inline-block py-1 hover:text-white transition-colors">Lokasi Manyar</a>
              </li>
            </ul>
          </div>

          {/* Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-serif text-sm font-bold text-white tracking-wide">
              Kontak Dapur Manyar
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-pandan-400 shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                <span>{businessInfo.operationalHours}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-pandan-400 shrink-0" />
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  WhatsApp: {businessInfo.displayPhone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-300/60">
          <p>
            &copy; {currentYear} Rasa Ndeso Manyar, Surabaya. Hak cipta dilindungi.
          </p>
          <p>
            Kuliner Tradisional Autentik Nusantara
          </p>
        </div>

      </div>
    </footer>
  );
}
