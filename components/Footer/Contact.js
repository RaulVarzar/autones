"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaPhoneFlip, FaFacebookF } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "40%",
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.75,
        delay: 1,
      },
    },
    exit: {
      y: "70%",
      opacity: 0,
      transition: {
        ease: "anticipate",
        duration: 0.25,
        delay: 0,
      },
    },
  };

  const contactInfoVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "anticipate",
        duration: 0.25,
      },
    },
  };

  return (
    <motion.div
      style={{}}
      className="flex flex-col w-full items-stretch h-full py-8 overflow-hidden justify-evenly sm:justify-end bg-accent-conten md:py-12 xl:py-16"
    >
      <div className="flex flex-col items-end justify-end w-full gap-1 px-6 pb-8 text-right md:gap-2 sm:px-10 md:px-16  xl:px-24 sm:pb-10 md:pb-12 lg:pb-16">
        {/* <motion.h1
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className="text-5xl font-black tracking-wider uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Contact
        </motion.h1> */}

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={contactInfoVariants}
          className="flex flex-col items-end  justify-end w-fit xl:w-full gap-2.5 overflow-hidden sm:gap-2 xl:gap-3 2xl:gap-8 xl:flex-row-reverse sm:justify-start "
        >
          <ContactLink
            title={"phone"}
            content={"+40 744 540 583"}
            link={""}
            id={0}
          >
            <FaPhoneFlip />
          </ContactLink>
          <ContactLink
            title={"e-mail"}
            content={"tractari@autones.ro"}
            link={""}
            id={1}
          >
            <FaEnvelope />
          </ContactLink>
          <ContactLink title={"facebook"} content={"Facebook"} link={""} id={2}>
            <FaFacebookF />
          </ContactLink>
          <ContactLink
            title={"instagram"}
            content={"Instagram"}
            link={""}
            id={3}
          >
            <FaInstagram />
          </ContactLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

const ContactLink = ({ link, content, children, id }) => {
  const childrenVariants = {
    hidden: { y: "200%", filter: "blur(8px)", opacity: 0 },
    visible: {
      y: "0%",
      filter: "blur(0px)",
      transition: { ease: [0.25, 0.1, 0.25, 1], duration: 1 },
      opacity: 1,
    },
    exit: { y: "80%" },
  };

  const hoverVariants = {
    rest: {
      y: "102%",
      transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.25 },
    },
    hover: {
      y: 0,
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.3,
      },
    },
  };

  return (
    <motion.a href={link} className="max-xl:w-full w-fit group 2xl:w-full">
      <motion.div
        whileHover="hover"
        animate="rest"
        className="relative flex flex-row items-center justify-end gap-4 px-4 py-3 overflow-hidden transition-transform duration-500 2xl:px-6 sm:py-5"
      >
        <motion.h1
          variants={childrenVariants}
          initial={{ y: "200%", filter: "blur(6px)" }}
          animate={{ y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.75,
            delay: 1.8 + id * 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-2xl font-light tracking-wide transition-opacity duration-300 cursor-pointer sm:text-2xl md:text-3xl xl:text-3xl opacity-70 group-hover:opacity-100 "
        >
          {content}
        </motion.h1>
        <motion.span
          initial={{ x: "50%", filter: "blur(4px)", opacity: 0 }}
          animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{
            duration: 0.65,
            delay: 2.2 + id * 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-3xl"
        >
          {children}
        </motion.span>

        <motion.span
          variants={hoverVariants}
          className="absolute top-0 left-0 w-full h-full -z-10 bg-primary"
        />
        <motion.span
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.4 + id * 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-base-content bg-opacity-15"
        />
      </motion.div>
    </motion.a>
  );
};
