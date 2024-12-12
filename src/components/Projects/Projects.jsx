import React, { useRef } from "react";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import ProjectCarousel from "./ProjectCarousel";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const ref = useRef(null);
  const isVisible = useScrollVisibility(ref);
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -70 }}
        transition={{ duration: 1 }}
      >
        <h1 id="projects" className="heading2">Selected Projects</h1>
      </motion.div>
      <ProjectCarousel />
    </>
  );
};

export default Projects;
