"use client";
import {
  motion,
  useAnimation,
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
  const subY = useTransform(scrollYProgress, [0.0, 0.3], ["0%", "-50%"]);
  const subBlurRaw = useTransform(scrollYProgress, [0.2, 0.4], [0, 12]);
  const subFilter = useMotionTemplate`blur(${subBlurRaw}px)`;

  const sectionY = useTransform(scrollYProgress, [0, 1], ["0vh", "-15vh"]);

  const TITLE = splitStringUsingRegex("AUTONES");

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
              filter,
            }}
            className="flex flex-row  justify-center w-full p-0 z-10 overflow-hidden sm:gap-2 md:gap-2.5
              h-fit place-self-center"
          >
            {TITLE.map((letter, i) => (
              <Letter i={i} letter={letter} />
            ))}
          </motion.div>

          <motion.div
            style={{ opacity: subOpacity, y: subY, filter: subFilter }}
            className="flex flex-row items-start mx-auto "
          >
            <div className="pr-1 overflow-hidden -translate-y-0.5 md:pr-3">
              <motion.h2
                initial={{ x: "100%", opacity: 0, scale: 0.8 }}
                animate={{ x: "0%", opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 2.7,
                  ease: [0.13, 0.97, 0.665, 0.985],
                }}
                viewport={{ once: true }}
                className="w-full text-2xl font-semibold tracking-normal -translate-y-1 whitespace-nowrap text-secondary sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl opacity-80"
              >
                Tractări auto
              </motion.h2>
            </div>
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
                className="w-full text-2xl font-semibold tracking-normal whitespace-nowrap text-base-content sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
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

const Letter = ({ i, letter }) => {
  const variants = {
    hover: {
      y: "-5%",
    },
    initial: {
      y: 0,
    },
  };
  const controls = useAnimation();
  function handleMouseEnterControls() {
    controls.start("hover");
  }

  function handleMouseLeaveControls() {
    controls.start("initial");
  }
  return (
    <motion.div
      key={i}
      initial={{ y: "100%" }}
      whileInView={{ y: "15%" }}
      transition={{
        delay: 1.5 + i * 0.06,
        ease: [0.0, 0.9, 0.335, 0.995],
        duration: 1.2,
      }}
      viewport={{ once: true }}
      className="relative inline-block"
      onMouseEnter={handleMouseEnterControls}
      onMouseLeave={handleMouseLeaveControls}
    >
      <motion.span
        transition={{ duration: 0.6, ease: [0.205, 0.68, 0.36, 0.99] }}
        variants={variants}
        animate={controls}
        className="p-0 text-7xl l z-50 font-black inline-block tracking-tight uppercase h-fit sm:text-9xl md:text-9xl lg:text-xxl 2xl:text-[16rem]"
      >
        {letter}
      </motion.span>
      {/* <motion.span
        transition={{
          duration: 0.3,
          delay: 0.05,
          ease: [0.205, 0.68, 0.36, 0.99],
        }}
        variants={variants}
        animate={controls}
        className="absolute p-0 top-[100%] left-0 text-7xl  z-50 font-black leading-tight tracking-tight uppercase h-fit sm:text-9xl md:text-9xl lg:text-xxl 2xl:text-[16rem]"
      >
        {letter}
      </motion.span> */}
    </motion.div>
  );
};
