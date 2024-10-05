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
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["Todo", "Moda"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["Todo", "Gastronomía"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["Todo", "Eventos"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["Todo", "Eventos"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["Todo", "Otros"],
    gitUrl: "/",
    previewUrl: "/",
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
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
