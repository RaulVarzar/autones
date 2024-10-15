import Testimonials from "components/testimonials/testimonials";
import AboutCard from "./AboutCard";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineAvTimer, MdHealthAndSafety } from "react-icons/md";
import Contact from "./Contact";

const AboutSection = ({ sectionIsActive }) => {
  const [dark, setDark] = useState(false);
  const sectionRef = useRef(null);
  const titleHelper = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const exitRef = useRef(null);

  // track if section is in fully in view
  const isInView = useInView(sectionRef, { margin: "0% 50% -100% 0%" });
  useEffect(() => {
    if (isInView) {
      sectionIsActive(true);
    } else {
      sectionIsActive(false);
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start"],
  });

  const sectionScale = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);

  const borderRadius = useTransform(scrollYProgress, [0, 1], ["12vw", "0vw"]);

  // Section title animations
  const { scrollYProgress: titleHelperProgress } = useScroll({
    target: titleHelper,
    offset: ["start end", "start"],
  });
  const rawTitleY = useTransform(
    titleHelperProgress,
    [0.2, 0.8],
    ["20vh", "0vh"]
  );
  const titleScale = useTransform(
    titleHelperProgress,
    [0.2, 0.8],
    ["150%", "100%"]
  );
  ///////////////////////

  // Section Y offset before entering viewport
  const sectionY = useTransform(scrollYProgress, [0.3, 0.95], ["30vh", "0vh"]);
  //////////////////////

  // Tracking progress of helpers to display each card one by one
  const firstInView = useInView(firstRef, { margin: "300% 0% -20% 0%" });
  const secondInView = useInView(secondRef, { margin: "300% 0% -20% 0%" });
  const thirdInView = useInView(thirdRef, { margin: "300% 0% -20% 0%" });
  ////////////////////

  // const testimonialsRef = useRef(null);

  // const { scrollYProgress: testimonialsProgress } = useScroll({
  //   target: testimonialsRef,
  //   offset: ["start end", "start"],
  // });

  const { scrollYProgress: exitProgress } = useScroll({
    target: exitRef,
    offset: ["start end", "end"],
  });

  const aboutX = useTransform(exitProgress, [0, 1], ["0%", "-100%"]);

  const titleExitX = useTransform(exitProgress, [0.1, 0.6], ["0%", "-90%"]);
  const cardsExitX = useTransform(exitProgress, [0.1, 0.8], ["0%", "-25%"]);

  // const { scrollY } = useScroll();
  // const scrollVelocity = useVelocity(scrollY);
  // const smoothVelocity = useSpring(scrollVelocity, {
  //   damping: 100,
  //   stiffness: 300,
  //   mass: 0.1,
  // });
  // const titleScale = useTransform(
  //   smoothVelocity,
  //   [-500, 0, 500],
  //   ["70%", "100%", "70%"]
  // );

  // About Section animations
  const aboutRef = useRef(null);
  const showTestimonialsContent = useInView(aboutRef, {
    margin: "0% 0% 20% 0%",
  });
  useEffect(() => {
    if (showTestimonialsContent) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [showTestimonialsContent]);
  ///////////////////////

  return (
    <>
      <motion.section
        style={{ borderRadius, scale: sectionScale, y: sectionY }}
        className={`sticky top-0  w-full overflow-hidden transition-colors duration-500 ${
          dark ? "bg-secondary" : "bg-primary"
        }`}
      >
        <motion.div
          ref={sectionRef}
          style={{ x: aboutX }}
          className="top-0 flex flex-col items-center w-full min-h-screen overflow-hidden justify-evenly "
        >
          <motion.div
            style={{ y: rawTitleY, x: titleExitX, scale: titleScale }}
            className="  text-5xl items-end  flex font-black uppercase tracking-wider max-sm:pt-16 sm:min-h-[20vh] md:text-7xl xl:text-8xl"
          >
            <h1>Ce îți oferim</h1>
          </motion.div>

          <motion.div
            style={{ x: cardsExitX }}
            className="grid grid-cols-1 gap-4 px-4 md:px-6 lg:px-8 sm:grid-cols-3 h-fit md:gap-6 lg:gap-8 justify-evenly"
          >
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
        <Contact showContent={showTestimonialsContent} />
      </motion.section>
      {/* Helpers for tracking progress and animating elements */}
      <div ref={titleHelper} className="h-[80vh] -z-50"></div>
      <motion.div className="-z-">
        <div ref={firstRef} className="h-[70vh]"></div>
        <div ref={secondRef} className="h-[70vh] "></div>
        <div ref={thirdRef} className="h-[90vh] "></div>
        <div ref={exitRef} className="h-[100vh] -z-50"></div>
        <motion.div ref={aboutRef} className=" h-[50vh] "></motion.div>
      </motion.div>
    </>
  );
};

export default AboutSection;