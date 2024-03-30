import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.h3
      initial={{ opacity: 0, y: "-30px", scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
      className="text-4xl"
    >
      LOGO
    </motion.h3>
  );
};
