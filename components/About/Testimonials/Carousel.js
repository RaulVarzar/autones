"use client";
import {
  motion,
  useDragControls,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  useInView,
} from "framer-motion";

import { useRef } from "react";
import { FaQuoteRight } from "react-icons/fa";

const Carousel = ({ data }) => {
  const constraintsRef = useRef(null);

  const controls = useDragControls();
  // SKEW ON DRAG
  const x = useMotionValue(0);
  const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });
  const xVelocity = useVelocity(xSmooth);
  const cardSkew = useTransform(xVelocity, [-1500, 0, 1500], [-4, 0, 4], {
    clamp: false,
  });
  const cardScale = useTransform(xVelocity, [-2000, 0, 2000], [0.96, 1, 0.96], {
    clamp: false,
  });
  const cardX = useTransform(xVelocity, [-1500, 0, 1500], [20, 0, -20], {
    clamp: false,
  });

  return (
    <motion.div
      initial={{ x: "110%" }}
      animate={{ x: 0 }}
      exit={{
        x: "80%",
        opacity: 0,
        transition: {
          ease: "anticipate",
          duration: 0.25,
        },
      }}
      transition={{
        ease: [0.25, 0.1, 0.25, 1],
        duration: 1.2,
        delay: 0.6,
      }}
      ref={constraintsRef}
      className="flex flex-row gap-16 p-2 overflow-hidden w-[98vw] mx-auto flex-nowrap  gradient-mask "
    >
      {data.length > 0 && (
        <motion.ul
          drag="x"
          dragControls={controls}
          dragMomentum={0.1}
          dragElastic={0.6}
          dragTransition={{ bounceDamping: 60, bounceStiffness: 300 }}
          dragConstraints={constraintsRef}
          style={{ x }}
          className="flex flex-row gap-4 px-16 sm:gap-6 cursor-grab active:cursor-grabbing md:px-24 xl:px-32 2xl:px-44"
        >
          {data.map((data, index) => (
            <Card
              skew={cardSkew}
              x={cardX}
              scale={cardScale}
              key={index}
              data={data}
            />
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Carousel;

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
