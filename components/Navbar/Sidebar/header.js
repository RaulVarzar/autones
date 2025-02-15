import { motion } from "framer-motion";

const Header = ({}) => {
  const variants = {
    hidden: {
      y: "-30%",
      opacity: 0,
      filter: "blur(3px)",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.2,
        delay: 0.3,
      },
    },
    visible: {
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        ease: [0.56, 0, 0.24, 1],
        duration: 1.2,
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex flex-col max-sm:ml-6 justify-end gap-1 px-4 xl:gap-1.5 py-2 text-left sm:py-8 sm:px-10 md:px-12 lg:px-16 w-fit"
    >
      <motion.span className="text-xl leading-tight text-balance opacity-40 sm:text-2xl 2xl:text-3xl">
        Ai nevoie de ajutorul nostru?
      </motion.span>
      <motion.span className="flex flex-col justify-center text-3xl font-black tracking-wide uppercase sm:text-4xl 2xl:text-5xl">
        Contactează-ne acum!
      </motion.span>
    </motion.div>
  );
};

export default Header;
