import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      layout="position"
      exit={{ opacity: 0, transition: { duration: 0.01 } }}
      key="hello"
      className="flex flex-col justify-end gap-1 text-left"
    >
      <motion.span
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.25,
            type: "spring",
            duration: 1,
            bounce: 0.5,
          },
        }}
        className="text-lg  font-light leading-tight text-balance opacity-40 sm:text-sx lg:text-2xl"
      >
        Ai nevoie de ajutorul nostru?
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.3,
            type: "spring",
            duration: 1.1,
            bounce: 0.5,
          },
        }}
        className="flex flex-col  justify-center text-2xl sm:text-3xl lg:text-4xl  tracking-wide uppercase"
      >
        Contactează-ne acum!
      </motion.span>
    </motion.div>
  );
};

export default Header;
