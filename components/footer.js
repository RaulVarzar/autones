"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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

const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.6 end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.8, 1],
    ["10%", "20%", "100%"]
  );

  const isInView = useInView(ref, { margin: "0% 0% -15% 0%" });

  return (
    <div
      ref={ref}
      className="relative  flex  z-40 flex-col items-center justify-center w-full  gap-12 px-4 py-4 mx-auto bg-accent md:px-24 lg:px-48 md:py-16 xl:py-24"
    >
      <motion.div
        // style={{ scale, y, opacity }}
        variants={variants}
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col justify-start w-full gap-6 mb-8 gap-y-8 md:flex-row md:gap-12 h-fit "
      >
        <div className="flex flex-col w-full md:items-end lg:w-1/2 max-md:text-center ">
          <span className="text-3xl font-black leading-3 tracking-wider uppercase max-md:text-center md:text-9xl">
            Autones
          </span>
          <div className="md:text-right lg:max-w-md opacity-60">
            <p className="mt-3 text-md md:text-lg xl:text-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-2 text-md md:text-lg xl:text-xl">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full py-2 pt-8 space-y-3 text-lg h-fit lg:w-1/2 md:space-y-4 lg:space-y-6 ">
          <div className="flex flex-row items-center gap-4 md:gap-6 max-md:mx-auto max-md:w-fit">
            {/* <span className="text-2xl leading-none max-md:text-center opacity-80">
              <FaPhoneAlt />
            </span> */}
            <a
              href="tel:0744-765-543"
              aria-label="Our phone"
              title="Our phone"
              className="pb-1 text-xl font-medium tracking-wide transition-colors duration-300 border-b-4 border-secondary lg:text-3xl"
            >
              0744 765 543
            </a>
          </div>
          <div className="flex flex-row items-center gap-4 md:gap-6 max-md:mx-auto max-md:w-fit">
            {/* <span className="text-2xl leading-none max-md:text-center opacity-80">
              <FaEnvelope />
            </span> */}
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="pb-1 text-xl font-medium tracking-wide transition-colors duration-300 border-b-4 border-secondary lg:text-3xl"
            >
              info@lorem.mail
            </a>
          </div>
          <div className="flex flex-row items-center gap-4 md:gap-6 max-md:mx-auto max-md:w-fit">
            {/* <span className="text-2xl leading-none max-md:text-center opacity-80">
              <FaLocationDot />
            </span> */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adresa"
              title="Adresa noastra"
              className="pb-1 text-xl font-medium tracking-wide transition-colors duration-300 border-b-4 border-secondary lg:text-3xl"
            >
              Strada bla bla bla, nr 32
            </a>
          </div>
          <div className="flex items-center mt-1 space-x-3 max-md:mx-auto w-fit md:space-x-4">
            <a
              href="/"
              className="text-2xl transition-opacity duration-300 opacity-70 hover:opacity-100 md:text-4xl "
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a
              href="/"
              className="text-2xl transition-opacity duration-300 opacity-70 hover:opacity-100 md:text-4xl "
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
