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
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
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

        <div className="flex flex-col  items-end  border justify-end w-full gap-4 px-6 pb-8 text-right md:gap-4 lg:gap-8 xl:gap-10 sm:px-10 md:px-16 lg:px-24 xl:px-24 sm:pb-10 md:pb-12 lg:pb-16">
          <motion.h1
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="text-4xl font-black  tracking-wider uppercase sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Contact
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contactInfoVariants}
            className="flex flex-col items-end  overflow-hidden  w-full justify-end gap-6 md:gap-8 lg:gap-10  sm:flex-row sm:items-end "
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
            <ContactLink
              title={"facebook"}
              content={"Autones Tractari"}
              link={""}
            />
            <ContactLink title={"instagram"} content={"@autones"} link={""} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

const ContactLink = ({ title, link, content }) => {
  const childrenVariants = {
    hidden: { y: "100%", filter: "blur(10px)" },
    visible: {
      y: "0%",
      filter: "blur(0px)",
      transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.7 },
    },
    exit: { y: "80%" },
  };

  return (
    <motion.a
      href={link}
      className="flex flex-col rounded-xl py-5 px-6 w-fit items-start  "
    >
      <motion.h1
        variants={childrenVariants}
        className="cursor-pointer text-2xl md:text-3xl xl:text-4xl tracking-wide font-medium"
      >
        {content}
      </motion.h1>
      <motion.h3 className="font-extralight text-base opacity-6 text-secondary brightness-150">
        {title}
      </motion.h3>
    </motion.a>
  );
};
