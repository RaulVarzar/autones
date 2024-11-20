import Testimonials from "components/testimonials/testimonials";
import { AnimatePresence, motion } from "framer-motion";

const Contact = ({ moveY }) => {
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
    <>
      <motion.div
        style={{ y: moveY }}
        className="flex flex-col items-stretch w-full h-full justify-evenly sm:justify-end"
      >
        <div className="flex items-center sm:grow h-fit  sm:pt-[10vh] py-4">
          {/* <AnimatePresence> */}
          <Testimonials />
          {/* </AnimatePresence> */}
        </div>

        <div className="flex flex-col items-end justify-end w-full gap-1 px-6 pb-8 text-right md:gap-2 sm:px-10 md:px-16 lg:px-24 xl:px-24 sm:pb-10 md:pb-12 lg:pb-16">
          <motion.h1
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="text-5xl font-black tracking-wider uppercase sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Contact
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contactInfoVariants}
            className="flex flex-col items-end justify-end w-full overflow-hidden sm:gap-1 lg:gap-3 xl:gap-8 lg:flex-row-reverse sm:justify-start "
          >
            <ContactLink
              title={"phone"}
              content={"+40 744 540 583"}
              link={""}
            />
            <ContactLink
              title={"e-mail"}
              content={"tractari@autones.ro"}
              link={""}
            />
            <ContactLink title={"facebook"} content={"Facebook"} link={""} />
            <ContactLink title={"instagram"} content={"Instagram"} link={""} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;

const ContactLink = ({ link, content }) => {
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

  return (
    <motion.a
      href={link}
      className="flex flex-col items-start sm:px-6 py-1 sm:py-5 transition-transform duration-500 rounded-xl w-fit hover:scale-105 hover:-translate-y-0.5"
    >
      <motion.h1
        variants={childrenVariants}
        className="text-xl font-light tracking-wide transition-opacity duration-300 cursor-pointer sm:text-2xl md:text-3xl xl:text-4xl opacity-70 hover:opacity-100 "
      >
        {content}
      </motion.h1>
    </motion.a>
  );
};
