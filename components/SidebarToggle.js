import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import Sidebar from "./sidebar/sidebar";
import { TfiClose } from "react-icons/tfi";

const SidebarToggle = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hovering, setHovering] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  const translateX = useTransform(x, [0, 204], [-10, 204]);
  const translateY = useTransform(y, [0, 94], [0, 94]);
  const toggleSidebar = () => setSidebarOpen((current) => !current);
  return (
    <motion.div
      onMouseMove={handleMouse}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(null)}
      initial={{ opacity: 0, y: "-150px" }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.4, delay: 1, ease: "easeInOut" },
      }}
      style={sidebarOpen ? { borderRadius: "16px" } : { borderRadius: "12px" }}
      className={`flex flex-col items-end  justify-center overflow-hidden relative font-normal  ${
        sidebarOpen ? "bg-neutral p-4" : "bg-base-300 p-2 cursor-pointer"
      } `}
      layout
    >
      <motion.div
        layout
        onClick={toggleSidebar}
        className="flex flex-row px-3 h-full py-2.5 sm:px-6 sm:py-3 gap-8"
      >
        <motion.span
          layout
          className="text-center h-full tracking-widest align-baseline pt-1 text-2xl z-20 opacity-80 mix-blend-difference"
        >
          {!sidebarOpen && "Contact"}
        </motion.span>
        <motion.span
          layout
          className="text-3xl cursor-pointer  z-20 mix-blend-difference opacity-80"
        >
          {!sidebarOpen ? <MdOutlineLocalPhone /> : <TfiClose />}
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {hovering && !sidebarOpen && (
          <motion.div
            animate={hovering ? { scale: 25 } : { scale: 1 }}
            style={{ x: translateX, y: translateY }}
            exit={{ scale: 0.1, transition: { duration: 0.1 } }}
            transition={{ duration: 0.4 }}
            onClick={toggleSidebar}
            className="absolute top-0 -z-0 left-0 h-6 rounded-full bg-neutral-content aspect-square"
          ></motion.div>
        )}
      </AnimatePresence>
      <Sidebar open={sidebarOpen} />
    </motion.div>
  );
};

export default SidebarToggle;
