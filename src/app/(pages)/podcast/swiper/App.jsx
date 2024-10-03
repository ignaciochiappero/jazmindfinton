"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import Card from './Card'

export default function App() {
  return (
    <>

      {/* La pelea del Dorado */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper max-sm:swiper-mb"
      >
        <SwiperSlide>   
            <Card/>
        </SwiperSlide>

        <SwiperSlide>
          <Card/>        
        </SwiperSlide>

        <SwiperSlide>
          <Card/> 
        </SwiperSlide>

        <SwiperSlide>   
            <Card/>
        </SwiperSlide>

        <SwiperSlide>
          <Card/>        
        </SwiperSlide>

        <SwiperSlide>
          <Card/> 
        </SwiperSlide>
        <SwiperSlide>   
            <Card/>
        </SwiperSlide>

        <SwiperSlide>
          <Card/>        
        </SwiperSlide>

        <SwiperSlide>
          <Card/> 
        </SwiperSlide>
        <SwiperSlide>   
            <Card/>
        </SwiperSlide>

        <SwiperSlide>
          <Card/>        
        </SwiperSlide>

        <SwiperSlide>
          <Card/> 
        </SwiperSlide>

      </Swiper>


      {/* Antes que suceda */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>Antes que suceda</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
