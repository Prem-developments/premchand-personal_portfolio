import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import "./ProjectCarousel.css";

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProjectCarousel = () => {
  const dummyProjects = [
    {
      id: 1,
      imageUrl: "/images/project-1.png",
      iconUrl: "https://via.placeholder.com/40",
      title: "AMARNI STORE",
      subtitle: "Desktop Application",
      link: "https://e-commerce-two-mocha-95.vercel.app/",
    },
    {
      id: 2,
      imageUrl: "/images/project-2.png",
      iconUrl: "https://via.placeholder.com/40",
      title: "AMER SERVICE",
      subtitle: "Mobile Application",
      link: "https://amer-service-fronted.vercel.app/",
    },
    {
      id: 3,
      imageUrl: "/images/project-3.png",
      iconUrl: "https://via.placeholder.com/40",
      title: "SIMON",
      subtitle: "Fitness Website",
      link: "https://architectus-frontend-main.vercel.app/",
    },
    {
      id: 4,
      imageUrl: "/images/project-4.png",
      iconUrl: "https://via.placeholder.com/40",
      title: "WEST&WILLOW",
      subtitle: "Desktop Application",
      link: "https://west-willow.vercel.app/",
    },
  ];

  return (
    <div className="carousel">
      {dummyProjects.map((project, index) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard project={project} delay={index * 0.5} />
        </a>
      ))}
    </div>
  );
};

export default ProjectCarousel;
