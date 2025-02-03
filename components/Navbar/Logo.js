import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

export const Logo = () => {
  const lenisInstance = useLenis();

  const handleClick = () => {
    const scrollToOptions = {
      offset: 0,
      lerp: 0.1,
      duration: 2,
      easing: (t) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      },
      immediate: false,
      lock: true,
      force: false,
    };
    lenisInstance.scrollTo("#home", scrollToOptions);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: "-15px", scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
      onClick={() => handleClick()}
      className="pt-2 text-xl tracking-wide sm:text-2xl md:text-3xl"
    >
      <img
        src="https://img.logoipsum.com/280.svg"
        alt="logo"
        className="w-16 bor sm:w-24 invert saturate-0 "
      />
    </motion.button>
  );
};
