// src\app\components\ProjectsSection.jsx

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["Todo", "Belleza"],
    gitUrl: "/",
    previewUrl: "/",
    tiktokUrl: null, // No hay video de TikTok para este proyecto
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["Todo", "Moda"],
    gitUrl: "/",
    previewUrl: "/",
    tiktokUrl: "https://www.tiktok.com/@user/video/123456789", // Video de TikTok
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["Todo", "Gastronomía"],
    gitUrl: "/",
    previewUrl: "/",
    tiktokUrl: null,
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["Todo", "Eventos"],
    gitUrl: "/",
    previewUrl: "/",
    tiktokUrl: "https://www.tiktok.com/@user/video/987654321", // Otro video de TikTok
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["Todo", "Eventos"],
    gitUrl: "/",
    previewUrl: "/",
    tiktokUrl: null,
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["Todo", "Otros"],
    gitUrl: "/",
    previewUrl: "/",
    tiktokUrl: "https://www.tiktok.com/@user/video/111222333", // Video de TikTok
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="mt-20 ">
      <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-6">
        Mi Portafolio
      </h2>

      {/* Tags */}
      <div className="text-white flex flex-row justify-center items-center gap-2 pb-6 max-sm:grid-cols-3 max-sm:grid">
        <ProjectTag
          onClick={handleTagChange}
          name="Todo"
          isSelected={tag === "Todo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Moda"
          isSelected={tag === "Moda"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Belleza"
          isSelected={tag === "Belleza"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Gastronomía"
          isSelected={tag === "Gastronomía"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Eventos"
          isSelected={tag === "Eventos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Otros"
          isSelected={tag === "Otros"}
        />
      </div>

      {/* Cuadro proyectos */}
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tiktokUrl={project.tiktokUrl} // Añadido para pasar la URL de TikTok
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
