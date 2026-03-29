import React from 'react';
import Header from '../components/Header';
import OfferBanner from '../components/OfferBanner';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const products = [
    { id: 1, nameEnglish: 'Sugar', nameTamil: 'சர்க்கரை', price: 40, image: null },
    { id: 2, nameEnglish: 'Rice', nameTamil: 'அரிசி', price: 60, image: null },
    { id: 3, nameEnglish: 'Dal', nameTamil: 'பருப்பு', price: 120, image: null },
    { id: 4, nameEnglish: 'Oil', nameTamil: 'எண்ணெய்', price: 180, image: null },
    { id: 5, nameEnglish: 'Soap', nameTamil: 'சோப்பு', price: 35, image: null },
    { id: 6, nameEnglish: 'Tea Powder', nameTamil: 'தேயிலை தூள்', price: 50, image: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      {/* Header Section */}
      <Header />

      <main className="max-w-screen-xl mx-auto pb-8">
        {/* Banner Section */}
        <OfferBanner />

        {/* Product Grid Section */}
        <section className="px-4 mt-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
              Most Popular Items
            </h2>
            <button className="text-blue-600 font-semibold text-sm">View All</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                nameEnglish={product.nameEnglish}
                nameTamil={product.nameTamil}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
