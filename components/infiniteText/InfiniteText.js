import "./infinite.css";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: "55%",
    transition: {
      ease: [0.7, 0, 0.3, 1],
      duration: 0.8,
    },
  },
  visible: {
    y: "0%",
    transition: {
      ease: [0.7, 0, 0.3, 1],
      duration: 1.2,
    },
  },
};

const InfiniteText = ({ visible, text, margin = 8 }) => {
  const elementStyle = "mx-" + margin;
  console.log(elementStyle);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="w-full p-0 m-0 leading-none flex items-center overflow-x-hidden"
    >
      <div className="whitespace-nowrap m-0">
        <div className="RightToLeft text-xxxl  font-bold flex gap-0">
          <p className={elementStyle}>{text}</p>
          <p className={elementStyle}>{text}</p>
          <p className={elementStyle}>{text}</p>
          <p className={elementStyle}>{text}</p>
          <p className={elementStyle}>{text}</p>
          <p className={elementStyle}>{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InfiniteText;
