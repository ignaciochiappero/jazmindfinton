/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

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
          {/* <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p> */}
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

      <div className="ml-3 lg:ml-16">
        <Link
          href="/#contact"
          className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-500 to-pink-600 hover:bg-slate-200 text-white"
        >
          Escribime
        </Link>
        <Link
          href="/"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 to-pink-600 hover:bg-slate-800 text-white mt-3"
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Conocé Mi Trabajo
          </span>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
