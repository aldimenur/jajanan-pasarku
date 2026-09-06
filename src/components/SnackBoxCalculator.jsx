import React, { useState } from 'react';
import { menuItems, businessInfo } from '../data/menuData';
import { Plus, Minus, Trash2, Send, Box, Info, ShoppingBag } from 'lucide-react';

export default function SnackBoxCalculator({ selectedItems, setSelectedItems }) {
  const [boxCount, setBoxCount] = useState(25);
  const [packageType, setPackageType] = useState('box-air');
  const [notes, setNotes] = useState('');

  const packageOptions = [
    {
      id: 'box-air',
      name: 'Box Kraft + Air Mineral',
      desc: 'Box karton ramah lingkungan, alas renda, tisu, tusuk gigi, + Air Mineral Gelas',
      extraPrice: 2500,
    },
    {
      id: 'box-standard',
      name: 'Box Kraft Standard',
      desc: 'Box karton estetik, alas renda kertas, tisu makan, dan tusuk gigi higienis',
      extraPrice: 2000,
    },
    {
      id: 'mika-hemat',
      name: 'Mika Bening Segel',
      desc: 'Kemasan mika bening tebal dengan label stempel Rasa Ndeso',
      extraPrice: 1000,
    },
    {
      id: 'tampah',
      name: 'Penyajian Tampah Bambu',
      desc: 'Disusun di atas tampah bambu tradisional dengan hiasan daun pisang & garnish',
      extraPrice: 20000,
    }
  ];

  const handleToggleItem = (item) => {
    const existing = selectedItems.find(i => i.id === item.id);
    if (existing) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, { ...item, qtyPerBox: 1 }]);
    }
  };

  const updateItemQty = (id, delta) => {
    setSelectedItems(selectedItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, (item.qtyPerBox || 1) + delta);
        return { ...item, qtyPerBox: newQty };
      }
      return item;
    }));
  };

  const selectedPkg = packageOptions.find(p => p.id === packageType) || packageOptions[0];
  
  const snacksTotalPerBox = selectedItems.reduce(
    (acc, curr) => acc + (curr.price * (curr.qtyPerBox || 1)),
    0
  );

  const isTampah = packageType === 'tampah';
  const pricePerBox = snacksTotalPerBox + (isTampah ? 0 : selectedPkg.extraPrice);
  const grandTotal = isTampah
    ? (snacksTotalPerBox * boxCount) + selectedPkg.extraPrice
    : pricePerBox * boxCount;

  const handleOrderWhatsApp = () => {
    if (selectedItems.length === 0) {
      alert('Silakan pilih minimal 1 jenis jajanan terlebih dahulu.');
      return;
    }

    const itemListText = selectedItems
      .map((item, idx) => `  ${idx + 1}. ${item.name} (${item.qtyPerBox || 1} pcs @Rp ${item.price.toLocaleString('id-ID')})`)
      .join('\n');

    const message = `Halo Dapur *Rasa Ndeso Manyar*, saya ingin pesan paket custom:\n\n` +
      `*Jenis Kemasan:* ${selectedPkg.name}\n` +
      `*Jumlah Pesanan:* ${boxCount} ${isTampah ? 'porsi/tampah' : 'box'}\n` +
      `*Kombinasi Jajanan per ${isTampah ? 'tampah' : 'box'}:*\n${itemListText}\n\n` +
      `*Estimasi Total:* Rp ${grandTotal.toLocaleString('id-ID')} (Rp ${pricePerBox.toLocaleString('id-ID')} per ${isTampah ? 'porsi' : 'box'})\n` +
      (notes ? `*Catatan Khusus:* ${notes}\n\n` : '\n') +
      `Mohon info ketersediaan slot tanggal & jadwal kirimnya. Terima kasih!`;

    const url = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSummary = () => {
    const el = document.getElementById('ringkasan-kalkulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kalkulator" className="py-12 sm:py-20 bg-cream-50 scroll-mt-16 border-b border-brown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brown-950">
            Kalkulator Snack Box & Tampah
          </h2>
          <p className="text-brown-700 text-xs sm:text-base mt-1 leading-relaxed">
            Sesuaikan isi jajanan, jenis kemasan, dan jumlah box sesuai kebutuhan rapat kantor atau arisan di Manyar dan sekitarnya.
          </p>
        </div>

        {/* Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Step 1: Packaging Option */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-brown-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-brown-900 uppercase tracking-wider flex items-center gap-1.5">
                <Box className="w-4 h-4 text-pandan-700" />
                1. Pilih Jenis Kemasan
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {packageOptions.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setPackageType(pkg.id)}
                    className={`text-left p-3 rounded-lg border transition-colors min-h-[48px] ${
                      packageType === pkg.id
                        ? 'border-pandan-700 bg-pandan-50/70 text-brown-950 ring-1 ring-pandan-700'
                        : 'border-brown-200 hover:border-brown-300 bg-white text-brown-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold">{pkg.name}</span>
                      <span className="text-[11px] sm:text-xs font-bold text-pandan-700">
                        +{pkg.extraPrice > 0 ? `Rp ${pkg.extraPrice.toLocaleString('id-ID')}` : 'Gratis'}
                      </span>
                    </div>
                    <p className="text-[11px] text-brown-600 mt-0.5 line-clamp-2 leading-tight">
                      {pkg.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Items */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-brown-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brown-900 uppercase tracking-wider">
                  2. Pilih Kombinasi Jajanan ({selectedItems.length} Dipilih)
                </span>
                <span className="text-[11px] text-brown-500">
                  Ideal 3-4 jajanan/box
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-80 overflow-y-auto pr-1">
                {menuItems.map((item) => {
                  const isSelected = selectedItems.some(i => i.id === item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleToggleItem(item)}
                      className={`p-2 rounded-lg border text-left transition-colors flex items-start gap-2 min-h-[48px] ${
                        isSelected
                          ? 'border-pandan-700 bg-pandan-50/70 ring-1 ring-pandan-700'
                          : 'border-brown-200 hover:border-brown-300 bg-cream-50/40'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded object-cover shrink-0 mt-0.5"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold truncate text-brown-950">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-brown-600">
                          Rp {item.price.toLocaleString('id-ID')}
                        </p>
                        <span className={`inline-block mt-0.5 text-[9px] px-1.5 py-0.2 rounded font-semibold ${
                          isSelected ? 'bg-pandan-800 text-white' : 'bg-cream-200 text-brown-700'
                        }`}>
                          {isSelected ? '✓ Dipilih' : '+ Pilih'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Box Count & Notes */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-brown-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-brown-900 uppercase tracking-wider block">
                3. Tentukan Jumlah {isTampah ? 'Porsi' : 'Box'}
              </span>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex items-center justify-between sm:justify-start gap-2 bg-cream-100 p-1.5 rounded-lg border border-brown-200">
                  <button
                    onClick={() => setBoxCount(Math.max(10, boxCount - 5))}
                    className="w-11 h-11 sm:w-9 sm:h-9 rounded-lg bg-white hover:bg-cream-200 text-brown-900 font-bold flex items-center justify-center border border-brown-200 shadow-sm"
                    aria-label="Kurangi 5 box"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="px-3 text-center min-w-[70px]">
                    <span className="text-xl font-bold font-serif text-brown-950 block leading-tight">{boxCount}</span>
                    <span className="text-[10px] text-brown-500 uppercase">{isTampah ? 'Porsi' : 'Box'}</span>
                  </div>
                  <button
                    onClick={() => setBoxCount(boxCount + 5)}
                    className="w-11 h-11 sm:w-9 sm:h-9 rounded-lg bg-white hover:bg-cream-200 text-brown-900 font-bold flex items-center justify-center border border-brown-200 shadow-sm"
                    aria-label="Tambah 5 box"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {[15, 25, 50, 100, 200].map(cnt => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setBoxCount(cnt)}
                      className={`px-3 py-2 sm:py-1 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
                        boxCount === cnt
                          ? 'bg-pandan-800 text-white'
                          : 'bg-cream-100 text-brown-800 hover:bg-cream-200 border border-brown-200'
                      }`}
                    >
                      {cnt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-semibold text-brown-800 mb-1">
                  Catatan Tambahan (Tanggal & Waktu Kirim di Manyar/Surabaya):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rapat Kamis jam 08.00 pagi di Manyar Kertoarjo..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-brown-200 bg-white focus:outline-none focus:border-pandan-700 min-h-[44px]"
                />
              </div>
            </div>

          </div>

          {/* Summary Column (5 Cols) */}
          <div id="ringkasan-kalkulator" className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-brown-300 shadow-sm space-y-4 sm:space-y-5">
              
              <div className="border-b border-brown-200 pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brown-950">
                    Ringkasan Estimasi
                  </h3>
                  <span className="text-xs font-bold text-pandan-800 bg-pandan-100 px-2 py-0.5 rounded">
                    {boxCount} {isTampah ? 'Porsi' : 'Box'}
                  </span>
                </div>
                <p className="text-xs text-brown-600 mt-0.5">
                  Kemasan: <strong>{selectedPkg.name}</strong>
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-brown-800 block">
                  Isi Jajanan:
                </span>

                {selectedItems.length === 0 ? (
                  <div className="p-3 rounded-lg bg-cream-50 border border-dashed border-brown-300 text-center text-xs text-brown-600">
                    Pilih minimal 1 jajanan dari daftar di atas.
                  </div>
                ) : (
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {selectedItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-xs bg-cream-50 p-2 rounded border border-brown-200">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleToggleItem(item)}
                            className="p-1 text-brown-400 hover:text-red-600"
                            title="Hapus"
                            aria-label={`Hapus ${item.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-medium text-brown-900">{item.name}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded border border-brown-200">
                            <button
                              onClick={() => updateItemQty(item.id, -1)}
                              className="text-brown-800 font-bold px-1 min-h-[28px] flex items-center"
                              aria-label="Kurang 1"
                            >
                              -
                            </button>
                            <span className="font-bold text-xs">{item.qtyPerBox || 1}</span>
                            <button
                              onClick={() => updateItemQty(item.id, 1)}
                              className="text-brown-800 font-bold px-1 min-h-[28px] flex items-center"
                              aria-label="Tambah 1"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-semibold text-pandan-800 min-w-[55px] text-right">
                            Rp {((item.qtyPerBox || 1) * item.price).toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Subtotals */}
              <div className="space-y-1.5 pt-2 border-t border-brown-200 text-xs">
                <div className="flex justify-between text-brown-700">
                  <span>Subtotal Jajanan:</span>
                  <span className="font-semibold">Rp {snacksTotalPerBox.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-brown-700">
                  <span>Kemasan ({selectedPkg.name}):</span>
                  <span className="font-semibold">
                    +{isTampah ? `Rp ${selectedPkg.extraPrice.toLocaleString('id-ID')} (flat)` : `Rp ${selectedPkg.extraPrice.toLocaleString('id-ID')}/box`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-brown-950 pt-2 border-t border-brown-200">
                  <span>Estimasi per {isTampah ? 'Porsi' : 'Box'}:</span>
                  <span className="text-pandan-800 font-bold">
                    Rp {pricePerBox.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              {/* Total Box */}
              <div className="bg-pandan-800 text-white p-4 rounded-xl space-y-0.5 text-center">
                <span className="text-[11px] text-pandan-200 font-medium">
                  Total Estimasi ({boxCount} {isTampah ? 'Porsi' : 'Box'})
                </span>
                <div className="text-2xl font-bold font-serif text-cream-50">
                  Rp {grandTotal.toLocaleString('id-ID')}
                </div>
              </div>

              {/* Submit to WhatsApp Button: 48px touch target on mobile */}
              <button
                onClick={handleOrderWhatsApp}
                disabled={selectedItems.length === 0}
                className={`w-full py-3.5 px-4 rounded-lg font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 min-h-[48px] ${
                  selectedItems.length === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-pandan-700 hover:bg-pandan-800 text-white shadow-sm'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Pesan Rincian Ini ke WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-brown-600">
                <Info className="w-3.5 h-3.5 text-pandan-700 shrink-0" />
                <span>Format rincian otomatis terisi di chat WhatsApp</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Mobile Sticky Quick Summary Bar when items are selected */}
      {selectedItems.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brown-200 p-3 shadow-lg flex items-center justify-between safe-bottom">
          <div>
            <div className="text-[11px] text-brown-600">
              {selectedItems.length} Jajanan &bull; {boxCount} {isTampah ? 'Porsi' : 'Box'}
            </div>
            <div className="text-sm font-bold font-serif text-pandan-800">
              Rp {grandTotal.toLocaleString('id-ID')}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollToSummary}
              className="px-3 py-2 rounded-lg border border-brown-200 bg-cream-50 text-brown-900 text-xs font-semibold min-h-[40px] flex items-center gap-1"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-pandan-700" />
              <span>Rincian</span>
            </button>
            <button
              onClick={handleOrderWhatsApp}
              className="px-4 py-2 rounded-lg bg-pandan-700 text-white text-xs font-bold min-h-[40px] flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Pesan WA</span>
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
