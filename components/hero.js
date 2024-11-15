import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
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

  const supOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.11, 0.25],
    ["80%", "30%", "0%"]
  );
  const supX = useTransform(scrollYProgress, [0.02, 0.45], ["0%", "-50%"]);

  const mainOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.65],
    ["100%", "100%"]
  );
  const mainScale = useTransform(scrollYProgress, [0, 0.6], ["100%", "80%"]);
  const mainY = useTransform(scrollYProgress, [0.6, 1], ["0vh", "-12vh"]);

  const subOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.1, 0.22],
    ["80%", "30%", "0%"]
  );
  const subX = useTransform(scrollYProgress, [0.02, 0.5], ["0%", "50%"]);

  const sectionY = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);

  const titleBlurRaw = useTransform(scrollYProgress, [0.1, 0.8], [0, 10]);
  const filter = useMotionTemplate`blur(${titleBlurRaw}px)`;

  return (
    <>
      <motion.div className="sm:stick top-0 border h-[70vh] -z-0 flex flex-col items-center overflow-x-hidden justify-end w-full gap-2 px-6 text-center md:gap-6 max-w-8xl sm:px-8 md:px-12 lg:px-24 ">
        <motion.div
          style={{ y: sectionY }}
          className=" flex  flex-col justify-center w-full h-5/6 max-w-7xl "
        >
          <motion.h1
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 2.2,
            }}
            viewport={{ once: true }}
            style={{ opacity: supOpacity, x: supX }}
            className="text-2xl sm:text-3xl font-bold text-info-content tracking-wide uppercase md:text-4xl lg:text-6xl  place-self-start"
          >
            Tractări auto
          </motion.h1>
          <motion.div
            style={{
              opacity: mainOpacity,
              scale: mainScale,
              // y: mainY,
              filter,
            }}
            className="pb-1 overflow-hidden place-self-center "
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
              className="text-5xl sm:text-6xl  font-medium rubik leading-none tracking-wide uppercase md:text-9xl xl:text-xxl"
            >
              AUTONES
            </motion.h2>
          </motion.div>
          <motion.div
            style={{ opacity: subOpacity, x: subX }}
            className="place-self-end"
          >
            <motion.h2
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-info-content tracking-normal sm:text-4xl md:text-6xl xl:text-7xl opacity-80"
            >
              Cluj-Napoca
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="h-0" ref={ref} />
    </>
  );
};

export default Hero;
