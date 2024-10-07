"use client";
import React from "react";

import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";


const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-1 my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 flex flex-col items-center justify-center text-center">
        <h5 className="text-xl font-bold text-secondary-500 my-2">
          Conectemos
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Actualmente estoy buscando nuevas oportunidades, mis redes
          siempre están abiertas. Ya sea que tengas una pregunta o solo quieras saludar,
          voy a hacer mi mejor esfuerzo para responderte.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.instagram.com/jazmind.finton/">
            <RiInstagramFill className="text-gray-500 h-10 w-10 transition-transform transform hover:scale-110 hover:text-secondary-500" />
          </Link>
          <Link href="https://www.tiktok.com/@jazmind.finton">
            <AiFillTikTok className="text-gray-500 h-10 w-10 transition-transform transform hover:scale-110 hover:text-secondary-500 " />
          </Link>
          <Link href="https://wa.me/+5493425253071">
            <FaWhatsappSquare  className="text-gray-500 h-10 w-10 transition-transform transform hover:scale-110 hover:text-secondary-500 " />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
