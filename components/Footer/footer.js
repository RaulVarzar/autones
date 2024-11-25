"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaPhoneFlip, FaFacebookF } from "react-icons/fa6";

const variants = {
  hidden: {
    opacity: 0,
    y: "10%",
    filter: "blur(15px)",
  },
  visible: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.75,
      delay: 0.1,
    },
  },
  exit: {
    y: "70%",
    opacity: 0,
    transition: {
      ease: "anticipate",
      duration: 0.6,
      delay: 0,
    },
  },
};

const socialVariants = {
  hidden: {
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  visible: {
    transition: {
      duration: 1,
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(3px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.5,
    },
  },
  visible: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    y: "50%",
    filter: "blur(5px)",
    // transition: {
    //   ease: [0.25, 0.1, 0.25, 1],
    //   // delay: 0.5,
    // },
  },
  visible: {
    opacity: 0.6,
    y: "0%",
    filter: "blur(0px)",
    // transition: {
    //   ease: [0.25, 0.1, 0.25, 1],
    //   // duration: 0.5,
    // },
  },
  hovering: { opacity: 1 },
};

const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.85"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 1], ["98%", "100%"]);
  const y = useTransform(scrollYProgress, [0.1, 1], ["2vh", "0vh"]);
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.8, 1],
    ["30%", "60%", "100%"]
  );
  const blurRaw = useTransform(scrollYProgress, [0, 0.6], [4, 0]);
  const filter = useMotionTemplate`blur(${blurRaw}px)`;

  const logoOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ["20%", "100%"]
  );

  const isInView = useInView(ref, {
    margin: "0% 0% -10% 0%",
  });

  return (
    <>
      <div ref={ref} className="relative h-0 "></div>
      <div className="sticky bottom-0 flex flex-col  md:flex-row items-center  2xl:pb-4 justify-between w-full min-h-[15vh] gap-12 px-4 py-8  mx-auto  bg-accent md:px-10">
        <motion.span
          style={{ opacity: logoOpacity, filter, y, opacity }}
          className=" text-3xl font-black pt-2 tracking-wider uppercase opacity-50 md:text-5xl sm:text-4xl left-4 lg:text-6xl xl:text-8xl"
        >
          Autones
        </motion.span>
        <motion.div className="flex  flex-col items-center justify-center w-full max-w-5xl gap-x-8 2xl:gap-x-12 xl:flex-row h-fit ">
          <div className="flex  flex-col w-full md:flex-row md:items-end lg:w-1/2 max-md:text-center ">
            <div className="md:text-right lg:max-w-md opacity-90">
              <motion.p
                variants={textVariants}
                animate={isInView ? "visible" : "hidden"}
                className="mt-3 text-center text-md md:text-lg xl:text-xl"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </motion.p>
            </div>
          </div>
          <motion.div
            variants={socialVariants}
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-row  items-center justify-center w-full gap-4 py-2 text-lg lg:gap-6 h-fit lg:w-1/2 "
          >
            <motion.a
              variants={childrenVariants}
              animate={isInView ? "visible" : "hidden"}
              whileHover="hovering"
              transition={{ delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              href="tel:0744-765-543"
              className="px-4 py-3 text-lg font-medium tracking-wide border-2 sm:px-6 sm:py-5 w-fit rounded-2xl border-base-content text-base-content lg:text-2xl"
            >
              <FaPhoneFlip />
            </motion.a>

            <motion.a
              variants={childrenVariants}
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover="hovering"
              href="tel:0744-765-543"
              className="px-4 py-3 text-lg font-medium tracking-wide border-2 sm:px-6 sm:py-5 w-fit rounded-2xl border-base-content text-base-content lg:text-2xl"
            >
              <FaEnvelope />
            </motion.a>

            <motion.a
              variants={childrenVariants}
              whileHover="hovering"
              href="tel:0744-765-543"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="px-4 py-3 text-lg font-medium tracking-wide border-2 sm:px-6 sm:py-5 w-fit rounded-2xl border-base-content text-base-content lg:text-2xl"
            >
              <FaLocationDot />
            </motion.a>

            <motion.a
              variants={childrenVariants}
              whileHover="hovering"
              href="tel:0744-765-543"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="px-4 py-3 text-lg font-medium tracking-wide border-2 sm:px-6 sm:py-5 w-fit rounded-2xl border-base-content text-base-content lg:text-2xl"
            >
              <FaFacebookF />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
