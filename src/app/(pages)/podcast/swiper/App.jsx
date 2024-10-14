"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Card from './podcasts/Card'; // Asegúrate de que esté correctamente importado

export default function App() {
  return (
    <>
      {/* Cartel animado con animación suave de izquierda a derecha */}
      <div className="text-center mb-4 relative overflow-hidden">
        <p className="animate-smooth-slide text-lg font-light text-pink-600 whitespace-nowrap">
          ¡Deslizá para ver más podcasts! ➤ 
        </p>
      </div>

      {/* La pelea del Dorado */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper max-sm:swiper-mb"
      >
        {/* Mapea sobre todos los episodios de "laPeleaDelDorado" */}
        {Array.from({ length: 7 }).map((_, index) => (  // Cambiado para iterar sobre 7 episodios
          <SwiperSlide key={index}>
            <Card podcastType="laPeleaDelDorado" episodeIndex={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Antes que suceda */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-10"
      >
        {/* Mapea sobre todos los episodios de "antesQueSuceda" */}
        {Array.from({ length: 7 }).map((_, index) => (  // Cambiado para iterar sobre 7 cartas
          <SwiperSlide key={index}>
            <Card podcastType="antesQueSuceda" episodeIndex={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos para la animación */}
      <style jsx>{`
        @keyframes smooth-slide {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-smooth-slide {
          animation: smooth-slide 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
