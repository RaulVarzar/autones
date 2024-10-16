import AboutCard from "./AboutCard";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineAvTimer, MdHealthAndSafety } from "react-icons/md";
import Contact from "./Contact";
import useWidth from "lib/isMobile";

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

  const borderRadius = useTransform(scrollYProgress, [0, 1], ["8vw", "0vw"]);

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
  const { scrollYProgress: titleHelperProgress } = useScroll({
    target: titleHelper,
    offset: ["start end", "start"],
  });
  const rawTitleY = useTransform(
    titleHelperProgress,
    [0.1, 0.7],
    ["20vh", "0vh"]
  );
  const titleScale = useTransform(
    titleHelperProgress,
    [0.1, 0.7],
    ["150%", "100%"]
  );
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
          className="top-0 flex flex-col  gap-4 sm:gap-6 lg:gap-12 items-center w-full min-h-screen  overflow-hidden justify-evenly "
        >
          <motion.div
            style={{
              y: rawTitleY,
              x: titleExitX,
              scale: !isMobile && titleScale,
            }}
            className="  text-5xl items-end  flex font-black uppercase opacity-90 tracking-wider max-sm:pt-16 sm:min-h-[20vh] md:text-7xl xl:text-8xl"
          >
            <h1>Ce îți oferim</h1>
          </motion.div>

          <motion.div
            className=" grow grid md:pt-12 place-items-start"
            style={{ x: cardsExitX }}
          >
            <motion.div className="grid h-fit grid-cols-1 gap-4  px-4 md:px-6 lg:px-8 sm:grid-cols-3 md:gap-6 lg:gap-8 justify-evenly">
              <AboutCard
                title="Prețuri competitive"
                description="Fără taxe ascunse"
                visible={firstInView}
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
                description="Când apelezi la noi, știi cu siguranță ca mașina ta va ajunge la
                destinație in cel mai scurt timp și în condiții de siguranță"
                visible={thirdInView}
              >
                <MdHealthAndSafety />
              </AboutCard>
            </motion.div>
          </motion.div>
          <ProgressBar progress={progressBar} visible={progressBarInView} />
        </motion.div>
        {/* <motion.div style={{ filter: testBlur }}> */}
        <Contact
          showTestimonials={showTestimonialsContent}
          showContact={showContactContent}
        />
        {/* </motion.div> */}
      </motion.section>
      {/* Helpers for tracking progress and animating elements */}
      <div ref={titleHelper} className="h-[80vh] -z-50 "></div>
      <motion.div ref={progressBarHelper} className="">
        <div ref={firstRef} className="h-[40vh]"></div>
        <div ref={secondRef} className="h-[70vh] "></div>
        <div ref={thirdRef} className="h-[60vh] "></div>
      </motion.div>
      <div ref={exitRef} className="h-[100vh] -z-50"></div>
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
      },
    },
  };
  return (
    <motion.div
      variants={progressBarVariants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className=" my-4  overflow-hidden h-3 flex items-start justify-start rounded-full w-10/12 max-w-7xl mx-auto bg-accent"
    >
      <motion.div
        style={{ x: progress }}
        className="bg-secondary h-full w-full"
      ></motion.div>
    </motion.div>
  );
};
