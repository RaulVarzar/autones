import { motion } from "framer-motionnpom";
const BlurInAnimation = ({ children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "20%",
      scale: 0.96,
      filter: "blur(12px)",
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: "0%",
      scale: 1,
      transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.4 },
    },
  };
  return (
    <motion.div variants={variants} initial="hidden" visible="visible">
      {children}
    </motion.div>
  );
};

export default BlurInAnimation;
