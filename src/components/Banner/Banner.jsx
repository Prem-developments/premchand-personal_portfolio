import React, { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import "./Banner.css";

const Banner = () => {
  const ref = useRef(null);
  const isVisible = useScrollVisibility(ref);

  const icons = [
    //"/banner-icons/kotlin.svg",
    "/banner-icons/firebase.svg",
    "/banner-icons/java.svg",
    "/banner-icons/cpp.svg",
    "/banner-icons/python.svg",
    //"/banner-icons/flask.svg",
    //"/banner-icons/azure.svg",
    "/banner-icons/html5.svg",
    "/banner-icons/css3.svg",
    "/banner-icons/tailwind-2.svg",
    "/banner-icons/react.svg",
    //"/banner-icons/php.svg",
   // "/banner-icons/linux.svg",
    "/banner-icons/github.svg",
   
  ];

  const [marqueeSpeed, setMarqueeSpeed] = useState(80);

  useEffect(() => {
    const updateSpeed = () => {
      const newSpeed = window.innerWidth < 768 ? 50 : 80;
      setMarqueeSpeed(newSpeed);
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);

    return () => {
      window.removeEventListener("resize", updateSpeed);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="banner"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -40 }}
      transition={{ duration: 1.5 }}
    >
      <Marquee speed={marqueeSpeed} pauseOnHover>
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            <img
              loading="lazy"
              src={icon}
              alt="banner-icon"
              className="banner-icon"
            />
            {index < icons.length && <p className="icon-separator">+++</p>}
          </React.Fragment>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Banner;
