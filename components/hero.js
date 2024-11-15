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

  const supOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.11, 0.25],
    ["80%", "30%", "0%"]
  );
  const supX = useTransform(scrollYProgress, [0.02, 0.45], ["0%", "-50%"]);

  const mainOpacity = useTransform(scrollYProgress, [0.1, 0.6], ["100%", "0%"]);
  const mainScale = useTransform(scrollYProgress, [0, 0.6], ["100%", "85%"]);
  const mainY = useTransform(scrollYProgress, [0.6, 1], ["0vh", "-12vh"]);

  const subOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.1, 0.22],
    ["80%", "30%", "0%"]
  );
  const subX = useTransform(scrollYProgress, [0.02, 0.5], ["0%", "-100%"]);

  const sectionY = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);

  const titleBlurRaw = useTransform(scrollYProgress, [0.1, 0.7], [0, 20]);
  const filter = useMotionTemplate`blur(${titleBlurRaw}px)`;

  return (
    <>
      <motion.div className="top-0 sticky z-0 flex flex-col items-center justify-end w-full gap-2 overflow-x-hidden text-center sm:stick h-[70vh] md:gap-6 ">
        <motion.div
          style={{ y: sectionY }}
          className="flex flex-col justify-center w-full h-5/6"
        >
          {/* <motion.h1
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 2.2,
            }}
            viewport={{ once: true }}
            style={{ opacity: supOpacity, x: supX }}
            className="text-2xl font-bold tracking-wide uppercase sm:text-3xl text-info-content md:text-4xl lg:text-6xl place-self-start"
          >
            Tractări auto
          </motion.h1> */}

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
                type: "spring",
                stiffness: 80,
                mass: 1,
                damping: 22,
              }}
              viewport={{ once: true }}
              className="p-0 text-5xl font-black leading-tight tracking-tight uppercase h-fit sm:text-6xl md:text-9xl xl:text-xxl 2xl:text-[16rem]"
            >
              AUTONES
            </motion.h2>
          </motion.div>

          <motion.div
            style={{ opacity: subOpacity, y: subX }}
            className="place-self-center"
          >
            <motion.h2
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="px-24 text-xl font-semibold tracking-normal text-info-content sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl opacity-80"
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
