import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 16,
    mass: 0.2,
  });

  const photoY = useTransform(contentSpring, [0, 0.8], ['20vh', '0vh']);
  const textY = useTransform(contentSpring, [0.2, 1], ['12vh', '0vh']);
  const opacity = useTransform(contentSpring, [0, 0.7], ['60%', '100%']);

  return (
    <div ref={ref} className="items-center max-w-screen-xl md:py-48 sm:flex">
      <div className="p-10 sm:w-1/3">
        <motion.div
          style={{ y: photoY, opacity }}
          className="object-center text-center image"
        >
          <img src="/about.jpeg" className="rounded-3xl" />
        </motion.div>
      </div>
      <div className="p-5 sm:w-2/3">
        <motion.div style={{ y: textY, opacity }} className="text">
          <div className="flex flex-row gap-2 my-4 text-3xl uppercase md:text-4xl xl:text-5xl">
            <h2 className="opacity-60">De ce să alegi </h2>
            <span className="font-bold opacity-90"> Autones</span>
          </div>
          <p className="text-lg tracking-wider uppercase opacity-50 text-base-content xl:text-2xl sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
