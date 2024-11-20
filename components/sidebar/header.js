import { motion } from "framer-motion";

const Header = ({ visible }) => {
  const variants = {
    hidden: {
      y: "-50%",
      opacity: 0,
      filter: "blur(3px)",
    },
    visible: {
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.5,
        delay: 0.4,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={visible ? "visible" : "hidden"}
      initial="hidden"
      className="flex flex-col justify-end px-4 py-2 text-left sm:py-8 sm:px-10 md:px-12 lg:px-16 w-fit"
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
        className="text-xl leading-tight text-balance opacity-40 lg:text-2xl"
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
        className="flex flex-col justify-center text-3xl font-black tracking-wide uppercase sm:text-3xl lg:text-4xl"
      >
        Contactează-ne acum!
      </motion.span>
    </motion.div>
  );
};

export default Header;
