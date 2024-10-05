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

import Card from './podcasts/Card'
import CardAntes from './podcasts/Card-Antes';

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
        <SwiperSlide>   
            <CardAntes/>
        </SwiperSlide>

        <SwiperSlide>   
            <CardAntes/>
        </SwiperSlide>

        <SwiperSlide>   
            <CardAntes/>
        </SwiperSlide>

        <SwiperSlide>   
            <CardAntes/>
        </SwiperSlide>

        <SwiperSlide>   
            <CardAntes/>
        </SwiperSlide>

        <SwiperSlide>   
            <CardAntes/>
        </SwiperSlide>

        <SwiperSlide>   
            <CardAntes/>
        </SwiperSlide>

        <SwiperSlide>   
            <CardAntes/>
        </SwiperSlide>

        <SwiperSlide>   
            <CardAntes/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
