import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiInstagramLogoThin } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

const Socials = () => {
  const [hovering, setHovering] = useState(false);
  return (
    <motion.div className="flex flex-row items-center gap-3  justify-stretch">
      <motion.div
        initial={{ opacity: 0, y: "-150px", scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0, ease: "easeInOut" }}
        onHoverStart={() => setHovering(1)}
        onHoverEnd={() => setHovering(null)}
        className="w-full h-full min-w-72"
      >
        <motion.button
          layout
          className={`flex relative h-full flex-col transition-colors duration-300 overflow-hidden justify-center w-full rounded-xl gap-1  font-normal p-4 md:p-6  text-base-content ${
            hovering === 1 ? "bg-accent" : "bg-base-300"
          }`}
        >
          <motion.span
            layout
            transition={{ layout: { delay: 0 } }}
            animate={hovering != 1 ? { scale: 1, x: 0 } : { scale: 1.5, x: 25 }}
            className={`text-lg font-light tracking-wide transition-opacity leading-none ${
              hovering === 1 ? "opacity-100" : "opacity-70"
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
                className="text-2xl font-normal tracking-wide leading-none"
              >
                @autones
              </motion.span>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={
              hovering === 1 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
            }
            transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
            className="absolute right-3 top-0 flex items-center my-auto h-full  text-4xl "
          >
            <IoIosArrowRoundForward />
          </motion.div>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-150px", scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.85, ease: "easeInOut" }}
        onHoverStart={() => setHovering(2)}
        onHoverEnd={() => setHovering(null)}
        className="w-full h-full min-w-72"
      >
        <motion.button
          transition={{ delay: 0, ease: "easeInOut" }}
          layout
          className={`flex relative h-full flex-col transition-colors duration-300 overflow-hidden justify-center w-full rounded-xl gap-1  font-normal p-4 md:p-6 text-base-content ${
            hovering === 2 ? "bg-neutral" : "bg-base-300"
          }`}
        >
          <motion.span
            layout
            transition={{ layout: { delay: 0 } }}
            animate={hovering != 2 ? { scale: 1, x: 0 } : { scale: 1.5, x: 25 }}
            className={`text-lg font-light tracking-wide transition-opacity leading-none ${
              hovering === 2 ? "opacity-100" : "opacity-70"
            }`}
          >
            facebook
          </motion.span>
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
                className="text-2xl font-normal tracking-wide leading-none text-left w-full line-clamp-1"
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
            className="absolute right-3 top-0 flex items-center my-auto h-full  text-4xl "
          >
            <IoIosArrowRoundForward />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Socials;
