import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

import { useRef, useState } from "react";
import { MdOutlineLocalPhone } from "react-icons/md";

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
          className={`flex flex-row  rounded-2xl items-center justify-center gap-8  px-2 py-4 sm:px-10 backdrop-blur-md sm:py-5 overflow-hidden font-normal border border-base-content border-opacity-0 hover:border-opacity-0  bg-base-300 bg-opacity-70  `}
          onClick={openSidebar}
        >
          <motion.span className="text-center tracking-widest align-baseline pt-1 text-2xl z-20 opacity-80 mix-blend-difference">
            Contact
          </motion.span>
          <span className="text-3xl z-20 mix-blend-difference opacity-80">
            <MdOutlineLocalPhone />
          </span>
          {/* <motion.span className="z-10 tracking-wide max-sm:hidden mix-blend-difference">
            CONTACT
          </motion.span> */}
          <AnimatePresence>
            {hovering === 3 && (
              <motion.div
                animate={hovering === 3 ? { scale: 25 } : { scale: 1 }}
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
