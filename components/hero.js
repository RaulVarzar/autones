import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end 0.9', 'end start'],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 16,
    mass: 0.2,
  });

  const titleScale = useTransform(contentSpring, [0, 1], ['100%', '75%']);
  const subTitleScale = useTransform(contentSpring, [0, 1], ['100%', '80%']);
  const opacity = useTransform(contentSpring, [0.2, 1], ['100%', '10%']);
  const y = useTransform(contentSpring, [0.05, 0.6], ['0vh', '-10vh']);
  const subOpacity = useTransform(contentSpring, [0.1, 0.3], ['80%', '0%']);
  const descOpacity = useTransform(contentSpring, [0.15, 0.45], ['60%', '0%']);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-4 md:gap-8 grow max-w-7xl "
    >
      <motion.div
        initial={{ opacity: 0, y: '40px', scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.35, ease: 'easeInOut' }}
      >
        <motion.h1
          style={{ scale: titleScale, opacity, y }}
          className="text-6xl font-bold md:text-7xl xl:text-9xl "
        >
          AUTONES
        </motion.h1>
        <motion.h2
          style={{ opacity: subOpacity, y }}
          className="text-2xl opacity-40"
        >
          Tractări auto | Cluj-Napoca
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: '60px', scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
        // style={{ opacity: descOpacity }}
      >
        <motion.h1
          style={{ scale: subTitleScale, opacity: descOpacity, y }}
          className="px-6 text-xl font-extralight text-base-content md:px-10 md:text-2xl xl:text-3xl"
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
