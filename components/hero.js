import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import splitStringUsingRegex from "../utils/splitStrings";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end -1"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.02, 0.15, 0.5],
    ["100%", "30%", "0%"]
  );
  const x = useTransform(scrollYProgress, [0.02, 0.45], ["0%", "-200%"]);
  const springX = useSpring(x, {
    stiffness: 100,
    damping: 8,
    mass: 0.1,
  });

  const mainOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.95],
    ["100%", "0%"]
  );
  const mainScale = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.9],
    ["100%", "110%", "120%"]
  );
  const mainY = useTransform(scrollYProgress, [0.65, 0.95], ["0vh", "-0vh"]);

  const subOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.2, 0.55],
    ["100%", "30%", "0%"]
  );
  const subX = useTransform(scrollYProgress, [0.02, 0.5], ["0%", "200%"]);
  const springSubX = useSpring(subX, { stiffness: 100, damping: 8, mass: 0.1 });

  const subTitleScale = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);

  const descOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.45],
    ["60%", "0%"]
  );

  const TITLE = splitStringUsingRegex("Tractări auto");
  return (
    <>
      <motion.div className="sticky top-0  h-[70vh] -z-50 flex flex-col items-center overflow-x-hidden justify-end w-full gap-2 px-6 text-center md:gap-6 max-w-8xl sm:px-8 md:px-12 lg:px-24 ">
        <motion.div className="sticky top-0 z-50 flex flex-col justify-center w-full h-5/6 max-w-7xl ">
          <motion.h1
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 2.2,
            }}
            viewport={{ once: true }}
            style={{ opacity, x: springX }}
            className="text-3xl font-bold tracking-wide uppercase sm:text-4xl md:text-6xl xl:text-6xl opacity-60 place-self-start"
          >
            Tractări auto
          </motion.h1>
          <motion.div
            style={{ opacity: mainOpacity, scale: mainScale, y: mainY }}
            className=" place-self-center overflow-hidden  pt-1"
          >
            <motion.h2
              initial={{ y: "150%" }}
              animate={{ y: "10%" }}
              transition={{
                delay: 2,
                type: "spring",
                stiffness: 80,
                mass: 1,
                damping: 22,
              }}
              viewport={{ once: true }}
              className="text-6xl font-black leading-none tracking-wide uppercase md:text-9xl xl:text-xxl"
            >
              AUTONES
            </motion.h2>
          </motion.div>
          <motion.div
            style={{ opacity: subOpacity, x: springSubX }}
            className="place-self-end"
          >
            <motion.h2
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-2xl font-semibold tracking-normal sm:text-4xl md:text-6xl xl:text-7xl opacity-80"
            >
              Cluj-Napoca
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="relative h-0" ref={ref} />
    </>
  );
};

export default Hero;
