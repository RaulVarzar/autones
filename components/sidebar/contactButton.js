import { motion } from "framer-motion";

export default function ContactButton({
  primary,
  secondary,
  href,
  icon,
  visible,
  id,
}) {
  const textVariants = {
    hidden: {
      y: "-40%",
      opacity: 0,
      filter: "blur(3px)",
    },
    visible: {
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.6,
        delay: 0.4 + id * 0.15,
      },
    },
  };

  const iconVariants = {
    hidden: {
      x: "-10%",
      opacity: 0,
      filter: "blur(2px)",
    },
    visible: {
      x: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.6,
        delay: 0.25 + id * 0.15,
      },
    },
  };

  const primaryTextVariants = {
    rest: {
      transition: {
        staggerChildren: 0.02,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const secondaryTextVariants = {
    rest: { transition: { staggerChildren: 0.02 } },
    hover: {
      transition: { staggerChildren: 0.02 },
    },
  };

  const primaryChildrenVariants = {
    hover: { y: "-100%" },
    rest: { y: 0 },
  };
  const secondaryChildrenVariants = {
    hover: { y: 0 },
    rest: { y: "100%" },
  };

  return (
    <motion.div
      href={href}
      target="_blank"
      // initial={{ opacity: 0, y: "-50%" }}
      // animate={{
      //   opacity: 1,
      //   y: "0%",
      //   transition: {
      //     delay: 0.4,
      //     duration: 1,
      //     ease: [0.25, 0.1, 0.25, 1],
      //   },
      // }}
      // exit={{ opacity: 0, y: "-100%" }}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative flex flex-row items-center justify-start w-full gap-6 px-8 py-3 overflow-hidden text-center transition-colors duration-300 cursor-pointer group md:gap-10 contact-btn min-w-48 grow sm:py-6 md:py-4 lg:py-6 sm:px-10 md:px-10 lg:px-16"
    >
      <motion.span
        variants={iconVariants}
        animate={visible ? "visible" : "hidden"}
        initial="hidden"
        className="z-10 pb-1 text-2xl sm:text-3xl "
      >
        <p className="transition-all duration-300 text-base-content group-hover:text-accent">
          {icon}
        </p>
      </motion.span>

      <motion.div className="relative overflow-hidden text-start min-w-64 ">
        <motion.div variants={primaryTextVariants} className="flex flex-row">
          {primary.split("").map((letter, index) => (
            <motion.span
              key={letter + index}
              variants={primaryChildrenVariants}
              transition={{ duration: 0.3, ease: [0.7, 0, 0.3, 1] }}
              className="text-3xl font-normal tracking-wide sm:text-4xl lg:text-4xl"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.span
          variants={secondaryTextVariants}
          className="absolute top-0 left-0 flex flex-row"
        >
          {secondary.split("").map((letter, index) => (
            <motion.span
              key={letter + index}
              variants={secondaryChildrenVariants}
              transition={{ duration: 0.3, ease: [0.7, 0, 0.3, 1] }}
              className="text-3xl font-normal tracking-wide text-primary sm:text-4xl lg:text-4xl"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
