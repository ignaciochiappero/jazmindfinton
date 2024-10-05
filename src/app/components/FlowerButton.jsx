import React from 'react';

const FlowerButton = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <button className="relative group bg-green-500 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-green-600">
        Hover sobre mí
        
        {/* Tallo de la flor */}
        <div className="absolute left-1/2 bottom-full -translate-x-1/2 w-1 h-0 group-hover:h-12 bg-green-600 transition-all duration-500"></div>
        
        {/* Pétalos de la flor */}
        <div className="absolute left-1/2 bottom-full -translate-x-1/2 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">

          
          {/* Pétalos */}
          <div className="absolute w-5 h-5 bg-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 delay-500" style={{ top: '-10px' }}></div>
          <div className="absolute w-5 h-5 bg-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 delay-500" style={{ top: '10px' }}></div>
          <div className="absolute w-5 h-5 bg-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 delay-500" style={{ left: '-10px' }}></div>
          <div className="absolute w-5 h-5 bg-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 delay-500" style={{ left: '10px' }}></div>


                    {/* Centro de la flor */}
                    <div className="absolute w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </button>
    </div>
  );
};

export default FlowerButton;