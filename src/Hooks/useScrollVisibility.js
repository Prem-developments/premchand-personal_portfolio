import { useState, useEffect, useRef } from 'react';

const useScrollVisibility = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBecomeVisible, setHasBecomeVisible] = useState(false); 

  const observer = useRef(new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      setHasBecomeVisible(true); 
    }
  }, options));

  useEffect(() => {
    if (ref.current && !hasBecomeVisible) { 
      observer.current.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.current.unobserve(ref.current);
      }
    };
  }, [ref, options.threshold, hasBecomeVisible]); 

  return isVisible;
};

export default useScrollVisibility;