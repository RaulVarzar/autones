import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.h3
      initial={{ opacity: 0, y: '-15px', scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: 'easeInOut' }}
      className="text-xl sm:text-3xl md:text-4xl"
    >
      LOGO
    </motion.h3>
  );
};
