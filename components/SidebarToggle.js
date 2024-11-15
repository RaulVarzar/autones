import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import SidebarContent from "./sidebar/SidebarContent";

const SidebarToggle = ({ colored }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-md"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "-150px" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, delay: 1, ease: "easeInOut" },
        }}
        style={
          sidebarOpen ? { borderRadius: "16px" } : { borderRadius: "12px" }
        }
        className={` fixed flex flex-col  items-end top-3 right-3 sm:top-4 sm:right-4 lg:top-8 lg:right-8 z-50 transition-colors duration-300  overflow-hidden  font-normal  ${
          !sidebarOpen && "cursor-pointer"
        } ${
          colored && sidebarOpen
            ? "bg-accent"
            : colored && !sidebarOpen
            ? "backdrop-brightness-110"
            : !colored && "bg-base-300"
        } `}
        layout
        transition={{
          layout: { duration: 0.6, ease: [0.25, 0, 0.25, 1] },
        }}
      >
        <Button
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          colored={colored}
        />
        {sidebarOpen && <SidebarContent />}
      </motion.div>
    </>
  );
};

export default SidebarToggle;

const Button = ({ toggleSidebar, colored, sidebarOpen }) => {
  return (
    <motion.div
      layout
      onClick={toggleSidebar}
      transition={{
        layout: { duration: 0.6, ease: [0.25, 0, 0.25, 1] },
      }}
      className={`flex flex-row items-center h-full gap-2  md:gap-4  w-fit justify-end xl:gap-8   px-5 sm:px-8 ${
        colored ? " text-white" : "text-base-content opacity-70"
      }`}
    >
      <AnimatePresence mode="popLayout">
        {!sidebarOpen && (
          <motion.span
            layout
            initial={{ opacity: 0, x: "-10px" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.35,
                delay: 0.25,
                ease: [0.25, 0, 0.25, 1],
              },
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0, duration: 0.4 },
            }}
            className="z-20 h-full pt-1 text-xl font-medium tracking-widest text-center align-baseline max-sm:hidden sm:text-2xl "
          >
            Contact
          </motion.span>
        )}
      </AnimatePresence>
      <motion.span
        layout
        className="z-20 flex flex-col items-end h-full gap-2 py-6 text-2xl cursor-pointer md:py-8 sm:text-3xl"
      >
        <motion.span
          animate={sidebarOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          className={`w-9 h-0.5 rounded-full ${
            colored ? " bg-white" : "bg-base-content opacity-80"
          }`}
        ></motion.span>
        <motion.span
          animate={sidebarOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          className={`h-0.5 rounded-full bg-white ${
            sidebarOpen ? "w-9" : "w-7"
          } ${colored ? " bg-white" : "bg-base-content opacity-80"}`}
        ></motion.span>
      </motion.span>
    </motion.div>
  );
};
