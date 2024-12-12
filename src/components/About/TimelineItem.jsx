import React, { useRef } from "react";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import { motion } from "framer-motion";
import "./TimelineItem.css";

const TimelineItem = ({ headingText, description, listItems }) => {
  const ref = useRef(null);
  const isVisible = useScrollVisibility(ref);

  return (
    <>
      <motion.div
        ref={ref}
        className="timeline-item-container"
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 70 }}
        transition={{ duration: 2 }}
      >
        <h1 className="timeline-heading">{headingText}</h1>
        <p className="timeline-text">{description}</p>
        <ul className="list">
          {listItems.map((item, idx) => (
            <li key={idx} className="list-item-text">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default TimelineItem;
