import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaQuoteRight } from "react-icons/fa";

const Card = ({ skew, x }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "0% -15% 0% 0%" });
  return (
    <motion.div
      ref={cardRef}
      style={{ skewX: skew, x }}
      initial={{}}
      animate={
        !isInView
          ? { filter: "blur(5px) brightness(96%)", scale: 0.96 }
          : { scale: 1 }
      }
      transition={{ duration: 0.4, delay: 0 }}
      className="flex-col text-center px-6 py-4 sm:py-6 border border-base-content border-opacity-10 transition-colors duration-300 hover:bg-opacity-70 md:py-8 sm:px-12 flex  gap-4 lg:gap-8 items-center justify-center bg-base-300 bg-opacity-50 min-w-64 md:min-w-96 lg:min-w-[480px] rounded-lg "
    >
      <span className="text-xl sm:text-2xl text-secondary brightness-150">
        <FaQuoteRight />
      </span>
      <div className="flex flex-col gap-1">
        <p className="font-thin  tracking-wide text-md sm:text-2xl leading-5 sm:leading-7 italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue,
          velit id consequat tincidunt, est ligula porttitor ex.
        </p>
        <h1 className="text-base sm:text-lg font-normal text-right opacity-75">
          - Andrei
        </h1>
      </div>
    </motion.div>
  );
};

export default Card;
