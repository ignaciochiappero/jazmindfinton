import React, { useState } from 'react';
import Link from 'next/link';

const FlowerButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true); // Deshabilitar el botón
      setTimeout(() => {
        // Redirigir después de 1.5 segundos
        window.location.href = '/portfolio'; // Cambiar la ubicación de la ventana
      }, 1500);
    }
  };

  return (
    <div className="ml-3 lg:ml-16">
      {/* BOTÓN */}
      <button
        onClick={handleClick}
        disabled={clicked} // Deshabilitar el botón si ya fue clickeado
        className={`px-1 inline-block w-full sm:w-fit rounded-full text-white ${clicked ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <div className="button">
          <div className="button__content">
            <span className="button__text">Conocé mi trabajo</span>

            <div className="button__reflection-1"></div>
            <div className="button__reflection-2"></div>
          </div>

          <img src="./star.png" alt="" className="button__star-1" />
          <img src="./star.png" alt="" className="button__star-2" />
          <img src="./circle.png" alt="" className="button__circle-1" />
          <img src="./circle.png" alt="" className="button__circle-2" />
          <img src="./diamond.png" alt="" className="button__diamond" />
          <img src="./triangle.png" alt="" className="button__triangle" />

          <div className="button__shadow"></div>
        </div>
      </button>
    </div>
  );
};

export default FlowerButton;
