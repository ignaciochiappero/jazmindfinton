"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const videosData = [

  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7421199926845279494",
    platform: "tiktok",
    videoId: "7421199926845279494",
    title: "Muestro tus productos",
    description: "Para que vean la sencillez de maquillarse, con resultados reales que sirvan de inspiración",
    tag: ["Todo", "Belleza"],
  },

  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7433536689362029830",
    platform: "tiktok",
    videoId: "7433536689362029830",
    title: "Qué fragancia querés resaltar?",
    description: "Una manera de hablar sobre tus productos si no te animas a salir en cámara, espero tu mensaje",
    tag: ["Todo", "Belleza"],
  },

  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7416465194638937350",
    platform: "tiktok",
    videoId: "7416465194638937350",
    title: "Vendé la experiencia",
    description: "La comida importa, pero la experiencia también. Trabajemos juntos para vender tu lugar, como una experiencia en Santa Fe",
    tag: ["Todo", "Gastronomía"],
  },

  {
    url: "https://www.tiktok.com/@jazmind.finton/video/7431571821067029766",
    platform: "tiktok",
    videoId: "7431571821067029766",
    title: "Charly es rebeldía",
    description: "Le puse mi impronta, sí, porque también quiero que veas la diversa cantidad de contenido que podemos hacer juntos",
    tag: ["Todo", "Moda"],
  },

  {
    url: "https://www.instagram.com/reel/C-01WfqRNyF/",
    platform: "instagram",
    videoId: "C-01WfqRNyF",
    title: "Eventos en primera persona",
    description: "Mostrá cómo se vive tu evento",
    tag: ["Todo", "Eventos"],
  },

  {
    url: "https://www.instagram.com/reel/C-vyJk3xs1p/",
    platform: "instagram",
    videoId: "C-vyJk3xs1p",
    title: "Y que se note la buena onda",
    description: "Me meto en EL evento, soy una más, hablo y comento, muestro lo mejor, en búsqueda de testimonios reales",
    tag: ["Todo", "Eventos"],
  },

  {
    url: "https://www.instagram.com/reel/C7rauf6x3yl/",
    platform: "instagram",
    videoId: "C7rauf6x3yl",
    title: "Estéticamente hablando",
    description: "Podemos lograr lo que transmitir la imagen de lujo y bienestar",
    tag: ["Todo", "Belleza"],
  },
  
  {
    url: "https://www.instagram.com/reel/DCRngQJJU4v/",
    platform: "instagram",
    videoId: "DCRngQJJU4v",
    title: "Tu marca en la calle",
    description: "Que te conozcan y hablen de vos, es importante, mostrá el lado amigable de tu negocio y copate con divertidos juegos y dinámicas",
    tag: ["Todo", "Otros"],
  },
];

const FloatingWhatsAppButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      window.open("https://wa.me/+5493425253071", "_blank");
      setIsClicked(false);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ scale: 30, borderRadius: "100%" }}
            exit={{ scale: 0 }}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              width: "64px",
              height: "64px",
              backgroundColor: "#DB2777",
              zIndex: 40,
              transformOrigin: "center center",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-8 right-8 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="bg-primary-500 p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:bg-primary-600"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={handleClick}
        >
          <FaWhatsapp className="text-white w-8 h-8" />
        </motion.div>
      </motion.div>
    </>
  );
};

const VideoEmbed = () => {
  const [isClient, setIsClient] = useState(false);
  const [tag, setTag] = useState("Todo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
    loadScripts();
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    loadScripts();
  };

  const loadScripts = () => {
    const tiktokScript = document.getElementById("tiktok-embed-script");
    if (tiktokScript) {
      tiktokScript.remove();
    }
    const newTikTokScript = document.createElement("script");
    newTikTokScript.src = "https://www.tiktok.com/embed.js";
    newTikTokScript.async = true;
    newTikTokScript.id = "tiktok-embed-script";
    document.body.appendChild(newTikTokScript);
  };

  const filteredVideos = videosData.filter((video) => video.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="container mx-auto p-4 mt-20">
        <h2 className="text-center text-4xl font-bold text-secondary-600 mb-6">
          Mi Portafolio
        </h2>

        <div className="text-secondary-600 flex flex-wrap justify-center items-center gap-2 pb-6 max-sm:grid max-sm:grid-cols-3">
          {["Todo", "Belleza", "Moda", "Gastronomía", "Eventos", "Otros"].map(
            (category) => (
              <button
                key={category}
                className={`${
                  tag === category
                    ? "text-secondary-600 border-primary-500"
                    : "transition-all text-secondary-600 border-primary-400 hover:border-secondary-300 hover:text-secondary-300"
                } rounded-full border-2 px-4 py-2 text-lg max-sm:text-xs max-w-full overflow-hidden whitespace-nowrap`}
                onClick={() => handleTagChange(category)}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={ref}
        >
          {isClient &&
            filteredVideos.map((video, index) => (
              <motion.div
                key={video.videoId}
                className="video-card bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                {video.platform === "tiktok" ? (
                  <blockquote
                    className="tiktok-embed"
                    cite={video.url}
                    data-video-id={video.videoId}
                    style={{ width: "100%", overflow: "hidden" }}
                  >
                    <section>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 font-semibold"
                      >
                        @UsuarioTikTok
                      </a>
                    </section>
                  </blockquote>
                ) : (
                  <div className="flex flex-col items-center justify-center my-auto mt-6">
                    <iframe
                      src={`https://www.instagram.com/reel/${video.videoId}/embed`}
                      width="100%"
                      height="780"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency="true"
                      allow="encrypted-media"
                      className="max-sm:h-[500px] sm:h-[630px] md:h-[700px] lg:h-[780px] max-sm:mt-2  sm:mt-16"
                      style={{ borderRadius: "10px" }}
                    ></iframe>
                  </div>
                )}

                <div className="mt-auto ">
                  <h3 className="text-lg font-bold">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
      <FloatingWhatsAppButton />
    </>
  );
};

export default VideoEmbed;
