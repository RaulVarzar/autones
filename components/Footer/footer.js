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

import Contact from "../Footer/Contact";
import Form from "./Form";
import Title from "./Title";

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
    y: "40%",
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
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const hoverVariants = {
  notHovering: {
    opacity: 0.5,
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.3,
    },
  },
  hovering: {
    opacity: 1,
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: "50%",
    filter: "blur(5px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.1,
    },
  },
  visible: (index) => ({
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.4 + index * 0.15,
      duration: 0.7,
    },
  }),
};

const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.15"],
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

  // const isInView = useInView(ref, {
  //   margin: "0% 0% -10% 0%",
  // });
  const isInView = true;

  const sectionY = useTransform(scrollYProgress, [0, 1], ["-35vh", "0vh"]);

  return (
    <>
      <div ref={ref} className="relative h-0 bg-red-500 w-full "></div>

      <motion.div
        style={{ y: sectionY }}
        className="min-h-[85vh] gap-1 flex flex-col pt-10 md:pt-16 xl:pt-24"
      >
        <motion.div className=" flex   grow flex-col md:flex-row items-center w-full 2xl:pb-4 justify-evenly   gap-8  py-3  mx-auto  bg-base-100  ">
          <div className=" flex flex-col  md:flex-col justify-center items-end  w-full md:w-1/2 max-w-3xl ">
            <motion.span
              style={{ opacity: logoOpacity, filter, y, opacity }}
              className="pt-2 text-4xl font-black tracking-wider uppercase md:text-5xl sm:text-4xl lg:text-6xl xl:text-8xl"
            >
              Autones
            </motion.span>
            <motion.div className="flex  flex-col  items-end max-w-5xl gap-2 2xl:gap-4  h-fit ">
              <div className=" lg:max-w-lg opacity-90">
                <motion.p
                  variants={textVariants}
                  animate={isInView ? "visible" : "hidden"}
                  className="mt-3 text-center md:text-right text-md md:text-lg xl:text-xl"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </motion.p>
              </div>
              <motion.div
                variants={socialVariants}
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-row items-center justify-center   w-fit gap-4 py-2 text-lg lg:gap-6 h-fit "
              >
                <motion.span
                  variants={buttonVariants}
                  animate={isInView ? "visible" : "hidden"}
                  custom={0}
                  className="flex "
                >
                  <motion.a
                    variants={hoverVariants}
                    whileHover="hovering"
                    initial="notHovering"
                    href="tel:0744-765-543"
                    className="px-4 py-3 text-lg font-medium tracking-wide border-2 sm:px-6 sm:py-5 w-fit rounded-2xl border-base-content text-base-content lg:text-2xl"
                  >
                    <FaPhoneFlip />
                  </motion.a>
                </motion.span>

                <motion.span
                  variants={buttonVariants}
                  animate={isInView ? "visible" : "hidden"}
                  custom={1}
                  className="flex"
                >
                  <motion.a
                    variants={hoverVariants}
                    whileHover="hovering"
                    initial="notHovering"
                    href="mailto:test@test.com"
                    className="px-4 py-3 text-lg font-medium tracking-wide border-2 sm:px-6 sm:py-5 w-fit rounded-2xl border-base-content text-base-content lg:text-2xl"
                  >
                    <FaEnvelope />
                  </motion.a>
                </motion.span>

                <motion.span
                  variants={buttonVariants}
                  animate={isInView ? "visible" : "hidden"}
                  custom={2}
                  className="flex"
                >
                  <motion.a
                    variants={hoverVariants}
                    whileHover="hovering"
                    initial="notHovering"
                    href="https://www.google.com/maps"
                    target="_blank"
                    className="px-4 py-3 text-lg font-medium tracking-wide border-2 sm:px-6 sm:py-5 w-fit rounded-2xl border-base-content text-base-content lg:text-2xl"
                  >
                    <FaLocationDot />
                  </motion.a>
                </motion.span>

                <motion.span
                  variants={buttonVariants}
                  animate={isInView ? "visible" : "hidden"}
                  custom={3}
                  className="flex"
                >
                  <motion.a
                    variants={hoverVariants}
                    whileHover="hovering"
                    initial="notHovering"
                    href="https://www.facebook.com"
                    target="_blank"
                    className="px-4 py-3 text-lg font-medium tracking-wide border-2 sm:px-6 sm:py-5 w-fit rounded-2xl border-base-content text-base-content lg:text-2xl"
                  >
                    <FaFacebookF />
                  </motion.a>
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          <Form />
        </motion.div>
        <Title />
      </motion.div>
    </>
  );
};

export default Footer;
