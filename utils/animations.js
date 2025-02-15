"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TextReveal = ({ duration = 1, children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "110%",
      filter: "blur(3px)",
      transition: {
        ease: [0.6, 0.1, 0.25, 1],
        duration,
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.6, 0.1, 0.25, 1],
        duration,
      },
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0% 0% -25% 0%" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView && "visible"}
      >
        {children}
      </motion.div>
    </div>
  );
};
