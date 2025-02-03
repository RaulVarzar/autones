import { AnimatePresence, delay, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
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
    <motion.div className="grid items-stretch h-full grid-cols-2 gap-3 justify-stretch ">
      <Button
        title={"instagram"}
        subTitle={"@autones"}
        index={1}
        hovering={hovering}
        setHovering={setHovering}
      />
      <Button
        title={"facebook"}
        subTitle={"Autones Tractari"}
        index={2}
        hovering={hovering}
        setHovering={setHovering}
      />
    </motion.div>
  );
};

export default Socials;

const Arrow = ({ visible }) => {
  return (
    <div className="flex items-center justify-center h-full max-sm:hidden ">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={visible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ type: "spring", duration: 0.45, bounce: 0.2 }}
        className="text-4xl"
      >
        <IoIosArrowRoundForward />
      </motion.div>
    </div>
  );
};

const Button = ({ title, subTitle, index, hovering, setHovering }) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: "50px" }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.3 + index / 111,
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      onHoverStart={() => setHovering(index)}
      onHoverEnd={() => setHovering(null)}
      className=" min-h-20 md:min-h-24 flex relative h-full max-sm:items-center flex-row justify-stretch items-stretch overflow-hidden  w-full rounded-xl gap-1 gap-y-3  font-normal px-4 md:px-6  text-base-content"
      style={{ backdropFilter: "brightness(120%)", borderRadius: "10px" }}
      whileHover={{
        backdropFilter: "brightness(160%)",
        transition: { delay: 0 },
      }}
    >
      <div className="flex flex-col items-start justify-center w-10/12 ">
        <AnimatePresence mode="popLayout">
          {hovering != index && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                delay: 0,
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={` text-lg tracking-wide  origin-left  ${
                hovering === index ? "opacity-100 " : "opacity-70 "
              }`}
            >
              {title}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.span
          layout
          transition={{
            delay: 0,
            duration: 0.25,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-2xl font-normal leading-none tracking-wide max-sm:hidden"
        >
          {subTitle}
        </motion.span>
      </div>
      <Arrow visible={hovering === index} />
    </motion.button>
  );
};
