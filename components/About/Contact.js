import Testimonials from "components/testimonials/testimonials";
import { AnimatePresence, motion } from "framer-motion";
import { MdMessage } from "react-icons/md";

const Contact = ({ showTestimonials, showContact }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "10%",
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.8,
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
      y: "10%",
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",

      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2,
        duration: 0.8,
      },
    },
    exit: {
      y: "80%",
      opacity: 0,
      transition: {
        ease: "anticipate",
        duration: 0.25,
        delay: 0.1,
      },
    },
  };
  return (
    <>
      <div className="fixed top-0 -z-20 w-full h-full">
        <AnimatePresence>
          <motion.div className="flex flex-col justify-evenly  sm:justify-end items-stretch w-full h-full">
            <motion.div className="flex items-center sm:grow">
              <AnimatePresence>
                {showTestimonials && <Testimonials />}
              </AnimatePresence>
            </motion.div>

            <div className=" text-right  w-full flex items-end gap-4 flex-col justify-end px-6 sm:px-10 md:px-16 lg:px-24 xl:px-24 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
              <motion.h1
                initial="hidden"
                animate={showContact ? "visible" : "exit"}
                exit="exit"
                variants={variants}
                className="text-6xl  sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider"
              >
                Contact
              </motion.h1>

              <motion.div
                initial="hidden"
                animate={showContact ? "visible" : "exit"}
                exit="exit"
                variants={contactInfoVariants}
                className="text-xl sm:text-2xl w-full max-w-screen-2xl gap-y-4  lg:text-2xl xl:text-3xl 2xl:text-4xl items-end justify-between  flex flex-col sm:flex-row sm:items-center  font-extralight tracking-wider text-base-content opacity-75"
              >
                <h1 className="sm:py-6 sm:px-4  2xl:px-8 cursor-pointer ">
                  +40 744 540 583
                </h1>

                <div className="h-0.5 w-1/2 sm:w-10 bg-base-content opacity-20" />
                <h1 className="sm:py-6 sm:px-4 2xl:px-8 cursor-pointer ">
                  tractari@autones.ro
                </h1>
                <div className="h-0.5 w-1/2 sm:w-10 bg-base-content opacity-20" />
                <h1 className="sm:py-6 sm:px-4 2xl:px-8 cursor-pointer ">
                  facebook
                </h1>
                <div className="h-0.5 w-1/2 sm:w-10 bg-base-content opacity-20" />
                <h1 className="sm:py-6 sm:px-4 2xl:px-8 cursor-pointer ">
                  instagram
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Contact;
