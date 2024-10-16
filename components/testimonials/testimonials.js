import Card from "./card";
import {
  motion,
  useDragControls,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

const titleVariants = {
  hidden: {
    opacity: 0,
    x: "-20%",
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.7,
    },
  },
  exit: {
    y: "50%",
    opacity: 0,
    transition: {
      ease: "anticipate",
      duration: 0.4,
    },
  },
};
const subTitleVariants = {
  hidden: {
    opacity: 0,
    x: "-20%",
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.7,
      delay: 0.15,
    },
  },
  exit: {
    y: "50%",
    opacity: 0,
    transition: {
      ease: "anticipate",
      duration: 0.4,
    },
  },
};

const Testimonials = ({ position }) => {
  const section = useRef(null);
  const constraintsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end"],
  });
  // const x = useTransform(scrollYProgress, [0, 0.5, 1], ["15%", "0%", "-50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.25], ["80%", "100%"]);
  const controls = useDragControls();

  // SKEW ON DRAG
  const x = useMotionValue(0);
  const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });
  const xVelocity = useVelocity(xSmooth);
  const cardSkew = useTransform(xVelocity, [-1500, 0, 1500], [-6, 1, 6], {
    clamp: false,
  });
  const cardX = useTransform(xVelocity, [-1500, 0, 1500], [20, 0, -20], {
    clamp: false,
  });
  ///////////////////

  return (
    <motion.section
      ref={section}
      style={{ x: position }}
      className="flex flex-col items-start gap-1 sm:gap-4 lg:gap-6 overflow-hidden md:flex-col"
    >
      <div className="flex flex-col pl-2 sm:pl-10 md:pl-12 lg:pl-16">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          exit={{ x: 200, opacity: 0, transition: { delay: 0, duration: 0.2 } }}
          className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-info-content  xl:text-4xl font-medium leading-3 tracking-wide uppercase  text-balance"
        >
          Ce spun
        </motion.h1>
        <motion.h2
          variants={subTitleVariants}
          initial="hidden"
          animate="visible"
          exit={{
            x: 250,
            opacity: 0,
            transition: { delay: 0.05, duration: 0.2 },
          }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl  xl:text-7xl font-bold uppercase"
        >
          clientii nostri
        </motion.h2>
      </div>
      <motion.div
        initial={{ x: "-110%" }}
        animate={{ x: 0 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1],
          duration: 1.2,
          delay: 0.3,
        }}
        ref={constraintsRef}
        exit={{ x: 300, opacity: 0, transition: { delay: 0.1, duration: 0.2 } }}
        className="flex flex-row w-full gap-16 p-2 overflow-hidden flex-nowrap "
      >
        <motion.div
          drag="x"
          dragControls={controls}
          dragMomentum={0.1}
          dragElastic={0.6}
          dragTransition={{ bounceDamping: 60, bounceStiffness: 300 }}
          dragConstraints={constraintsRef}
          style={{ x }}
          className="flex flex-row gap-4 sm:gap-6 px-8 sm:px-10 md:px-12 lg:px-16 xl:px-16 cursor-grab active:cursor-grabbing"
        >
          <Card skew={cardSkew} x={cardX} />
          <Card skew={cardSkew} x={cardX} />
          <Card skew={cardSkew} x={cardX} />
          <Card skew={cardSkew} x={cardX} />
          <Card skew={cardSkew} x={cardX} />
          <Card skew={cardSkew} x={cardX} />
          <Card skew={cardSkew} x={cardX} />
          <Card skew={cardSkew} x={cardX} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
