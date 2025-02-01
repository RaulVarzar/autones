import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaQuoteRight } from "react-icons/fa";

const Card = ({ skew, x, scale, data }) => {
  const { name, rating, review } = data;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "0% -15% 0% 0%" });
  return (
    <motion.li
      ref={cardRef}
      style={{ skewX: skew, x, scale }}
      initial={{}}
      animate={
        !isInView
          ? { filter: "blur(5px) brightness(96%)", scale: 0.96 }
          : { scale: 1 }
      }
      transition={{ duration: 0.4, delay: 0 }}
      className="flex-col text-center px-6 py-4 sm:py-6 border border-base-content border-opacity-5 transition-colors duration-300  md:py-8 sm:px-12 flex  gap-4 lg:gap-8 items-center justify-center bg-opacity-20 bg-secondary  min-w-72 md:min-w-96 lg:min-w-[480px] rounded-2xl "
    >
      <span className="text-xl sm:text-2xl text-base-content brightness-150">
        <FaQuoteRight />
      </span>
      <div className="flex flex-col gap-1 text-base-content">
        <p className="italic font-light leading-5 tracking-wide text-md sm:text-2xl sm:leading-7">
          {review}
        </p>
        <h1 className="text-base font-normal text-right opacity-75 sm:text-lg">
          - {name}
        </h1>
      </div>
    </motion.li>
  );
};

export default Card;
