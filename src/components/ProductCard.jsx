import React from 'react';

const ProductCard = ({ nameEnglish, nameTamil, price, image }) => {
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center p-4 border border-gray-100 h-full">
      <div className="w-full aspect-square bg-gray-50 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={nameEnglish} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
            Image Placeholder
          </div>
        )}
      </div>
      
      <div className="w-full text-center mb-3">
        <h3 className="text-gray-900 font-semibold text-sm leading-tight">
          {nameTamil} | {nameEnglish}
        </h3>
        <p className="text-green-600 font-bold text-lg mt-1">₹{price}</p>
      </div>

      <button
        className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 active:scale-95 focus:ring-4 focus:ring-blue-100"
        aria-label={`Add ${nameEnglish} to cart`}
      >
        <span className="text-xl leading-none">ADD +</span>
      </button>
    </article>
  );
};

export default ProductCard;
