import React, { useRef } from "react";
import { motion } from "framer-motion";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import "./ProjectCard.css";
import ProjectCarousel from "./ProjectCarousel";

const ProjectCard = ({ project, delay }) => {
  const ref = useRef(null);
  const isVisible = useScrollVisibility(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : {}}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <div className="image-wrapper"style={{ backgroundImage: `url(${project.imageUrl})` }}>
     
        <div className="overlap-group">
          <div className="div">
            <div className="text-wrapper">{project.title}</div>
            <div className="webdesign">{project.subtitle}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
