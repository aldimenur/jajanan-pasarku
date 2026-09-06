import React, { useState } from 'react';
import { menuItems } from '../data/menuData';
import SnackCard from './SnackCard';
import { Search } from 'lucide-react';

export default function MenuSection({ onAddToBox, selectedBoxItemIds }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesFilter =
      activeFilter === 'all'
        ? true
        : activeFilter === 'favorit'
        ? item.isBestSeller
        : item.category === activeFilter;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tasteNotes.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const filterTabs = [
    { id: 'all', label: 'Semua Menu', count: menuItems.length },
    { id: 'favorit', label: 'Favorit', count: menuItems.filter(i => i.isBestSeller).length },
    { id: 'manis', label: 'Manis', count: menuItems.filter(i => i.category === 'manis').length },
    { id: 'gurih', label: 'Gurih', count: menuItems.filter(i => i.category === 'gurih').length },
  ];

  return (
    <section id="menu" className="py-12 sm:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brown-950">
            Daftar Menu Jajanan Pasar
          </h2>
          <p className="text-brown-700 text-xs sm:text-base mt-1 leading-relaxed">
            Dibuat fresh setiap subuh di Manyar dengan bahan alami berkualitas dan resep autentik.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-brown-200">
          
          {/* Horizontal Swipable Filter Tabs on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap min-h-[40px] shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-pandan-800 text-white'
                    : 'bg-white text-brown-800 hover:bg-cream-100 border border-brown-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  activeFilter === tab.id
                    ? 'bg-pandan-900 text-pandan-100'
                    : 'bg-cream-100 text-brown-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box with 44px touch target on Mobile */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-brown-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari jajanan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2.5 sm:py-2 text-xs sm:text-sm rounded-lg border border-brown-200 bg-white focus:outline-none focus:border-pandan-700 placeholder-brown-400 min-h-[44px] sm:min-h-0"
            />
          </div>

        </div>

        {/* Menu Cards Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredItems.map((item) => (
              <SnackCard
                key={item.id}
                item={item}
                onAddToBox={onAddToBox}
                isAdded={selectedBoxItemIds.includes(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-brown-200 p-6 max-w-sm mx-auto">
            <p className="font-serif font-bold text-brown-900">Jajanan tidak ditemukan</p>
            <p className="text-xs text-brown-600 mt-1">Coba kata kunci lain atau gunakan pilihan kategori.</p>
            <button
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 rounded-lg bg-pandan-700 text-white text-xs font-semibold min-h-[40px]"
            >
              Reset Pencarian
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
