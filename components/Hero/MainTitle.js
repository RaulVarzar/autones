import { motion, useAnimation } from "framer-motion";
import { useMotionTemplate, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./infinite.css";

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const MainTitle = ({ scrollYProgress }) => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 1500);
  }, []);

  const titleBlurRaw = useTransform(scrollYProgress, [0.1, 0.35], [0, 20]);

  const opacity = useTransform(scrollYProgress, [0.1, 0.35], ["100%", "0%"]);
  const filter = useMotionTemplate`blur(${titleBlurRaw}px)`;
  const y = useTransform(scrollYProgress, [0, 0.6], ["0%", "-25%"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1.8 }}
      className="relative overflow-hidden lg:h-64 gradient-mask"
    >
      <motion.div
        style={{
          opacity,
          filter,
          y,
        }}
        className={`banner-row marquee h-fit    ${playMarquee && "animate"}`}
      >
        <motion.div className="font-bold marquee__inner text-9xl md:text-xxl lg:text-xxxl">
          <AnimatedLetters title={"Autones"} />
          <AnimatedLetters title={"Autones"} />
          <AnimatedLetters title={"Autones"} />
          <AnimatedLetters title={"Autones"} />
        </motion.div>
      </motion.div>

      {/* <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ delay: 1.2, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full bg-base-100 h-1/2"
      ></motion.div>
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "100%" }}
        transition={{ delay: 1.2, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-full bg-base-100 h-1/2"
      ></motion.div> */}
    </motion.div>
  );
};

export default MainTitle;

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
      whileInView={{ y: "1%" }}
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
        className="z-50 inline-block p-0 font-black tracking-tight uppercase text-7xl h-fit sm:text-9xl md:text-9xl xl:text-xxxl"
      >
        {letter}
      </motion.span>
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, i) => (
      <motion.span
        key={letter + i}
        className="row-letter"
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);
