"use client";
import {
  motion,
  useAnimation,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import MainTitle from "./MainTitle";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end start"],
  });

  const subOpacity = useTransform(scrollYProgress, [0.25, 0.35], ["80%", "0%"]);
  const subY = useTransform(scrollYProgress, [0.0, 0.3], ["0%", "-50%"]);
  const subBlurRaw = useTransform(scrollYProgress, [0.2, 0.4], [0, 12]);
  const subFilter = useMotionTemplate`blur(${subBlurRaw}px)`;

  const sectionY = useTransform(scrollYProgress, [0, 1], ["0vh", "-15vh"]);

  return (
    <>
      <motion.div className="top-0 sticky z-0   flex flex-col items-center justify-end w-full gap-2 overflow-x-hidden text-center sm:stick h-[75vh] md:gap-6 ">
        <motion.div
          style={{ y: sectionY }}
          className="flex flex-col justify-center w-full h-5/6   "
        >
          <div className="pr-1 overflow-hidden   text-left px-4  md:pr-3 max-w-screen-2xl 2xl:max-w-screen-3xl mx-auto w-full ">
            <motion.h2
              initial={{ x: "100%", opacity: 0, scale: 0.8 }}
              animate={{ x: "0%", opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 2.7,
                ease: [0.13, 0.97, 0.665, 0.985],
              }}
              viewport={{ once: true }}
              className="w-full text-5xl font-semibold tracking-normal -translate-y-1 whitespace-nowrap text-secondary outline-text-8 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-xxl  opacity-80"
            >
              Tractări auto
            </motion.h2>
          </div>

          <div className=" w-full flex gradient-mask  h-64">
            <MainTitle scrollYProgress={scrollYProgress} />
          </div>

          <motion.div
            style={{ opacity: subOpacity, y: subY, filter: subFilter }}
            className="flex flex-row items-start mx-auto "
          >
            <div className="overflow-hidden ">
              <motion.h2
                initial={{ y: "-100%", opacity: 0, scale: 0.95 }}
                animate={{ y: "0%", opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 2.2,
                  ease: [0.13, 0.97, 0.665, 0.985],
                }}
                viewport={{ once: true }}
                className="w-full text-5xl font-semibold tracking-normal whitespace-nowrap text-base-content sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-right"
              >
                Cluj-Napoca
              </motion.h2>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="h-0" ref={ref} />
    </>
  );
};

export default Hero;
