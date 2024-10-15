import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaQuoteRight } from "react-icons/fa";

const Card = ({ skew, x }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "0% -15% 0% 0%" });
  return (
    <motion.div
      // onMouseDown={() => console.log("mouse down")}
      // onMouseLeave={() => console.log("mouse up")}
      ref={cardRef}
      style={{ skewX: skew, x }}
      initial={{}}
      animate={
        !isInView
          ? { filter: "blur(5px) brightness(96%)", scale: 0.96 }
          : { scale: 1 }
      }
      transition={{ duration: 0.4, delay: 0 }}
      className="flex-col text-center  py-8 px-12 flex  gap-4 lg:gap-8 items-center justify-center backdrop-brightness-90 min-w-80 md:min-w-96 lg:min-w-[480px] rounded-lg "
    >
      <span className="text-2xl text-base-content">
        <FaQuoteRight />
      </span>
      <div className="flex flex-col gap-1">
        <p className="font-thin tracking-wide text-2xl leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue,
          velit id consequat tincidunt, est ligula porttitor ex.
        </p>
        <h1 className="text-lg font-normal text-right opacity-70"> - Andrei</h1>
      </div>
    </motion.div>
  );
};

export default Card;
