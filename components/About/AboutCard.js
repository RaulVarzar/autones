"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "components/MagneticButton";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: "20%",
    filter: "blur(3px)",
    transition: { duration: 0.7, ease: [0.7, 0.05, 0.25, 1] },
  },
  visible: (custom) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: `${custom * 0}px`,
    transition: {
      ease: [0.7, 0.05, 0.25, 1],
      duration: 1.2,
    },
  }),
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

const AboutCard = ({ children, title, description, id, rotate }) => {
  const cardRef = useRef(null);
  const visible = useInView(cardRef, { margin: "1000% 0% -17% 0%" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end ", "center start"],
  });

  const yOffset = id % 2 == 0 ? ["0%", `-${(id + 2) * 5}%`] : ["0%", "0%"];

  const y = useTransform(scrollYProgress, [0, 1], yOffset);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      custom={id}
      className={
        "w-full max-w-5xl flex  flex-row " +
        (id == 0 && " justify-start z-0") +
        (id == 1 && " justify-end z-10 mt-2") +
        (id == 2 && " justify-center z-20 mt-8")
      }
    >
      <MagneticButton className="w-10/12 h-full" amount={[10, 6]}>
        <motion.div
          style={{ rotate, y }}
          className={
            "flex  items-start sm:items-center min-h-60 justify-center  gap-2 sm:gap-6 px-8  py-8 sm:py-5  shadow-[0_0_100px_#0000001a] md:gap-8 lg:gap-12 rounded-3xl sm:px-6 md:px-12 md:py-8 lg:py-16 xl:py-12 bg-primary-content  text-balance " +
            (id % 2 == 1
              ? " flex-col sm:flex-row text-left"
              : " flex-col sm:flex-row-reverse sm:text-right")
          }
        >
          <motion.span
            variants={iconVariants}
            initial="hidden"
            animate={visible && "visible"}
            className="pb-3 text-6xl md:text-7xl sm:pb-4 lg:text-8xl "
          >
            {children}
          </motion.span>
          <div className="flex flex-col">
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate={visible && "visible"}
              className="text-3xl font-semibold leading-8 tracking-wide text-pretty sm:pb-1 xl:pb-2.5 sm:text-4xl md:text-5xl 2xl:text-5xl"
            >
              {title}
            </motion.h1>
            <motion.span
              variants={subTitleVariants}
              initial="hidden"
              animate={visible && "visible"}
              className="text-lg font-light leading-5 tracking-wide text-balance text-base-content opacity-60 sm:text-xl md:text-2xl xl:text-3xl"
            >
              {description}
            </motion.span>
          </div>
        </motion.div>
      </MagneticButton>
    </motion.div>
  );
};

export default AboutCard;
