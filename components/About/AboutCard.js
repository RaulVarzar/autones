import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const AboutCard = ({ visible, children, title, description }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: "20%",
      scale: 0.96,
      filter: "blur(12px)",
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: "0%",
      scale: 1,
      transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.4 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: "2%", scale: 0.8 },
    visible: {
      opacity: 1,
      y: "0%",
      scale: 1,
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: "50%", scale: 0.96 },
    visible: {
      opacity: 1,
      y: "0%",
      scale: 1,
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.5,
        delay: 0.35,
      },
    },
  };

  const subTitleVariants = {
    hidden: { opacity: 0, y: "50%", scale: 0.9 },
    visible: {
      opacity: 1,
      y: "0%",
      scale: 1,
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div>
      <motion.div
        // ref={cardRef}
        variants={cardVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center w-full h-full max-w-2xl px-4 py-5 text-center rounded-lg sm:px-6 sm:py-8 md:px-12 md:py-12 lg:py-16 xl:py-24 bg-secondary bg-opacity-50 text-balance "
      >
        <motion.span
          variants={iconVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="pb-3 text-4xl md:text-6xl sm:pb-4 lg:text-8xl"
        >
          {children}
        </motion.span>
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="sm:pb-2 text-xl font-bold leading-6 tracking-wide uppercase sm:pb-6 sm:text-3xl md:text-4xl xl:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.span
          variants={subTitleVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="text-base font-light leading-5 text-info-content sm:tracking-tight opacity-30 md:text-2xl lg:text-3xl"
        >
          {description}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
