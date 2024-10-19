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
        delay: 0.85,
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
      y: "70%",
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",

      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        delay: 1,
        duration: 0.8,
      },
    },
    exit: {
      y: "80%",
      opacity: 0,
      transition: {
        ease: "anticipate",
        duration: 0.25,
      },
    },
  };

  return (
    <motion.div className="fixed top-0 w-full h-full -z-20 ">
      <motion.div
        style={{ y: moveY }}
        className="flex flex-col items-stretch w-full h-full justify-evenly sm:justify-end"
      >
        <div className="flex items-center sm:grow pt-[10vh]">
          {/* <AnimatePresence> */}
          <Testimonials />
          {/* </AnimatePresence> */}
        </div>

        <div className="flex flex-col items-end justify-end w-full gap-4 px-6 pb-8 text-right  sm:px-10 md:px-16 lg:px-24 xl:px-24 sm:pb-10 md:pb-12 lg:pb-16">
          <motion.h1
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="text-4xl font-black tracking-wider uppercase sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Contact
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contactInfoVariants}
            className="flex flex-col items-end justify-between w-full text-lg tracking-wider opacity-75 sm:text-2xl max-w-screen-2xl gap-y-4 lg:text-2xl xl:text-3xl 2xl:text-4xl sm:flex-row sm:items-center font-extralight text-base-content"
          >
            <h1 className="cursor-pointer sm:py-6 sm:px-4 xl:px-6 ">
              +40 744 540 583
            </h1>

            <div className="h-3 w-3 rounded-xl bg-secondary " />
            <h1 className="cursor-pointer sm:py-6 sm:px-4 xl:px-6 ">
              tractari@autones.ro
            </h1>
            <div className="h-3 w-3 rounded-xl bg-secondary " />
            <h1 className="cursor-pointer sm:py-6 sm:px-4 xl:px-6 ">
              facebook
            </h1>
            <div className="h-3 w-3 rounded-xl bg-secondary " />
            <h1 className="cursor-pointer sm:py-6 sm:px-4 xl:px-6 ">
              instagram
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
