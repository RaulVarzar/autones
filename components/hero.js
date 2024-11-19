"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import splitStringUsingRegex from "../utils/splitStrings";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end start"],
  });

  const mainOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    ["100%", "0%"]
  );
  const mainScale = useTransform(scrollYProgress, [0, 0.6], ["100%", "85%"]);
  const titleBlurRaw = useTransform(scrollYProgress, [0.25, 0.55], [0, 20]);
  const filter = useMotionTemplate`blur(${titleBlurRaw}px)`;

  const subOpacity = useTransform(scrollYProgress, [0.25, 0.35], ["80%", "0%"]);
  const subY = useTransform(scrollYProgress, [0.0, 0.3], ["0%", "-80%"]);
  const subBlurRaw = useTransform(scrollYProgress, [0.2, 0.4], [0, 12]);
  const subFilter = useMotionTemplate`blur(${subBlurRaw}px)`;

  const sectionY = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);

  return (
    <>
      <motion.div className="top-0 sticky z-0  flex flex-col items-center justify-end w-full gap-2 overflow-x-hidden text-center sm:stick h-[70vh] md:gap-6 ">
        <motion.div
          style={{ y: sectionY }}
          className="flex flex-col justify-center w-full h-5/6"
        >
          <motion.div
            style={{
              opacity: mainOpacity,
              scale: mainScale,
              // y: mainY,
              filter,
            }}
            className="p-0 overflow-hidden border-info h-fit place-self-center"
          >
            <motion.h2
              initial={{ y: "150%" }}
              animate={{ y: "10%" }}
              transition={{
                delay: 2,
                ease: [0.13, 0.97, 0.665, 0.985],
                duration: 1,
              }}
              viewport={{ once: true }}
              className="p-0 text-7xl font-black leading-tight tracking-tight uppercase h-fit sm:text-8xl md:text-9xl xl:text-xxl 2xl:text-[16rem]"
            >
              AUTONES
            </motion.h2>
          </motion.div>

          <motion.div
            style={{ opacity: subOpacity, y: subY, filter: subFilter }}
          >
            <motion.h2
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 2.5,
                ease: [0.13, 0.97, 0.665, 0.985],
              }}
              viewport={{ once: true }}
              className="w-full px-24 text-xl font-semibold tracking-normal whitespace-nowrap text-info-content sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl opacity-80"
            >
              Tractări auto | Cluj-Napoca
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="h-0" ref={ref} />
    </>
  );
};

export default Hero;
