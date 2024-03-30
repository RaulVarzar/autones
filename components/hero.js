import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 0.9", "end start"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 16,
    mass: 0.2,
  });

  const titleScale = useTransform(contentSpring, [0, 1], ["100%", "75%"]);
  const subTitleScale = useTransform(contentSpring, [0, 1], ["100%", "4%"]);
  const opacity = useTransform(contentSpring, [0.2, 1], ["100%", "10%"]);

  return (
    <div
      ref={ref}
      className="flex flex-col grow items-center justify-center gap-4 xl:gap-8 max-w-7xl "
    >
      <motion.div
        initial={{ opacity: 0, y: "40px", scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeInOut" }}
      >
        <motion.h1
          style={{ scale: titleScale, opacity }}
          className="text-6xl md:text-7xl xl:text-9xl font-bold "
        >
          AUTONES
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "60px", scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
      >
        <motion.span
          style={{ scale: subTitleScale, opacity }}
          className="px-6 font-extralight text-neutral-content md:px-10 text-xl md:text-3xl xl:text-4xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla
          corporis blanditiis ex maxime adipisci incidunt totam ea ad ducimus
          tenetur placeat corrupti aliquam voluptas inventore voluptate quas
          animi porro?
        </motion.span>
      </motion.div>
    </div>
  );
};
