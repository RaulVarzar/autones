import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end -0.55"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.5],
    ["100%", "30%", "0%"]
  );
  const x = useTransform(scrollYProgress, [0.05, 0.45], ["0%", "-200%"]);
  const springX = useSpring(x, {
    stiffness: 100,
    damping: 8,
    mass: 0.1,
  });

  const mainOpacity = useTransform(scrollYProgress, [0.8, 1], ["100%", "0%"]);
  const mainScale = useTransform(
    scrollYProgress,
    [0.05, 0.3, 0.7, 1],
    ["100%", "110%", "110%", "130%"]
  );

  const subOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.55],
    ["100%", "30%", "0%"]
  );
  const subX = useTransform(scrollYProgress, [0.05, 0.5], ["0%", "200%"]);
  const springSubX = useSpring(subX, { stiffness: 100, damping: 8, mass: 0.1 });

  const subTitleScale = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);

  const descOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.45],
    ["60%", "0%"]
  );

  return (
    <>
      <motion.div className="sticky top-0  h-[70vh] -z-50 flex flex-col items-center overflow-x-hidden justify-end w-full gap-2 px-6 text-center md:gap-6 max-w-8xl sm:px-8 md:px-12 lg:px-24 ">
        <motion.div
          initial={{ opacity: 0, y: "40px", scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          className="sticky top-0 z-50 flex flex-col justify-center w-full h-5/6 max-w-7xl "
        >
          <motion.h1
            style={{ opacity, x: springX }}
            className="text-3xl font-bold tracking-wider sm:text-4xl md:text-6xl xl:text-7xl opacity-60 place-self-start"
          >
            AUTONES
          </motion.h1>
          <motion.div
            style={{ opacity: mainOpacity, scale: mainScale }}
            className=" place-self-center"
          >
            <h2 className="text-6xl font-black leading-none tracking-wide uppercase md:text-8xl xl:text-9xl">
              Tractări auto
            </h2>
          </motion.div>
          <motion.div
            style={{ opacity: subOpacity, x: springSubX }}
            className="place-self-end"
          >
            <h2 className="text-2xl font-semibold tracking-wide sm:text-4xl md:text-6xl xl:text-7xl opacity-80">
              Cluj-Napoca
            </h2>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="relative h-0" ref={ref} />
    </>
  );
};

export default Hero;
