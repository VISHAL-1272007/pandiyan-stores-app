import React from 'react';

const OfferBanner = () => {
  return (
    <section className="px-4 py-4">
      <div className="bg-yellow-50 rounded-[24px] overflow-hidden flex items-center justify-between p-6 shadow-sm border border-yellow-100">
        <div className="flex-1">
          <p className="text-yellow-800 text-sm font-medium mb-1 uppercase tracking-wider">
            Special Offer
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            இன்றைய ஆஃபர்: சர்க்கரை ₹40
          </h2>
          <p className="text-gray-600 text-sm">
            Grab it before stock ends!
          </p>
        </div>
        <div className="w-24 h-24 bg-yellow-200/50 rounded-2xl flex items-center justify-center">
          {/* Placeholder Image */}
          <div className="w-16 h-16 bg-white/60 rounded-full animate-pulse flex items-center justify-center text-yellow-600 font-bold">
            %
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
