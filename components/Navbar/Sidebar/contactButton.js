import { motion } from "framer-motion";
import DoubleText from "./DoubleText";

export default function ContactButton({ primary, secondary, href, icon, id }) {
  const variants = {
    hidden: {
      x: "10%",
      opacity: 0,
      filter: "blur(2px)",
      transition: {
        ease: [0.45, 0, 0.24, 1],
        duration: 0.15,
        delay: 0.3 - id * 0.1,
      },
    },
    visible: {
      x: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        ease: [0.45, 0, 0.24, 1],
        duration: 0.9,
        delay: 0.25 + id * 0.12,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        href={href}
        target="_blank"
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative flex flex-row items-center justify-start gap-6 px-4 py-3 ml-6 overflow-hidden text-center transition-colors duration-300 cursor-pointer w-fit xl:ml-8 group md:gap-10 contact-btn grow sm:py-6 md:py-4 lg:py-6 md:px-8 lg:px-10"
      >
        <Icon icon={icon} />
        <DoubleText primary={primary} secondary={secondary} />
      </motion.div>
    </motion.div>
  );
}

const Icon = ({ icon }) => {
  return (
    <span className="pb-1 text-2xl transition-colors duration-[400ms] sm:text-3xl text-base-content group-hover:text-accent">
      {icon}
    </span>
  );
};
