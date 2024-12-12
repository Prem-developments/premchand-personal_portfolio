import React, { useRef, useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import TimelineItem from "./TimelineItem";
import "./TimelineSection.css";

const TimelineSection = () => {
  const items = [
    {
      heading: "Education",
      description:
        "I am currently pursuing a Bachelor of Science in Computer Science at Benazir Bhutto Shaheed University Lyari, Karachi, Pakistan, since January 2023. My coursework has provided a strong foundation in key areas such as Web Development, Database Systems, Data Structures, Object-Oriented Programming, and Software Engineering.",
      listItems: [
        "Bachelor of Science in Computer Science",
        "Web Development",
       
      ],
    },
    {
      heading: "Experience",
      description:
        "In addition to my education, I have gained practical experience through internships and freelance work. These experiences helped me refine my skills in web development and allowed me to work on projects for clients in various industries.",
      listItems: [
        "Web developer at Fiverr",
        "Up-Work Web Developer",
        "Developed multiple websites using React and Next.js",
      ],
    },
    {
      heading: "Skills",
      description:
        "I possess strong skills in a variety of programming languages and tools. I am proficient in front-end  development, and I am constantly learning back-end developments and new technologies to improve my skillset.",
      listItems: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Javascript",
        "React.js",
        "Next.js",
        "Bootstrap",
        "GitHub",
      ],
    },
  ];

  const { scrollYProgress } = useViewportScroll();
  const [isAnimated, setIsAnimated] = useState(false);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.current > 0.1 && !isAnimated) {
        setIsAnimated(true);
      }
    };

    const unsubscribe = scrollYProgress.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollYProgress, isAnimated]);

  return (
    <div className="timeline-section-container">
      <div className="timeline-container">
        {items.map((item, index) => {
          return (
            <div className="grid" key={index} ref={(el) => (itemRefs.current[index] = el)}>
              {index % 2 === 0 ? (
                <div className="empty-grid"></div>
              ) : (
                <TimelineItem
                  headingText={item.heading}
                  description={item.description}
                  listItems={item.listItems}
                />
              )}
              <div className="center-line">
                <span className="badge">0{index + 1}</span>
                <motion.span transition={{ duration: 2 }} className="line" />
              </div>
              {index % 2 === 0 ? (
                <TimelineItem
                  headingText={item.heading}
                  description={item.description}
                  listItems={item.listItems}
                />
              ) : (
                <div className="empty-grid"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineSection;
