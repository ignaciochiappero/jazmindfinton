"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

// Datos de los videos con categorías (tags) añadidos
const videosData = [
  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7421199926845279494",
    videoId: "7421199926845279494",
    title: "Video 1",
    description: "Descripción del video 1",
    tag: ["Todo", "Belleza"],
  },
  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7420165372722121990",
    videoId: "7420165372722121990",
    title: "Video 2",
    description: "Descripción del video 2",
    tag: ["Todo", "Moda"],
  },
  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7419317775245643014",
    videoId: "7419317775245643014",
    title: "Video 3",
    description: "Descripción del video 3",
    tag: ["Todo", "Gastronomía"],
  },
  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7419121082587974918",
    videoId: "7419121082587974918",
    title: "Video 4",
    description: "Descripción del video 4",
    tag: ["Todo", "Eventos"],
  },
  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7418976044952177925",
    videoId: "7418976044952177925",
    title: "Video 5",
    description: "Descripción del video 5",
    tag: ["Todo", "Otros"],
  },
  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7417821823376674053",
    videoId: "7417821823376674053",
    title: "Video 6",
    description: "Descripción del video 6",
    tag: ["Todo", "Otros"],
  },
  // Añade más videos aquí
];

const TikTokEmbed = () => {
  const [isClient, setIsClient] = useState(false);
  const [tag, setTag] = useState("Todo"); // Estado para las categorías
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filtrar los videos por tag
  const filteredVideos = videosData.filter((video) =>
    video.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      {/* Título */}
      <h2 className="text-center text-4xl font-bold text-secondary-600 mb-6">Mi Portafolio</h2>

      {/* Filtros de categorías */}
      <div className="text-secondary-600 flex flex-wrap justify-center items-center gap-2 pb-6 max-sm:grid max-sm:grid-cols-3">
        {["Todo", "Belleza", "Moda", "Gastronomía", "Eventos", "Otros"].map((category) => (
          <button
            key={category}
            className={`${
              tag === category
                ? "text-secondary-600 border-primary-500"
                : " transition-all text-secondary-600 border-primary-400 hover:border-secondary-300 hover:text-secondary-300"
            } rounded-full border-2 px-4 py-2 text-lg max-sm:text-sm max-w-full overflow-hidden whitespace-nowrap`}
            onClick={() => handleTagChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
        {isClient &&
          filteredVideos.map((video, index) => (
            <motion.div
              key={index}
              className="video-card bg-white p-4 rounded-lg shadow-md"
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              {/* Componente TikTok Embed */}
              <blockquote
                className="tiktok-embed"
                cite={video.url}
                data-video-id={video.videoId}
                style={{ width: "100%", overflow: "hidden" }} // Cambios realizados
              >
                <section>
                  <Link href={video.url} passHref>
                    <div
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold"
                    >
                      @UsuarioTikTok
                    </div>
                  </Link>
                </section>
              </blockquote>
              {/* Título y descripción */}
              <div className="mt-4">
                <h3 className="text-lg font-bold">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Script de TikTok para incrustar videos */}
      {isClient && <script async src="https://www.tiktok.com/embed.js"></script>}
    </div>
  );
};

export default TikTokEmbed;
