import React, { useState } from 'react';
import Header from '../components/Header';
import OfferBanner from '../components/OfferBanner';
import ProductCard from '../components/ProductCard';
import PriceToggle from '../components/PriceToggle';
import marketData from '../data/market_prices.json';

const HomePage = () => {
  const [mode, setMode] = useState('retail');

  const products = [
    { id: 1, key: 'sugar', nameEnglish: 'Sugar', nameTamil: 'சர்க்கரை', price: 40, image: null },
    { id: 2, key: 'rice', nameEnglish: 'Rice', nameTamil: 'அரிசி', price: 60, image: null },
    { id: 3, key: 'toor_dal', nameEnglish: 'Toor Dal', nameTamil: 'பருப்பு', price: 120, image: null },
    { id: 4, key: 'oil', nameEnglish: 'Oil', nameTamil: 'எண்ணெய்', price: 180, image: null },
    { id: 5, key: 'soap', nameEnglish: 'Soap', nameTamil: 'சோப்பு', price: 35, image: null },
    { id: 6, key: 'tea', nameEnglish: 'Tea Powder', nameTamil: 'தேயிலை தூள்', price: 50, image: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      {/* Header Section */}
      <Header />

      <main className="max-w-screen-xl mx-auto pb-8">
        {/* Banner Section */}
        <OfferBanner />

        {/* Wholesale/Retail Toggle */}
        <PriceToggle mode={mode} setMode={setMode} />

        {/* Product Grid Section */}
        <section className="px-4 mt-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
              Most Popular Items
            </h2>
            <button className="text-blue-600 font-semibold text-sm hover:underline">View All</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 lg:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                nameEnglish={product.nameEnglish}
                nameTamil={product.nameTamil}
                price={product.price}
                image={product.image}
                mode={mode}
                marketPrice={marketData.prices[product.key]?.market_price}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
