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

import Contact from "./Contact";
import Form from "./Form";
import TextCarousel from "./TextCarousel";

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

  const scale = useTransform(scrollYProgress, [0.1, 1], ["90%", "100%"]);

  const sectionY = useTransform(scrollYProgress, [0, 1], ["-35vh", "0vh"]);

  const headerRef = useRef(null);
  const headerVisible = useInView(headerRef, {
    amount: 0.7,
  });
  return (
    <>
      <div ref={ref} className="relative h-0"></div>

      <motion.div
        style={{ y: sectionY }}
        className="min-h-[85vh] gap-1 flex flex-col pt-10 md:pt-16 xl:pt-24"
      >
        <motion.div className="flex flex-col items-center justify-center w-full gap-8 py-3 mx-auto grow md:flex-row 2xl:pb-4 border-info bg-base-100">
          <motion.div
            style={{ scale }}
            ref={headerRef}
            className="flex flex-col items-end justify-center w-full max-w-3xl md:origin-right md:flex-col md:w-1/2"
          >
            <Title visible={headerVisible} />
            <motion.div className="flex flex-col items-end max-w-5xl gap-2 2xl:gap-4 h-fit ">
              <SubHeader visible={headerVisible} />

              <motion.div className="flex flex-row items-center justify-center gap-4 py-2 text-lg w-fit lg:gap-6 h-fit ">
                <IconButton
                  visible={headerVisible}
                  link="tel:0744-765-543"
                  id={0}
                >
                  <FaPhoneFlip />
                </IconButton>

                <IconButton visible={headerVisible} link="mailto:" id={1}>
                  <FaEnvelope />
                </IconButton>

                <IconButton
                  visible={headerVisible}
                  link="https://www.google.com/maps/"
                  id={2}
                >
                  <FaLocationDot />
                </IconButton>

                <IconButton
                  visible={headerVisible}
                  link="https://www.facebook.com"
                  id={3}
                >
                  <FaFacebookF />
                </IconButton>
              </motion.div>
            </motion.div>
          </motion.div>

          <Form />
        </motion.div>
        <TextCarousel />
      </motion.div>
    </>
  );
};

export default Footer;

export const Title = ({ visible }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "10%",
      filter: "blur(3px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 1,
        delay: 0,
      },
    },
  };
  return (
    <motion.span
      variants={variants}
      animate={visible ? "visible" : "hidden"}
      className="pt-2 text-4xl font-black tracking-wider uppercase md:text-5xl sm:text-4xl lg:text-6xl xl:text-8xl"
    >
      Autones
    </motion.span>
  );
};

export const SubHeader = ({ visible }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "20%",
      filter: "blur(3px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <div className=" lg:max-w-lg opacity-90">
      <motion.p
        variants={variants}
        animate={visible ? "visible" : "hidden"}
        className="mt-3 text-center md:text-right text-md md:text-lg xl:text-xl"
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.
      </motion.p>
    </div>
  );
};

export const IconButton = ({ children, visible, link, id }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "50%",
      filter: "blur(5px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0,
      },
    },
    visible: (index) => ({
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.7, 0, 0.25, 1],
        delay: 0.4 + index * 0.15,
        duration: 1,
      },
    }),
  };

  return (
    <motion.span
      variants={variants}
      animate={visible ? "visible" : "hidden"}
      custom={id}
      className="flex "
    >
      <motion.a
        variants={hoverVariants}
        whileHover="hovering"
        initial="notHovering"
        href={link}
        target="_blank"
        className="px-4 py-3 text-lg font-medium tracking-wide border-2 sm:px-6 sm:py-5 w-fit rounded-2xl border-base-content text-base-content lg:text-2xl"
      >
        {children}
      </motion.a>
    </motion.span>
  );
};
