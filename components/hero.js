import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end start"],
  });

  const mainScale = useTransform(scrollYProgress, [0.2, 0.4], ["100%", "150%"]);
  const subTitleScale = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.35], ["100%", "0%"]);
  const x = useTransform(scrollYProgress, [0, 0.3], [0, -200]);
  const secondaryX = useTransform(scrollYProgress, [0.1, 0.25], [0, 200]);
  const subOpacity = useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"]);
  const mainOpacity = useTransform(scrollYProgress, [0.2, 0.4], ["100%", "0%"]);

  const descOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.45],
    ["60%", "0%"]
  );

  return (
    <>
      <motion.div className="sticky top-0 min-h-[70vh] z-20 flex flex-col items-center justify-end w-full gap-2 px-6 text-center md:gap-6 max-w-8xl sm:px-8 md:px-12 lg:px-24 ">
        <motion.div
          initial={{ opacity: 0, y: "40px", scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          className="absolute top-0 z-50 flex flex-col justify-end w-full h-5/6 max-w-7xl grow"
        >
          <motion.h1
            style={{ opacity, x }}
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
            style={{ opacity, x: secondaryX }}
            className="place-self-end"
          >
            <h2 className="text-lg font-semibold tracking-wide sm:text-4xl md:text-6xl xl:text-7xl opacity-80">
              Cluj-Napoca
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "60px", scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 1, ease: "easeInOut" }}
          // style={{ opacity: descOpacity }}
          className="px-2 py-8 rounded-xl"
        >
          <motion.h1
            style={{ scale: subTitleScale, opacity: descOpacity }}
            className="max-w-4xl px-6 text-lg text-pretty font-extralight text-base-content md:px-10 md:text-xl xl:text-2xl"
          >
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit */}
          </motion.h1>
        </motion.div>
      </motion.div>
      <div className="relative h-0 " ref={ref}></div>
    </>
  );
};

export default Hero;
