import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InfiniteText from "../InfiniteText/InfiniteText";

const variants = {
  hidden: {
    y: "75%",
    transition: {
      ease: [0.7, 0, 0.3, 1],
      duration: 0.8,
      delay: 0,
    },
  },
  visible: {
    y: "0%",
    transition: {
      ease: [0.7, 0, 0.3, 1],
      duration: 1,
      delay: 0,
    },
  },
};

const TextCarousel = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { amount: 0.5 });

  return (
    <div id="contact-form" className="flex items-end justify-center h-full ">
      <motion.div
        ref={ref}
        className="relative flex w-full h-64 p-0 m-0 outline-text opacity-15"
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="flex items-center w-full p-0 m-0 overflow-x-hidden leading-none"
        >
          <InfiniteText text="Contact" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TextCarousel;
