"use client";
import {
  motion,
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

  const sectionY = useTransform(scrollYProgress, [0, 1], ["0vh", "-15vh"]);

  return (
    <>
      <motion.div className="top-0 md:sticky z-0 flex flex-col items-center justify-center w-full gap-2 overflow-x-hidden text-center min-h-[65vh] md:min-h-[75vh] md:gap-6  ">
        <motion.div
          style={{ y: sectionY }}
          className="flex flex-col items-center justify-center w-full kanit "
        >
          <Upper scrollYProgress={scrollYProgress} />
          <MainTitle scrollYProgress={scrollYProgress} />
          <Lower scrollYProgress={scrollYProgress} />
        </motion.div>
      </motion.div>
      <div className="h-0" ref={ref} />
    </>
  );
};

export default Hero;

export const Upper = ({ scrollYProgress }) => {
  const TITLE = "Tractări auto".split("");
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], ["80%", "0%"]);
  const y = useTransform(scrollYProgress, [0.0, 0.35], ["0%", "-20%"]);
  const subBlurRaw = useTransform(scrollYProgress, [0.05, 0.3], [0, 12]);
  const filter = useMotionTemplate`blur(${subBlurRaw}px)`;

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className="w-full px-4 mx-auto overflow-hidden text-center lg:text-left text-secondary md:pr-3 max-w-screen-2xl 2xl:max-w-screen-3xl"
    >
      {TITLE.map((letter, i) => (
        <Letter i={i} letter={letter} key={i} />
      ))}
    </motion.div>
  );
};

const Letter = ({ i, letter }) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: "0%" }}
      transition={{
        delay: 1.4 + i * 0.06,
        ease: [0.055, 0.615, 0.25, 1],
        duration: 1.5,
      }}
      viewport={{ once: true }}
      className="relative inline-block"
    >
      <motion.span className="inline-block p-0 text-5xl font-semibold tracking-normal min-w-1 lg:min-w-8 h-fit sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl 3xl:text-xxl">
        {letter}
      </motion.span>
    </motion.div>
  );
};

export const Lower = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], ["80%", "0%"]);
  const y = useTransform(scrollYProgress, [0.0, 0.35], ["0%", "-20%"]);
  const subBlurRaw = useTransform(scrollYProgress, [0.05, 0.3], [0, 12]);
  const filter = useMotionTemplate`blur(${subBlurRaw}px)`;

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className="flex flex-row justify-center w-full mx-auto "
    >
      <div className="w-full pb-2 overflow-hidden text-center lg:text-right lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl md:pb-4 xl:pb-6 3xl:max-w-screen-3xl">
        <motion.h2
          initial={{ y: "-115%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 1.4,
            delay: 1.6,
            ease: [0.705, 0.435, 0.15, 1.005],
          }}
          viewport={{ once: true }}
          className="w-full text-5xl font-semibold tracking-normal outline-text whitespace-nowrap text-secondary sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl 3xl:text-xxl"
        >
          Cluj-Napoca
        </motion.h2>
      </div>
    </motion.div>
  );
};
