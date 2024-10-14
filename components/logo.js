import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.span
      initial={{ opacity: 0, y: "-15px", scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
      className="pt-2 text-xl tracking-wide sm:text-2xl md:text-3xl rubik"
    >
      <img
        src="https://img.logoipsum.com/280.svg"
        alt="logo"
        className="w-16 bor sm:w-24 invert saturate-0 "
      />
      {/* AUTONES */}
    </motion.span>
  );
};
