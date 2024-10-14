import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const AboutCard = ({ visible, children, title, description }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: "20%",
      scale: 0.96,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      y: "0%",
      scale: 1,
      transition: { type: "spring", stiffness: 90, mass: 0.5, damping: 8 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: "2%", scale: 0.8 },
    visible: {
      opacity: 1,
      y: "0%",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        mass: 0.8,
        damping: 12,
        delay: 0.25,
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
        type: "spring",
        stiffness: 80,
        mass: 0.45,
        damping: 8,
        delay: 0.35,
      },
    },
  };

  const subTitleVariants = {
    hidden: { opacity: 0, y: "50%", scale: 0.9 },
    visible: {
      opacity: 0.75,
      y: "0%",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        mass: 0.45,
        damping: 8,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="flex flex-col items-center justify-center w-full h-full max-w-2xl px-4 py-5 text-center rounded-lg sm:px-6 sm:py-8 md:px-12 md:py-24 bg-accent bg-opacity-60 text-balance "
    >
      <motion.span
        variants={iconVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        className="pb-3 text-6xl sm:pb-4 sm:text-8xl"
      >
        {children}
      </motion.span>
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        className="pb-2 text-2xl font-bold leading-6 tracking-wide uppercase sm:pb-6 sm:text-3xl md:text-4xl xl:text-5xl"
      >
        {title}
      </motion.h1>
      <motion.span
        variants={subTitleVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        className="text-xl font-light leading-5 sm:tracking-tight opacity-30 md:text-2xl lg:text-3xl"
      >
        {description}
      </motion.span>
    </motion.div>
  );
};

export default AboutCard;
