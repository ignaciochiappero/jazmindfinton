import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div>
      <div className="bg-pink-100 p-4 sm:p-6 rounded-2xl w-full h-full ">
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
          {/* Imagen cuadrada */}
          <div className="w-full max-sm:w-[20px] aspect-square bg-gray-300 rounded-xl flex-shrink-0">
            <Image
              src="/images/about-image.png"
              width={20}
              height={20}
              alt="imagen podcast"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>

          {/* Contenido de texto */}
          <div className="flex flex-col text-left flex-grow">
            <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
              La pelea del Dorado
            </h1>
            <p className="text-gray-700 text-xl">
              Desde la Laguna Setubal y para el mundo, entrevistas con dueños de
              negocios y empresas santafesinas y su relato de cómo sobrevivieron
              a las crisis económicas del país.
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mt-20 justify-center items-center">
          <button className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-gray-50 rounded-full text-pink-600 font-medium text-sm whitespace-nowrap">
            ESCUCHALO EN YOUTUBE
          </button>
          <button className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-gray-50 rounded-full text-pink-600 font-medium text-sm whitespace-nowrap">
            ESCUCHALO EN SPOTIFY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
