import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineAvTimer, MdHealthAndSafety } from "react-icons/md";
import AboutCard from "./AboutCard";
import { useRef } from "react";

const WhatWeOffer = ({
  titleY,
  titleScale,
  firstInView,
  secondInView,
  thirdInView,
  progressBar,
  progressBarInView,
}) => {
  return (
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
      className="flex flex-col items-center justify-start w-full h-screen gap-4 overflow-hidden flex-nowrap sm:gap-6 lg:gap-16 2xl:gap-20"
    >
      <motion.div
        className={`flex flex-col items-center justify-center font-black tracking-wider uppercase  sm:pt-[15vh] xl:pt-[20vh] max-sm:pt-20 `}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl"
          style={{ y: titleY, scale: titleScale }}
        >
          Ce îți oferim
        </motion.h1>
      </motion.div>

      <div className="grid w-full py-2 grow">
        <motion.div className="grid grid-cols-1 gap-2 px-4 mx-auto max-w-screen-3xl lg:h-full sm:gap-4 md:px-6 lg:px-8 lg:grid-cols-3 md:gap-6 lg:gap-8 justify-evenly">
          <AboutCard
            title="Prețuri competitive"
            description="Fără taxe ascunse"
            visible={firstInView}
          >
            <GiPayMoney />
          </AboutCard>

          <AboutCard
            title="Siguranță și încredere"
            description="Când apelezi la noi, știi că mașina ta va ajunge la
            destinație in cel mai scurt timp și în condiții de siguranță"
            visible={secondInView}
          >
            <MdHealthAndSafety />
          </AboutCard>

          <AboutCard
            title="Disponibilitate non-stop"
            description="24 de ore pe zi, 7 zile pe săptămână, 365 de zile pe an"
            visible={thirdInView}
          >
            <MdOutlineAvTimer />
          </AboutCard>
        </motion.div>
      </div>

      <ProgressBar progress={progressBar} visible={progressBarInView} />
    </motion.div>
  );
};

export default WhatWeOffer;

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
