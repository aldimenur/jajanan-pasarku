import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { businessInfo } from '../data/menuData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Daftar Menu', href: '#menu' },
    { name: 'Paket Acara', href: '#paket' },
    { name: 'Kalkulator Box', href: '#kalkulator' },
    { name: 'Lokasi & Jam', href: '#lokasi' },
  ];

  const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    'Halo Rasa Ndeso Manyar, saya ingin pesan jajanan pasar tradisional.'
  )}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-pandan-800 text-cream-50 text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
            <span className="truncate">
              Dapur Manyar Surabaya &bull; Dibuat Fresh Tiap Subuh &bull; Kirim mulai 06.00 WIB
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-cream-200 shrink-0">
            <span>Buka 05.30 - 17.00</span>
            <span>&bull;</span>
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white underline font-semibold"
            >
              Order: {businessInfo.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-200 border-b border-brown-200/70 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 sm:py-2.5' : 'bg-cream-50 py-2.5 sm:py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#beranda" className="flex items-center gap-2.5 py-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-pandan-800 text-cream-50 flex items-center justify-center font-serif font-bold text-base sm:text-lg shrink-0">
              RN
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-2xl font-bold text-brown-950 leading-tight">
                Rasa Ndeso
              </span>
              <span className="block text-[10px] font-medium text-brown-600 tracking-wider uppercase">
                Jajanan Pasar &bull; Manyar
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-brown-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-pandan-700 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions on Desktop */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#kalkulator"
              className="text-xs font-semibold text-brown-800 hover:text-pandan-800 px-3.5 py-2.5 rounded-lg border border-brown-200 hover:bg-cream-100 transition-colors flex items-center gap-1.5 min-h-[40px]"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-pandan-700" />
              <span>Simulasi Box</span>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pandan-700 hover:bg-pandan-800 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm min-h-[40px]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Pesan Sekarang</span>
            </a>
          </div>

          {/* Mobile Actions: WhatsApp Icon + 44x44 Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-pandan-700 hover:bg-pandan-800 text-white flex items-center justify-center shadow-sm"
              aria-label="Pesan via WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl text-brown-900 bg-white border border-brown-200 flex items-center justify-center hover:bg-cream-100 transition-colors"
              aria-label={isOpen ? "Tutup menu" : "Buka menu navigasi"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Full Drawer Overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[88px] bg-brown-950/40 backdrop-blur-sm z-40 animate-in fade-in duration-200">
            <div className="bg-white border-b border-brown-200 px-5 pt-3 pb-8 space-y-4 shadow-xl max-h-[calc(100vh-88px)] overflow-y-auto">
              
              <div className="divide-y divide-brown-100">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-3.5 text-base font-semibold text-brown-950 hover:text-pandan-700 min-h-[48px]"
                  >
                    <span>{link.name}</span>
                    <span className="text-brown-400 text-sm">&rarr;</span>
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="#kalkulator"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 px-4 rounded-xl border border-brown-300 text-brown-900 font-bold text-sm bg-cream-50 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <ShoppingBag className="w-4 h-4 text-pandan-700" />
                  <span>Kalkulator Snack Box Custom</span>
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 px-4 rounded-xl bg-pandan-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat WhatsApp Dapur Manyar</span>
                </a>
              </div>

              <div className="pt-3 text-center text-xs text-brown-500 border-t border-brown-100">
                Jl. Manyar Kertoarjo No. 42 &bull; 05.30 - 17.00 WIB
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
