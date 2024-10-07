import {
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { MdOutlineLocalPhone } from "react-icons/md";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";
import { RiFacebookBoxLine } from "react-icons/ri";
import { useState } from "react";

const Navlinks = ({ openSidebar }) => {
  const [hovering, setHovering] = useState(null);

  return (
    <LayoutGroup>
      <motion.div className="flex flex-row items-center gap-6">
        <motion.div className="flex flex-row items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: "-150px", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            onHoverStart={() => setHovering(1)}
            onHoverEnd={() => setHovering(null)}
          >
            <motion.button
              initial={{ scale: 1 }}
              animate={hovering === 1 ? { scale: 1.25 } : { scale: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`py-1 overflow-hidden font-normal text-base-content px-3`}
            >
              <motion.div layout className="text-3xl ">
                <FaSquareInstagram />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "-150px", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.65, ease: "easeInOut" }}
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
          </motion.div>
        </motion.div>

        <motion.button
          onHoverStart={() => setHovering(3)}
          onHoverEnd={() => setHovering(null)}
          initial={{ opacity: 0, y: "-150px", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
          className={`flex rounded-full flex-row items-center justify-center gap-2 px-8 py-4 overflow-hidden font-normal border-2  text-base-content bg-base-300 border-neutral-content ${
            hovering === 3 ? "bg-opacity-100" : "bg-opacity-40"
          }`}
          onClick={openSidebar}
        >
          <motion.div className="text-xl ">
            <MdOutlineLocalPhone />
          </motion.div>

          <motion.span className="tracking-wide max-sm:hidden">
            CONTACT
          </motion.span>
        </motion.button>
      </motion.div>
    </LayoutGroup>
  );
};

export default Navlinks;
