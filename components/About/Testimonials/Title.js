"use client";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: {
    opacity: 0,
    x: "-20%",
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.7,
      delay: 0.4,
    },
  },
  exit: {
    x: "-50%",
    opacity: 0,
    transition: {
      ease: "anticipate",
      duration: 0.2,
      delay: 0.05,
    },
  },
};
const subTitleVariants = {
  hidden: {
    opacity: 0,
    x: "-20%",
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.7,
      delay: 0.55,
    },
  },
  exit: {
    x: "-50%",
    opacity: 0,
    transition: {
      ease: "anticipate",
      duration: 0.25,
    },
  },
};

const Title = () => {
  return (
    <div className="flex flex-col gap-2 text-center ">
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-3xl font-medium leading-3 tracking-wide uppercase sm:text-xl md:text-2xl lg:text-3xl text-info-content xl:text-4xl 2xl:text-5xl text-balance"
      >
        Ce spun
      </motion.h1>
      <motion.h2
        variants={subTitleVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-4xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
      >
        clientii nostri
      </motion.h2>
    </div>
  );
};

export default Title;
