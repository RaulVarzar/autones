import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";
const variants = {
  initial: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 2 },
  },
};

const Socials = () => {
  const [hovering, setHovering] = useState(false);
  return (
    <motion.div className="grid items-stretch h-full grid-cols-2 gap-4 py-3 md:py-6 xl:py-8 justify-stretch ">
      <motion.div
        initial={{ opacity: 0, x: "50px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring", duration: 1, bounce: 0.3 }}
        onHoverStart={() => setHovering(1)}
        onHoverEnd={() => setHovering(null)}
        className="w-full h-full "
      >
        <motion.button
          className={`flex relative h-full max-sm:items-center flex-row justify-stretch items-stretch transition-colors duration-300 overflow-hidden  w-full rounded-xl gap-1 gap-y-3  font-normal p-4 md:p-6  text-base-content ${
            hovering === 1 ? "bg-violet-800" : "bg-neutral-content"
          }`}
        >
          {/* <motion.span className="text-2xl sm:hidden opacity-80">
            <FaSquareInstagram />
          </motion.span> */}
          <div className="flex flex-col items-start justify-center w-10/12 ">
            <motion.span
              layout
              transition={{ layout: { delay: 0 } }}
              animate={hovering != 1 ? { scale: 1 } : { scale: 1.5 }}
              className={` text-lg tracking-wide  origin-left  ${
                hovering === 1 ? "opacity-100 " : "opacity-70 "
              }`}
            >
              instagram
            </motion.span>
            <AnimatePresence mode="popLayout">
              {hovering != 1 && (
                <motion.span
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    mass: 0.3,
                    stiffness: 120,
                  }}
                  className="text-2xl font-normal leading-none tracking-wide max-sm:hidden"
                >
                  @autones
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center h-full max-sm:hidden ">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={
                hovering === 1 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
              }
              transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
              className="text-4xl"
            >
              <IoIosArrowRoundForward />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "50px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, type: "spring", duration: 1, bounce: 0.3 }}
        onHoverStart={() => setHovering(2)}
        onHoverEnd={() => setHovering(null)}
        className="w-full h-full grow "
      >
        <motion.button
          className={`flex relative max-sm:items-center h-full flex-col transition-colors duration-300 overflow-hidden justify-center w-full rounded-xl gap-1 gap-y-3  font-normal p-4 md:p-6  text-base-content ${
            hovering === 2 ? "bg-secondary" : "bg-neutral-content"
          }`}
        >
          <motion.span className="text-2xl sm:hidden opacity-80">
            <FaSquareFacebook />
          </motion.span>
          <motion.div
            layout="position"
            // transition={{ layout: { delay: 0 } }}
            animate={hovering != 2 ? { scale: 1, x: 0 } : { scale: 1.5, x: 25 }}
            className={`text-lg font-light  tracking-wide transition-opacity leading-3 ${
              hovering === 2 ? "opacity-100" : "opacity-70"
            }`}
          >
            facebook
          </motion.div>
          <AnimatePresence mode="popLayout">
            {hovering != 2 && (
              <motion.span
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 0.3,
                  stiffness: 120,
                }}
                className="w-full text-2xl font-normal leading-none tracking-wide text-left max-sm:hidden line-clamp-1"
              >
                Autones Tractări
              </motion.span>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={
              hovering === 2 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
            }
            transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
            className="absolute top-0 flex items-center h-full my-auto text-4xl max-sm:hidden right-3 "
          >
            <IoIosArrowRoundForward />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Socials;
