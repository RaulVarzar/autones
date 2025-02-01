"use client";
import {
  motion,
  useDragControls,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import Card from "./Card";
import { useRef } from "react";

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
      className="flex flex-row gap-16 p-2 overflow-hidden w-[98vw] mx-auto flex-nowrap  gradient-mask"
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
          className="flex flex-row gap-4 px-8 sm:gap-6 sm:px-10 md:px-12 lg:px-16 xl:px-16 cursor-grab active:cursor-grabbing"
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
