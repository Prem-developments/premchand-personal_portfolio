import React, { useRef } from "react";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import { motion } from "framer-motion";
import "./About.css";

import TimelineSection from "./TimelineSection";

const About = () => {
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
        <h1 id="about" className="heading2">About Me</h1>
      </motion.div>
      <TimelineSection />
    </>
  );
};

export default About;
