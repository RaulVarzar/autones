import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaFacebookSquare } from "react-icons/fa";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });

  // const contentSpring = useSpring(scrollYProgress, {
  //   stiffness: 150,
  //   damping: 16,
  //   mass: 0.2,
  // });

  const titleScale = useTransform(scrollYProgress, [0, 0.8], ["100%", "60%"]);
  const subTitleScale = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], ["100%", "10%"]);
  const y = useTransform(scrollYProgress, [0.05, 0.6], ["0vh", "-6vh"]);
  const subOpacity = useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"]);
  const descOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.45],
    ["60%", "0%"]
  );

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-2 text-center min-h-[75vh] md:gap-4 max-w-7xl "
    >
      <motion.div
        initial={{ opacity: 0, y: "40px", scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          style={{ scale: titleScale, opacity, y }}
          className="text-6xl font-bold md:text-6xl lg:text-7xl xl:text-9xl "
        >
          AUTONES
        </motion.h1>
        <motion.div style={{ opacity: subOpacity, y }}>
          <h2 className="text-lg sm:text-xl md:text-2xl opacity-60">
            Tractări auto | Cluj-Napoca
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: subOpacity, y }}
        className="flex flex-row justify-center gap-0 w-fit sm:gap-x-4 sm:justify-stretch"
      >
        <motion.span
          initial={{ opacity: 0, y: "-12px", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
          className="flex items-center justify-center gap-4 px-6 py-3 border border-opacity-0 cursor-pointer grow border-base-content hover:border-opacity-20 rounded-xl"
        >
          <FaFacebookSquare className="text-3xl" />
          <p className="hidden text-xl sm:block">Autones Tractari</p>
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: "-12px", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
          className="flex items-center justify-center gap-4 px-6 py-3 border border-opacity-0 cursor-pointer grow border-base-content hover:border-opacity-20 rounded-xl"
        >
          <i className="text-4xl fa-brands sm:text-3xl fa-square-instagram "></i>
          <p className="hidden text-xl sm:block ">@autones</p>
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "60px", scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 1, ease: "easeInOut" }}
        // style={{ opacity: descOpacity }}
      >
        <motion.h1
          style={{ scale: subTitleScale, opacity: descOpacity, y }}
          className="max-w-6xl px-6 text-lg text-pretty font-extralight text-base-content md:px-10 md:text-xl xl:text-2xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla
          corporis blanditiis ex maxime adipisci incidunt totam ea ad ducimus
          tenetur placeat corrupti aliquam voluptas inventore voluptate quas
          animi porro?
        </motion.h1>
      </motion.div>

      {/* <div className="h-24"></div> */}
    </div>
  );
};

export default Hero;
