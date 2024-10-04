import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.span
      initial={{ opacity: 0, y: "-15px", scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
      className="text-xl tracking-wide sm:text-2xl md:text-3xl rubik"
    >
      {/* <img
        src="https://img.logoipsum.com/317.svg"
        alt="logo"
        className="w-24 sm:w-32 invert saturate-0"
      /> */}
      AUTONES
    </motion.span>
  );
};
