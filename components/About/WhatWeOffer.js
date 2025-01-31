"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineAvTimer, MdHealthAndSafety } from "react-icons/md";
import AboutCard from "./AboutCard";
import { useRef } from "react";

const CARDS = [
  { id: 0, title: "Prețuri competitive", description: "Fără taxe ascunse" },
  {
    id: 1,
    title: "Siguranță și încredere",
    description:
      "Când apelezi la noi, știi că mașina ta va ajunge la destinație in cel mai scurt timp și în condiții de siguranță",
  },
  {
    id: 2,
    title: "Disponibilitate non-stop",
    description: "24 de ore pe zi, 7 zile pe săptămână, 365 de zile pe an",
  },
];

const WhatWeOffer = ({ progressBar, progressBarInView }) => {
  const cardsRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsInView = useInView(cardsRef, { margin: "0% 0% -40% 0%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 0.25], [0.88, 1]);

  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{
          y: 0,
        }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{
          duration: 0.55,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        ref={sectionRef}
        style={{ scaleX }}
        className="flex flex-col items-center pb-12 sm:pb-20 md:pb-28 xl:pb-48 justify-start w-full  min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-1.5rem)] xl:min-h-[calc(100vh-2rem)] 2xl:min-h-[calc(100vh-2.5rem)] gap-4 overflow-hidden rounded-3xl bg-accent-content flex-nowrap sm:gap-6 lg:gap-16 2xl:gap-20"
      >
        <motion.div
          className={`flex flex-col  items-center justify-center font-black tracking-wider uppercase  sm:pt-[12vh] xl:pt-[15vh]  sm:pb-[5vh] xl:pb-[8vh] max-sm:py-16 `}
        >
          <Title />
        </motion.div>

        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 gap-2 px-4 mx-auto max-w-screen-3xl lg:h-full sm:gap-2 md:px-6 lg:px-8 lg:grid-cols-1 justify-evenly"
        >
          <AboutCard
            title="Prețuri competitive"
            description="Fără taxe ascunse"
            visible={cardsInView}
            id={0}
            rotate={2}
          >
            <GiPayMoney />
          </AboutCard>

          <AboutCard
            title="Siguranță și încredere"
            description="Când apelezi la noi, știi că mașina ta va ajunge la
            destinație in cel mai scurt timp și în condiții de siguranță"
            visible={cardsInView}
            id={1}
            rotate={-2}
          >
            <MdHealthAndSafety />
          </AboutCard>

          <AboutCard
            title="Disponibilitate non-stop"
            description="24 de ore pe zi, 7 zile pe săptămână, 365 de zile pe an"
            visible={cardsInView}
            id={2}
            rotate={3}
          >
            <MdOutlineAvTimer />
          </AboutCard>
        </motion.div>

        <ProgressBar progress={progressBar} visible={progressBarInView} />
      </motion.div>
      {/* <div className="w-48 h-[50vh] relative bg-red-900 z-[9999]"></div> */}
    </>
  );
};

export default WhatWeOffer;

export const Title = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0% 0% -30% 0%" });
  return (
    <motion.div ref={ref} className="py-6 overflow-hidden ">
      <motion.h1
        initial={{ y: "145%" }}
        animate={inView && { y: "0%" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.7, 0, 0.2, 1] }}
        className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl"
      >
        Ce îți oferim
      </motion.h1>
    </motion.div>
  );
};

const ProgressBar = ({ progress, visible }) => {
  const progressBarVariants = {
    hidden: {
      opacity: 0,
      y: "10px",
      transition: {
        ease: "anticipate",
        delay: 0,
        duration: 0.4,
      },
    },
    visible: {
      opacity: 1,
      y: "0px",
      transition: {
        type: "spring",
        stiffness: 70,
        mass: 0.3,
        damping: 6,
        delay: 0.1,
      },
    },
  };
  return (
    <motion.div
      variants={progressBarVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="flex items-start justify-start w-10/12 h-2 mx-auto my-4 overflow-hidden rounded-full max-w-7xl backdrop-brightness-75"
    >
      <motion.div
        style={{ x: progress }}
        className="w-full h-full bg-primary"
      ></motion.div>
    </motion.div>
  );
};
