"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

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
];

// Componente del botón flotante de WhatsApp
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
            ease: "easeInOut"
          }}
          onClick={handleClick}
        >
          <FaWhatsapp className="text-white w-8 h-8" />
        </motion.div>
      </motion.div>
    </>
  );
};

const TikTokEmbed = () => {
  const [isClient, setIsClient] = useState(false);
  const [tag, setTag] = useState("Todo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsClient(true);
    loadTikTokScript();
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    loadTikTokScript();
  };

  const loadTikTokScript = () => {
    const existingScript = document.getElementById("tiktok-embed-script");
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.id = "tiktok-embed-script";
    document.body.appendChild(script);
  };

  const filteredVideos = videosData.filter((video) =>
    video.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="container mx-auto p-4 mt-20">
        <h2 className="text-center text-4xl font-bold text-secondary-600 mb-6">Mi Portafolio</h2>

        <div className="text-secondary-600 flex flex-wrap justify-center items-center gap-2 pb-6 max-sm:grid max-sm:grid-cols-3">
          {["Todo", "Belleza", "Moda", "Gastronomía", "Eventos", "Otros"].map((category) => (
            <button
              key={category}
              className={`${
                tag === category
                  ? "text-secondary-600 border-primary-500"
                  : " transition-all text-secondary-600 border-primary-400 hover:border-secondary-300 hover:text-secondary-300"
              } rounded-full border-2 px-4 py-2 text-lg max-sm:text-xs max-w-full overflow-hidden whitespace-nowrap`}
              onClick={() => handleTagChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {isClient &&
            filteredVideos.map((video, index) => (
              <motion.div
                key={video.videoId}
                className="video-card bg-white p-4 rounded-lg shadow-md"
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
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
                <div className="mt-4">
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

export default TikTokEmbed;