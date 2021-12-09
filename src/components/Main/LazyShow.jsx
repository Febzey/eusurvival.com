import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      currentRef = ref.current;
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

const LazyShow = ({ children }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut"
        }
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
    className="flex md:w-6/12 w-11/12 mx-auto bg-dGray rounded min-h-content my-24 bg-opacity-60 shadow-2xl py-6 px-6 flex-col"
      ref={rootRef}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
