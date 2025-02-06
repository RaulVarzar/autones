import { motion } from "framer-motion";

const DoubleText = ({ primary, secondary }) => {
  return (
    <motion.div className="relative overflow-hidden text-4xl font-medium text-start min-w-64 lg:text-5xl">
      <PrimaryText text={primary} />
      <SecondaryText text={secondary} />
    </motion.div>
  );
};

export default DoubleText;

const PrimaryText = ({ text }) => {
  const textVariants = {
    rest: {
      transition: {
        staggerChildren: 0.02,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const childrenVariants = {
    hover: { y: "-100%" },
    rest: { y: 0 },
  };

  return (
    <motion.div variants={textVariants} className="flex flex-row">
      {text.split("").map((letter, index) => (
        <motion.span
          key={letter + index}
          variants={childrenVariants}
          transition={{ duration: 0.3, ease: [0.7, 0, 0.3, 1] }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const SecondaryText = ({ text }) => {
  const textVariants = {
    rest: { transition: { staggerChildren: 0.02 } },
    hover: {
      transition: { staggerChildren: 0.02 },
    },
  };

  const childrenVariants = {
    hover: { y: 0 },
    rest: { y: "100%" },
  };

  return (
    <motion.span
      variants={textVariants}
      className="absolute top-0 left-0 flex flex-row"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={letter + index}
          variants={childrenVariants}
          transition={{ duration: 0.3, ease: [0.7, 0, 0.3, 1] }}
          className=" text-primary"
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
