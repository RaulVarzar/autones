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

import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

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
      className="flex flex-row gap-16 p-2 overflow-hidden w-[98vw] md:w-full mx-auto flex-nowrap  gradient-mask"
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
          className="flex flex-row gap-4 px-8 md:px-16 lg:px-20 sm:gap-6 cursor-grab active:cursor-grabbing xl:px-32 "
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
      className="flex-col text-center px-4 py-6 m sm:py-6 border border-base-content border-opacity-5 transition-colors duration-300  md:py-8 sm:px-4 flex lg:px-8 gap-4 lg:gap-8 items-center justify-center bg-opacity-20 bg-secondary  min-w-64 md:min-w-96 lg:min-w-[480px] 2xl:min-w-[600px] rounded-2xl "
    >
      <span className="flex flex-row gap-1 text-xl sm:text-2xl text-base-content brightness-150">
        {Array(5)
          .fill(0)
          .map((item, i) => (
            <Star key={i} fill={rating > i} />
          ))}
      </span>

      <div className="flex flex-col gap-1 sm:gap-2 text-base-content">
        <p className="text-lg italic font-light leading-5 tracking-wide sm:text-2xl sm:leading-7">
          {review}
        </p>
        <h1 className="text-base font-normal text-right opacity-75 sm:text-lg lg:text-xl">
          - {name}
        </h1>
      </div>
    </motion.li>
  );
};

const Star = ({ fill }) => {
  return (
    <div className="text-xl md:text-2xl text-base-content fill-slate-100 stroke-red-700">
      {fill ? <MdOutlineStar /> : <MdOutlineStarBorder />}
    </div>
  );
};
