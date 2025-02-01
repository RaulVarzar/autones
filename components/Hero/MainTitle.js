import { motion, useAnimation } from "framer-motion";
import splitStringUsingRegex from "../../utils/splitStrings";
import { useMotionTemplate, useTransform } from "framer-motion";
import InfiniteText from "components/infiniteText/InfiniteText";

const TITLE = splitStringUsingRegex("AUTONES");

const MainTitle = ({ scrollYProgress }) => {
  const titleBlurRaw = useTransform(scrollYProgress, [0.25, 0.55], [0, 20]);

  const opacity = useTransform(scrollYProgress, [0.25, 0.6], ["100%", "0%"]);
  const filter = useMotionTemplate`blur(${titleBlurRaw}px)`;
  const scale = useTransform(scrollYProgress, [0, 0.6], ["100%", "85%"]);

  return (
    // <motion.div
    //   style={{
    //     opacity,
    //     scale,
    //     filter,
    //   }}
    //   className="flex flex-row  justify-center w-full p-0 z-10 overflow-hidden sm:gap-2 md:gap-2.5
    //           h-fit place-self-center"
    // >
    //   {TITLE.map((letter, i) => (
    //     <Letter i={i} letter={letter} key={i} />
    //   ))}
    // </motion.div>
    <InfiniteText visible={true} text="Autones" margin={24} />
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
        className="p-0 text-7xl  z-50 font-black inline-block tracking-tight uppercase h-fit sm:text-9xl md:text-9xl xl:text-xxxl"
      >
        {letter}
      </motion.span>
    </motion.div>
  );
};
