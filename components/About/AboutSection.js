"use client";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Contact from "./Contact";
import RoundedTop from "./RoundedTop";
import useWidth from "lib/isMobile";
import WhatWeOffer from "./WhatWeOffer";

const AboutSection = ({ sectionIsActive }) => {
  const isMobile = useWidth();
  const [dark, setDark] = useState(false);
  const aboutRef = useRef(null);

  const progressBarHelper = useRef(null);

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  // Tracking progress of helpers to display each card one by one
  const firstInView = useInView(firstRef, { margin: "300% 0% 0% 0%" });
  const secondInView = useInView(secondRef, { margin: "300% 0% 0% 0%" });
  const thirdInView = useInView(thirdRef, { margin: "300% 0% -5% 0%" });
  ////////////////////

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
  const { scrollYProgress: titleScaleProgress } = useScroll({
    target: aboutRef,
    offset: ["start", "end start"],
  });
  const titleScale = useTransform(titleScaleProgress, [0, 1], ["140%", "100%"]);
  ///////////////////////

  // Section Y offset before entering viewport
  const titleY = useTransform(scrollYProgress, [0.3, 1], ["15vh", "0vh"]);
  //////////////////////

  // About Section animations
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { margin: "300% 0% 0% 0%" });
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
    <div className="z-40 relative">
      <RoundedTop scrollProgress={scrollYProgress} />
      <div
        ref={aboutRef}
        className="h-[40vh] md:h-[30vh] w-full bg-accent "
      ></div>
      <motion.section
        style={{
          borderBottomLeftRadius: sectionBorderRadius,
          borderBottomRightRadius: sectionBorderRadius,
          // scale: exitScale,
        }}
        className={`sticky top-0 w-full h-screen overflow-hidden transition-colors delay-75 duration-500 ${
          dark ? "bg-base-100" : "bg-accent"
        }`}
      >
        <AnimatePresence mode="sync">
          {!contactInView && (
            <WhatWeOffer
              titley={titleY}
              titleScale={titleScale}
              firstInView={firstInView}
              secondInView={secondInView}
              thirdInView={thirdInView}
              progressBar={progressBar}
              progressBarInView={progressBarInView}
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="sync">
          {contactInView && <Contact moveY={contactY} />}
        </AnimatePresence>
      </motion.section>

      {/* Helpers for tracking progress and animating elements */}
      <div className="h-[10vh]"></div>

      <motion.div ref={progressBarHelper}>
        <div
          ref={firstRef}
          className="h-[30vh] sm:h-[70vh] w-full bg-red-700 opacity-100 z-50"
        ></div>
        <div
          ref={secondRef}
          className="sm:h-[60vh] h-[30vh] w-full bg-green-700 opacity-100 z-50"
        ></div>
        <div
          ref={thirdRef}
          className="sm:h-[60vh] h-[30vh] w-full bg-blue-700 opacity-100 z-50 "
        ></div>
      </motion.div>
      <motion.div ref={contactRef} className=" h-[80vh]  "></motion.div>
    </div>
  );
};

export default AboutSection;
