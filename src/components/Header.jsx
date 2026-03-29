import React from 'react';
import { Mic } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-900 tracking-tight font-sans">
        Pandiyan Stores
      </h1>
      <button 
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Voice Search"
      >
        <Mic className="w-5 h-5 text-red-600" />
      </button>
    </header>
  );
};

export default Header;
