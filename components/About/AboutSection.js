import Testimonials from "../testimonials/Testimonials";

import RoundedTop from "./RoundedTop";
import WhatWeOffer from "./WhatWeOffer";
import { useMotionTemplate, useScroll, useTransform } from "framer-motion";

const AboutSection = ({}) => {
  // const isMobile = useWidth();
  // const aboutRef = useRef(null);
  // const sectionRef = useRef(null);
  // const progressBarHelper = useRef(null);

  // const firstRef = useRef(null);
  // const secondRef = useRef(null);
  // const thirdRef = useRef(null);

  // Tracking progress of helpers to display each card one by one
  // const firstInView = useInView(firstRef, { margin: "300% 0% 0% 0%" });
  // const secondInView = useInView(secondRef, { margin: "300% 0% 0% 0%" });
  // const thirdInView = useInView(thirdRef, { margin: "300% 0% -5% 0%" });
  ////////////////////

  // PROGRESS BAR
  // const progressBarInView = useInView(progressBarHelper, {
  //   margin: "-99% 0% -1% 0%",
  // });
  // const { scrollYProgress: progressBarY } = useScroll({
  //   target: progressBarHelper,
  //   offset: ["start end", "end"],
  // });
  // const progressBar = useTransform(progressBarY, [0, 1], ["-100%", "0%"]);
  ///////////////////////////

  // Section title animations

  // const { scrollYProgress: titleScaleProgress } = useScroll({
  //   target: aboutRef,
  //   offset: ["start", "end start"],
  // });
  // const titleScale = useTransform(titleScaleProgress, [0, 1], ["140%", "100%"]);
  // const titleY = useTransform(scrollYProgress, [0, 1], ["20vh", "0vh"]);
  //////////////////////

  // About Section animations
  // const contactRef = useRef(null);
  // const contactInView = useInView(contactRef, { margin: "300% 0% 0% 0%" });
  //////////////////////////

  ///////////////////////

  // Shring section when footer visible

  // const { scrollYProgress: sectionExit } = useScroll({
  //   target: contactRef,
  //   offset: ["end", "end 0.8"],
  // });
  // const contactY = useTransform(sectionExit, [0, 0.9], ["0px", "-75px"]);

  //////////////////

  // const sectionRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "start"],
  // });
  // const clipPathRaw = useTransform(scrollYProgress, [0, 0.35], [10, 0]);
  // const borderRadius = useTransform(
  //   scrollYProgress,
  //   [0, 0.35, 0.95, 1],
  //   ["5rem", "2rem", "2rem", "0rem"]
  // );

  // const clipPath = useMotionTemplate`inset( 0 ${clipPathRaw}% 0 ${clipPathRaw}% round ${borderRadius} ${borderRadius} 0 0)`;

  return (
    <div className="relative z-40 overflow-hidden bg-gradient-to-t from-base-200 to-base-100p-2">
      {/* <RoundedTop scrollProgress={scrollYProgress} /> */}
      {/* <div ref={aboutRef} className="h-[0vh] md:h-[0vh] w-full bg-accent"></div> */}
      <section className="relative flex flex-col w-full pb-12 overflow-hidden md:pb-24 xl:pb-36 rounded-b-3xl">
        <div>
          <WhatWeOffer />
        </div>
        <div className="flex items-center py-24 sm:grow h-fit ">
          <Testimonials />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-screen bg-accent-content -z-10"></div>
      </section>

      {/* Helpers for tracking progress and animating elements */}

      {/* <motion.div ref={progressBarHelper} className="w-2 z-[9999] bg-red-700">
        <div ref={firstRef} className="h-[30vh] sm:h-[10vh] "></div>
        <div ref={secondRef} className="sm:h-[40vh] h-[20vh]  "></div>
        <div ref={thirdRef} className="sm:h-[40vh] h-[20vh] "></div>
      </motion.div> */}
      {/* <motion.div ref={contactRef} className=" h-[0vh]  "></motion.div> */}
    </div>
  );
};

export default AboutSection;
