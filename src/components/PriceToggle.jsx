import React from 'react';

const PriceToggle = ({ mode, setMode }) => {
  return (
    <div className="flex justify-center my-6">
      <div className="bg-gray-100 p-1 rounded-full flex items-center relative w-72 shadow-inner border border-gray-200">
        <button
          onClick={() => setMode('retail')}
          className={`relative z-10 flex-1 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
            mode === 'retail' ? 'text-white' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Retail (சில்லறை)
        </button>
        <button
          onClick={() => setMode('wholesale')}
          className={`relative z-10 flex-1 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
            mode === 'wholesale' ? 'text-white' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Wholesale (மொத்த விலை)
        </button>
        {/* Sliding Indicator for M3 look */}
        <div
          className={`absolute h-9 bg-blue-600 rounded-full shadow-md transition-all duration-300 ease-in-out ${
            mode === 'retail' ? 'left-1 w-[140px]' : 'left-[148px] w-[140px]'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default PriceToggle;
