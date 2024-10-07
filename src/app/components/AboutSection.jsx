/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import FlowerButton from "./FlowerButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      // eslint-disable-next-line react/no-unescaped-entities
      <p>
        {" "}
        El contenido UGC (contenido generado por usuarios) es contenido
        espontáneo y ofrece credibilidad. A diferencia del contenido de un
        influencer, un creador de contenido UGC no necesita tener muchos
        seguidores, ya que lo que proporciona son piezas de contenido para que
        las marcas puedan promocionar sus productos o servicios &quot;en boca de
        otros &quot;
      </p>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: <p>Escuchame en YouTube o Spotify</p>,
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Diseño Gráfico </li>
        <li>
          Belleza:
          <ul>
            <li>Lifting de Pestañas</li>
            <li>Perfilado de cejas</li>
            <li>Laminado de cejas</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <section className="lg:py-16">
        <div className="  grid grid-cols-1 sm:grid-cols-12 max-sm:flex max-sm:justify-center max-sm:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
          >
            <h1 className="text-white mb-4 text-4xl max-sm:text-3xl sm:text-5xl lg:text-6xl xl:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                Hola, soy{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Jazmín Fintón",
                  1000,
                  "Creadora UGC",
                  1000,
                  "Simplemente Jaz",
                  1000,
                  "Creativa",
                  1000,
                  "Fan de las flores",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >

          </motion.div>
        </div>
      </section>

      <section className="text-white" id="about">
        <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-8 xl:px-16">
          <Image
            src="/images/about-image.png"
            width="500"
            height="500"
            className="rounded-lg"
          />

          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white ">Sobre Mí</h2>

            <div className="flex flex-row justify-start ">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                UGC{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Podcast{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Servicios{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
        
        <FlowerButton/>
 
      </section>
    </>
  );
};

export default AboutSection;
