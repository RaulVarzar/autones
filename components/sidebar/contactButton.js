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

  return (
    <motion.div
      href={href}
      target="_blank"
      initial={{ opacity: 0, y: "-50%" }}
      animate={{
        opacity: 1,
        y: "0%",
        transition: {
          delay: 0.4,
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      exit={{ opacity: 0, y: "-100%" }}
      className="relative flex flex-row items-center justify-start w-full gap-6 px-8 py-3 overflow-hidden text-center transition-colors duration-300 bg-transparent border-t border-dotted cursor-pointer group md:gap-10 contact-btn border-opacity-15 border-base-content min-w-48 grow sm:py-6 md:py-8 lg:py-10 sm:px-10 md:px-10 lg:px-16 "
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

      <motion.div
        variants={textVariants}
        animate={visible ? "visible" : "hidden"}
        initial="hidden"
        className=" contact-btn-container"
      >
        <span className="text-3xl tracking-wide font- contact-btn-text-one sm:text-4xl lg:text-4xl">
          {primary}
        </span>
        <span className="text-3xl font-medium text-primary contact-btn-text-two sm:text-4xl lg:text-4xl">
          {secondary}
        </span>
      </motion.div>
    </motion.div>
  );
}
