import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

import { MdOutlineLocalPhone } from "react-icons/md";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";
import { RiFacebookBoxLine } from "react-icons/ri";
import { useRef, useState } from "react";

const Navlinks = ({ openSidebar }) => {
  const [hovering, setHovering] = useState(null);
  const containerRef = useRef();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  const translateX = useTransform(x, [0, 204], [-10, 204]);
  const translateY = useTransform(y, [0, 94], [0, 94]);

  return (
    <motion.div className="flex flex-row items-center gap-1">
      <motion.div className="flex flex-row items-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: "-150px", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: "easeInOut" }}
          onHoverStart={() => setHovering(1)}
          onHoverEnd={() => setHovering(null)}
        >
          <motion.button
            initial={{ scale: 1 }}
            animate={hovering === 1 ? { scale: 1.25 } : { scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`py-1 overflow-hidden font-normal text-base-content px-3`}
          >
            <motion.div
              layout
              className="text-xl font-semibold tracking-wider max-sm:hidden"
            >
              {/* <FaSquareInstagram /> */} MENU
            </motion.div>
          </motion.button>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: "-150px", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.85, ease: "easeInOut" }}
          onHoverStart={() => setHovering(2)}
          onHoverEnd={() => setHovering(null)}
        >
          <motion.button
            initial={{ scale: 1 }}
            animate={hovering === 2 ? { scale: 1.25 } : { scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`py-1 overflow-hidden font-normal text-base-content px-3 `}
          >
            <motion.div layout className="text-3xl ">
              <FaSquareFacebook />
            </motion.div>
          </motion.button>
        </motion.div> */}
      </motion.div>

      <motion.div
        className="relative p-1"
        ref={containerRef}
        onMouseMove={handleMouse}
      >
        <motion.button
          onHoverStart={() => setHovering(3)}
          onHoverEnd={() => setHovering(null)}
          initial={{ opacity: 0, y: "-150px" }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, delay: 1, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.04, transition: { duration: 0.3, delay: 0 } }}
          className={`flex rounded-full flex-row items-center justify-center gap-2  px-2 py-4 sm:px-3.5 sm:py-6 overflow-hidden font-normal border-2  text-base-content bg-neutral-content bg-opacity-15  `}
          onClick={openSidebar}
        >
          <motion.div className="z-10 flex flex-row gap-1 sm:gap-1.5 text-lg font-semibold tracking-wider mix-blend-difference ">
            {/* <MdOutlineLocalPhone /> */}
            <span className="w-1 h-1 rounded-full bg-base-content"></span>
            <span className="w-1 h-1 rounded-full bg-base-content"></span>
            <span className="w-1 h-1 rounded-full bg-base-content"></span>
          </motion.div>

          {/* <motion.span className="z-10 tracking-wide max-sm:hidden mix-blend-difference">
            CONTACT
          </motion.span> */}
          <AnimatePresence>
            {hovering === 3 && (
              <motion.div
                animate={hovering === 3 ? { scale: 20 } : { scale: 1 }}
                style={{ x: translateX, y: translateY }}
                exit={{ scale: 0.1, transition: { duration: 0.1 } }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 h-6 rounded-full bg-base-content aspect-square"
              ></motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Navlinks;
