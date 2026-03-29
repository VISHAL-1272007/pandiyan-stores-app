import React from 'react';

const ProductCard = ({ nameEnglish, nameTamil, price, image, mode, marketPrice }) => {
  const displayPrice = mode === 'retail' ? price : Math.round(price * 0.9);
  
  return (
    <article className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center p-4 border border-gray-100 h-full relative overflow-hidden">
      {mode === 'wholesale' && (
        <div className="absolute top-2 left-2 bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
          Min order: 25kg
        </div>
      )}

      <div className="w-full aspect-square bg-gray-50 rounded-2xl mb-3 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={nameEnglish} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
             📸 {nameEnglish}
          </div>
        )}
      </div>
      
      <div className="w-full text-center mb-2">
        <h3 className="text-gray-900 font-semibold text-sm leading-tight px-1">
          {nameTamil} | {nameEnglish}
        </h3>
        <div className="flex flex-col items-center mt-1">
          <p className="text-green-600 font-bold text-xl leading-none">₹{displayPrice}</p>
          
          {mode === 'retail' && marketPrice && (
            <div className="mt-1 flex items-center gap-1.5 opacity-80">
              <span className="text-[10px] text-gray-500 line-through">₹{marketPrice}</span>
              <span className="text-[10px] font-medium text-orange-600 bg-orange-50 px-1.5 rounded-full border border-orange-100 uppercase tracking-tighter">
                Live Market Price
              </span>
            </div>
          )}
        </div>
      </div>

      <button
        className={`mt-auto w-full text-white font-bold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 focus:ring-4 ${
          mode === 'retail' 
            ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-100' 
            : 'bg-green-600 hover:bg-green-700 focus:ring-green-100'
        }`}
        aria-label={`Add ${nameEnglish} to cart`}
      >
        <span className="text-base leading-none">ADD +</span>
      </button>
    </article>
  );
};

export default ProductCard;
