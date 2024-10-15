import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useState } from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import Sidebar from "./sidebar/sidebar";
import { TfiClose } from "react-icons/tfi";

const SidebarToggle = ({ colored }) => {
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
    <>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.35, delay: 0.1 } }}
            onClick={toggleSidebar}
            className="fixed inset-0 z-10 bg-neutral-950/70 backdrop-blur-md"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        // onMouseMove={handleMouse}
        // onHoverStart={() => setHovering(true)}
        // onHoverEnd={() => setHovering(null)}
        initial={{ opacity: 0, y: "-150px" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, delay: 1, ease: "easeInOut" },
        }}
        style={
          sidebarOpen ? { borderRadius: "16px" } : { borderRadius: "12px" }
        }
        className={`flex fixed top-3 right-3 sm:top-4 sm:right-4 lg:top-8 lg:right-8 z-50  flex-col items-end  justify-center overflow-hidden  font-normal  ${
          sidebarOpen ? " p-4" : "p-2 cursor-pointer"
        } ${
          colored && sidebarOpen
            ? "bg-accent"
            : colored && !sidebarOpen
            ? "bg-secondary"
            : !colored && "bg-base-200"
        } `}
        layout
      >
        <motion.div
          layout
          onClick={toggleSidebar}
          className={`flex flex-row t items-center h-full gap-2 px-3 py-1 md:gap-4 xl:gap-8 sm:px-6 sm:py-3 ${
            colored ? " text-white" : "text-base-content"
          }`}
        >
          <motion.span
            layout
            className="z-20 h-full pt-1 text-xl font-medium tracking-widest text-center align-baseline sm:text-2xl opacity-80 mix-blend-difference"
          >
            {!sidebarOpen && "Contact"}
          </motion.span>
          <motion.span
            layout
            className="z-20 flex flex-col items-end h-full gap-2 py-2 text-2xl cursor-pointer sm:text-3xl mix-blend-difference opacity-80"
          >
            {/* {!sidebarOpen ? <MdOutlineLocalPhone /> : <TfiClose />} */}
            <motion.span
              animate={
                sidebarOpen ? { rotate: 225, y: 5 } : { rotate: 0, y: 0 }
              }
              className={`w-9 h-0.5 rounded-full ${
                colored ? " bg-white" : "bg-base-content"
              }`}
            ></motion.span>
            <motion.span
              animate={
                sidebarOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
              }
              className={`h-0.5 rounded-full bg-base-content ${
                sidebarOpen ? "w-9" : "w-7"
              } ${colored ? " bg-white" : "bg-base-content"}`}
            ></motion.span>
          </motion.span>
        </motion.div>

        <Sidebar open={sidebarOpen} />
      </motion.div>
    </>
  );
};

export default SidebarToggle;
