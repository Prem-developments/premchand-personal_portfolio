import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import premcv from '../Hero/premcv.jpeg';
import premporfolio from '../Hero/premport.png'
import "./Hero.css";

function Hero() {
  const [isColumnMode, setIsColumnMode] = useState(window.innerWidth <= 768);
  const [isCVVisible, setIsCVVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsColumnMode(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/premcv.jpeg"; // Update with the actual image path
    link.download = "Prem_Chand_CV.jpg"; // File name for the downloaded image
    link.click();
  };

  return (
    <div className="hero-section">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-container"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h1 className="heading">
            Prem Chand
            <br />
            Front-End Developer
          </h1>
          <p className="subheading">
            5th Semester Computer Science Student
            {isColumnMode ? " " : <br />}
            passionate about Full-stack development
          </p>
          <motion.div
            className="buttons-container"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#contact">
              <button className="secondary-button">
                Contact Me
                <img src="/icons/arrow-up-right-light.svg" alt="arrow-up" />
              </button>
            </a>
            <button
              className="secondary-button"
              onClick={() => setIsCVVisible(!isCVVisible)}
            >
              Download CV
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img src={premporfolio} alt="Portfolio" />
        </motion.div>
      </motion.div>

      {/* New Section for CV Download */}
      {isCVVisible && (
        <div className="cv-section">
          <img
            src={premcv} // Update this path
            alt="CV"
            className="cv-image"
          />
          <div className="download-icon" onClick={handleDownload}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M5 20h14v-2H5v2zm7-18L3.5 9h5v7h8V9h5L12 2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
