import AboutCard from "./AboutCard";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineAvTimer, MdHealthAndSafety } from "react-icons/md";
import Contact from "./Contact";
import RoundedTop from "./RoundedTop";
import useWidth from "lib/isMobile";
import { BsChevronCompactDown } from "react-icons/bs";

const AboutSection = ({ sectionIsActive }) => {
  const isMobile = useWidth();
  const [dark, setDark] = useState(false);
  const aboutRef = useRef(null);
  const titleHelper = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const progressBarHelper = useRef(null);

  // track section progress coming into view
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start"],
  });
  ////////////////////////

  // PROGRESS BAR
  const progressBarInView = useInView(progressBarHelper, {
    margin: "-99% 0% -1% 0%",
  });
  const { scrollYProgress: progressBarY } = useScroll({
    target: progressBarHelper,
    offset: ["start end", "end"],
  });
  const progressBar = useTransform(progressBarY, [0, 1], ["-100%", "0%"]);
  ///////////////////////////

  // Section title animations
  const titleInView = useInView(titleHelper, {
    margin: "1000% 0% -25% 0%",
  });
  ///////////////////////

  // Section Y offset before entering viewport
  const titleY = useTransform(scrollYProgress, [0.3, 1], ["20vh", "0vh"]);
  //////////////////////

  // Tracking progress of helpers to display each card one by one
  const firstInView = useInView(firstRef, { margin: "300% 0% 0% 0%" });
  const secondInView = useInView(secondRef, { margin: "300% 0% 0% 0%" });
  const thirdInView = useInView(thirdRef, { margin: "300% 0% -5% 0%" });
  ////////////////////

  // About Section animations
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { margin: "300% 0% -20% 0%" });
  //////////////////////////

  useEffect(() => {
    if (contactInView) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [contactInView]);
  ///////////////////////

  const isInView = useInView(aboutRef, { margin: "-1% 0% -98% 0%" });
  useEffect(() => {
    if (isInView && !contactInView) {
      sectionIsActive(true);
    } else {
      sectionIsActive(false);
    }
  }, [isInView]);

  // Shring section when footer visible
  // const sectionRef = useRef(null);
  const { scrollYProgress: sectionExit } = useScroll({
    target: contactRef,
    offset: ["end", "end center"],
  });
  const contactY = useTransform(sectionExit, [0, 0.9], ["0px", "-75px"]);
  const exitScale = useTransform(sectionExit, [0.3, 1], ["100%", "97%"]);
  const sectionBorderRadius = useTransform(
    sectionExit,
    [0.05, 0.3, 1],
    ["0vh", "5vh", "7vh"]
  );

  ////////////////////

  return (
    <motion.div>
      <RoundedTop scrollProgress={scrollYProgress} />
      <motion.section
        // ref={sectionRef}
        style={{
          borderBottomLeftRadius: sectionBorderRadius,
          borderBottomRightRadius: sectionBorderRadius,
          scale: exitScale,
          // y: sectionY,
        }}
        className={`sticky top-0 w-full overflow-hidden transition-colors delay-100 duration-500 ${
          dark ? "bg-base-100" : "bg-accent"
        }`}
      >
        <motion.div
          ref={aboutRef}
          initial={{ y: 0 }}
          animate={
            contactInView
              ? { y: "-100%" }
              : {
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.55,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }
          }
          transition={{
            duration: 0.55,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex flex-col items-center  justify-start w-full h-screen gap-4 overflow-hidden flex-nowrap sm:gap-6 lg:gap-12 "
        >
          <motion.div
            initial={{ minHeight: "100vh" }}
            animate={
              titleInView ? { minHeight: "10vh" } : { minHeight: "100vh" }
            }
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.15, 0.4, 0.65, 0.9],
            }}
            className={`flex flex-col items-center justify-center font-black tracking-wider uppercase  py-[5vh] sm:py-[10vh] lg:py-[12vh] max-sm:pt-16 `}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl"
              initial={{ scale: 1.4 }}
              animate={titleInView ? { scale: 1 } : { scale: 1.4 }}
              transition={{
                duration: 0.4,
                ease: [0.15, 0.4, 0.65, 0.9],
                delay: 0,
              }}
              style={{
                y: titleY,
              }}
            >
              Ce îți oferim
            </motion.h1>
            <AnimatePresence>
              {!titleInView && (
                <motion.div
                  exit={{ y: "200%", opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0,
                    ease: [0.635, 0, 0.13, 1],
                  }}
                  className="absolute flex flex-col items-center justify-center gap-0 pt-12 bottom-12 opacity-70"
                >
                  <p className="text-2xl font-normal leading-4">Scroll</p>
                  <BsChevronCompactDown className="text-3xl " />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            layout
            className="grid w-full py-2 grow place-content-center"
          >
            <motion.div className="grid grid-cols-1 gap-2 px-4 sm:gap-4 md:px-6 lg:px-8 sm:grid-cols-3 md:gap-6 lg:gap-8 justify-evenly">
              <AboutCard
                title="Prețuri competitive"
                description="Fără taxe ascunse"
                visible={firstInView}
                isFirst={true}
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
          </motion.div>

          <ProgressBar progress={progressBar} visible={progressBarInView} />
        </motion.div>
        <AnimatePresence mode="sync">
          {contactInView && <Contact moveY={contactY} />}
        </AnimatePresence>
      </motion.section>
      {/* Helpers for tracking progress and animating elements */}
      <div ref={titleHelper} className="-z-[50] h-[25vh] "></div>
      <motion.div ref={progressBarHelper} className="">
        <div ref={firstRef} className="-z-[50] h-[50vh]"></div>
        <div ref={secondRef} className="h-[50vh] "></div>
        <div ref={thirdRef} className="h-[50vh] bg-accent w-full"></div>
      </motion.div>
      <motion.div
        ref={contactRef}
        className=" h-[50vh] bg-accent w-full "
      ></motion.div>
    </motion.div>
  );
};

export default AboutSection;

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
        delay: 0.8,
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
