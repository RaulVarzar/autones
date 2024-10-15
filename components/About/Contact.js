import Testimonials from "components/testimonials/testimonials";
import { AnimatePresence, motion } from "framer-motion";
import { MdMessage } from "react-icons/md";

const Contact = ({ showContent }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "50%",
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.5,
        damping: 6,
        delay: 0.8,
      },
    },
    exit: {
      y: "50%",
      opacity: 0,
      transition: {
        ease: "anticipate",
        duration: 0.4,
      },
    },
  };

  const contactInfoVariants = {
    hidden: {
      opacity: 0,
      y: "50%",
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.5,
        damping: 6,
        delay: 1,
      },
    },
    exit: {
      y: "50%",
      opacity: 0,
      transition: {
        ease: "anticipate",
        duration: 0.4,
      },
    },
  };
  return (
    <>
      <div className="fixed top-0 -z-20 w-full h-full  ">
        <AnimatePresence>
          {showContent && (
            <motion.div className="flex flex-col justify-end items-stretch w-full h-full">
              <motion.div className="flex items-center grow">
                <Testimonials />
              </motion.div>
              <div className=" text-right  w-full flex items-end gap-4 flex-col justify-end px-6 sm:px-10 md:px-16 lg:px-24 xl:px-24 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  className="text-5xl  sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider"
                >
                  Contact
                </motion.h1>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={contactInfoVariants}
                  className="text-lg sm:text-xl bg-accent rounded-lg md:text-2xl lg:text-3xl w-fit flex flex-row items-center  font-light text-base-content opacity-75"
                >
                  <h1 className="py-6 px-6 md:px-8 cursor-pointer">
                    +40 744 840 417
                  </h1>

                  <div className="w-0.5 h-full bg-secondary " />
                  <h1 className="py-6 px-6 md:px-8 cursor-pointer">
                    tractari@autones.ro
                  </h1>
                  <div className="w-0.5 h-full bg-secondary " />
                  <h1 className="py-6 px-6 md:px-8 cursor-pointer">facebook</h1>
                  <div className="w-0.5 h-full bg-secondary " />
                  <h1 className="py-6 px-6 md:px-8 cursor-pointer">
                    instagram
                  </h1>
                  <div className="w-0.5 h-full bg-secondary " />
                  <span className=" py-6 px-10 md:px-12 text-4xl cursor-pointer">
                    <MdMessage />
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Contact;
