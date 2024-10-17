import AboutCard from "./AboutCard";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineAvTimer, MdHealthAndSafety } from "react-icons/md";
import Contact from "./Contact";
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
  const exitRef = useRef(null);
  const progressBarHelper = useRef(null);

  // track if section is in fully in view
  const isInView = useInView(aboutRef, { margin: "0% 0% -98% 0%" });
  useEffect(() => {
    if (isInView) {
      sectionIsActive(true);
    } else {
      sectionIsActive(false);
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start"],
  });

  const sectionScale = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);

  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

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
  const sectionY = useTransform(scrollYProgress, [0.3, 0.95], ["40vh", "0vh"]);
  //////////////////////

  // Tracking progress of helpers to display each card one by one
  const firstInView = useInView(firstRef, { margin: "300% 0% 0% 0%" });
  const secondInView = useInView(secondRef, { margin: "300% 0% -10% 0%" });
  const thirdInView = useInView(thirdRef, { margin: "300% 0% -5% 0%" });
  ////////////////////

  const { scrollYProgress: exitProgress } = useScroll({
    target: exitRef,
    offset: ["start end", "end"],
  });

  const aboutX = useTransform(exitProgress, [0, 1], ["0%", "-101%"]);

  const titleExitX = useTransform(exitProgress, [0.1, 0.6], ["0%", "-90%"]);
  const cardsExitX = useTransform(exitProgress, [0.1, 0.8], ["0%", "-25%"]);

  // About Section animations
  const contactRef = useRef(null);
  const showTestimonialsContent = useInView(contactRef, {
    margin: "0% 0% 12% 0%",
  });
  const showContactContent = useInView(contactRef, {
    margin: "0% 0% -15% 0%",
  });
  useEffect(() => {
    if (showTestimonialsContent) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [showTestimonialsContent]);
  ///////////////////////

  // Shring section when footer visible
  // const sectionRef = useRef(null);
  const { scrollYProgress: sectionExit } = useScroll({
    target: contactRef,
    offset: ["end", "end center"],
  });
  const exitScale = useTransform(sectionExit, [0, 1], ["100%", "97%"]);
  const sectionBorderRadius = useTransform(
    sectionExit,
    [0, 1],
    ["0vh", "10vh"]
  );
  const testBlur = useTransform(
    sectionExit,
    (v) => `blur(${((v * 10) / 2).toFixed(0)}px)`
  );

  ////////////////////

  return (
    <motion.div>
      <motion.section
        // ref={sectionRef}
        style={{
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          borderBottomLeftRadius: sectionBorderRadius,
          borderBottomRightRadius: sectionBorderRadius,
          scale: exitScale,
          // y: sectionY,
        }}
        className={`sticky top-0 w-full overflow-hidden transition-colors duration-500 ${
          dark ? "bg-base-200" : "bg-primary"
        }`}
      >
        <motion.div
          ref={aboutRef}
          style={{ x: aboutX }}
          className="flex flex-col items-center justify-start w-full h-screen gap-4 overflow-hidden flex-nowrap sm:gap-6 lg:gap-12 "
        >
          <motion.div
            initial={{ minHeight: "100vh" }}
            animate={
              titleInView ? { minHeight: "10vh" } : { minHeight: "100vh" }
            }
            transition={{
              duration: 0.85,
              delay: 0,
              ease: [0.45, 0.45, 0.86, 0.85],
            }}
            className={`flex flex-col items-center justify-center font-black tracking-wider uppercase  py-[5vh] sm:py-[10vh] lg:py-[12vh] max-sm:pt-16 `}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl"
              initial={{ scale: 1.4 }}
              animate={titleInView ? { scale: 1 } : { scale: 1.4 }}
              transition={{
                duration: 0.65,
                delay: 0,
                ease: [0.45, 0.45, 0.86, 0.85],
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
                title="Disponibilitate non-stop"
                description="24 de ore pe zi, 7 zile pe săptămână, 365 de zile pe an"
                visible={secondInView}
              >
                <MdOutlineAvTimer />
              </AboutCard>

              <AboutCard
                title="Siguranță și încredere"
                description="Când apelezi la noi, știi că mașina ta va ajunge la
                destinație in cel mai scurt timp și în condiții de siguranță"
                visible={thirdInView}
              >
                <MdHealthAndSafety />
              </AboutCard>
            </motion.div>
          </motion.div>

          <ProgressBar progress={progressBar} visible={progressBarInView} />
        </motion.div>

        <Contact
          showTestimonials={showTestimonialsContent}
          showContact={showContactContent}
        />
      </motion.section>
      {/* Helpers for tracking progress and animating elements */}
      <div ref={titleHelper} className="-z-[50] h-[25vh] "></div>
      <motion.div ref={progressBarHelper} className="">
        <div ref={firstRef} className="-z-[50] h-[40vh]"></div>
        <div ref={secondRef} className="h-[70vh] "></div>
        <div ref={thirdRef} className="h-[60vh] "></div>
      </motion.div>
      <div ref={exitRef} className="h-[100vh] "></div>
      <motion.div
        ref={contactRef}
        className=" h-[70vh] bg-accent w-full "
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
      className="flex items-start justify-start w-10/12 h-3 mx-auto my-4 overflow-hidden rounded-full max-w-7xl bg-accent"
    >
      <motion.div
        style={{ x: progress }}
        className="w-full h-full bg-secondary"
      ></motion.div>
    </motion.div>
  );
};
