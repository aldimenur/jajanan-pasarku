import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import MenuSection from './components/MenuSection';
import PackageSection from './components/PackageSection';
import SnackBoxCalculator from './components/SnackBoxCalculator';
import WhyUsSection from './components/WhyUsSection';
import Testimonials from './components/Testimonials';
import OrderGuide from './components/OrderGuide';
import LocationContact from './components/LocationContact';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { menuItems } from './data/menuData';

export default function App() {
  // Shared state for the Snack Box Calculator
  // Default selected items: Klepon, Lemper, and Risoles (popular 3-item combo)
  const defaultSelection = menuItems
    .filter(item => ['klepon', 'lemper', 'risoles'].includes(item.id))
    .map(item => ({ ...item, qtyPerBox: 1 }));

  const [selectedBoxItems, setSelectedBoxItems] = useState(defaultSelection);

  // Toggle or add item from Menu Section to Calculator
  const handleAddToBox = (item) => {
    const exists = selectedBoxItems.find(i => i.id === item.id);
    if (exists) {
      setSelectedBoxItems(selectedBoxItems.filter(i => i.id !== item.id));
    } else {
      setSelectedBoxItems([...selectedBoxItems, { ...item, qtyPerBox: 1 }]);
    }
  };

  const handleSelectCustomPackage = () => {
    const el = document.getElementById('kalkulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedBoxItemIds = selectedBoxItems.map(i => i.id);

  return (
    <div className="min-h-screen bg-cream-50 text-brown-900 font-sans flex flex-col selection:bg-pandan-100 selection:text-pandan-800">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <BrandStory />
        <MenuSection
          onAddToBox={handleAddToBox}
          selectedBoxItemIds={selectedBoxItemIds}
        />
        <PackageSection onSelectCustomPackage={handleSelectCustomPackage} />
        <SnackBoxCalculator
          selectedItems={selectedBoxItems}
          setSelectedItems={setSelectedBoxItems}
        />
        <WhyUsSection />
        <Testimonials />
        <OrderGuide />
        <LocationContact />
        <FAQSection />
      </main>

      <Footer />
      <FloatingWhatsApp hasStickyBar={selectedBoxItems.length > 0} />
    </div>
  );
}
