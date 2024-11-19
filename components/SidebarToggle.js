"use client";
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
            className="fixed inset-0 z-40 bg-neutral-950/70 backdrop-blur-md"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className={` fixed flex flex-col bg-opacity-0 overflow-hidden items-end top-3 right-3 sm:top-4 sm:right-4 lg:top-8 lg:right-8 z-50 transition-colors duration-300  font-normal  ${
          !sidebarOpen && "cursor-pointer"
        } ${
          colored && sidebarOpen
            ? "bg-accent"
            : colored && !sidebarOpen
            ? "backdrop-brightness-110"
            : !colored && "bg-base-300"
        } `}
      >
        <Button
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          colored={colored}
        />
      </motion.div>
      <SidebarContent visible={sidebarOpen} />
    </>
  );
};

export default SidebarToggle;

const Button = ({ toggleSidebar, colored, sidebarOpen }) => {
  return (
    <motion.div
      onClick={toggleSidebar}
      className={`flex cursor-pointer relative z-50 flex-row items-center h-full gap-2  md:gap-4  w-fit justify-end xl:gap-8   px-5 py-5 sm:px-8 ${
        colored ? " text-white" : "text-base-content opacity-70"
      }`}
    >
      <motion.span
        style={sidebarOpen && { opacity: 0.75 }}
        className="z-20 flex flex-col items-end h-full gap-2 text-2xl transition-opacity duration-500 cursor-pointer sm:text-3xl"
      >
        <motion.span
          animate={
            sidebarOpen
              ? {
                  rotate: 45,
                  y: 5,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                    ease: [0, 0.4, 0, 1],
                  },
                }
              : {
                  rotate: 0,
                  y: 0,
                  transition: { delay: 0.2, ease: [0, 0.4, 0, 1] },
                }
          }
          className={`w-10 sm:w-12 h-0.5 rounded-full bg-white ${
            colored ? " bg-white" : "bg-base-content "
          }`}
        ></motion.span>
        <motion.span
          animate={
            sidebarOpen
              ? {
                  rotate: -45,
                  y: -5,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                    ease: [0, 0.4, 0, 1],
                  },
                }
              : {
                  rotate: 0,
                  y: 0,
                  transition: { delay: 0.2, ease: [0, 0.4, 0, 1] },
                }
          }
          className={`h-0.5 rounded-full bg-white w-10 sm:w-12 ${
            colored ? " bg-white" : "bg-base-content"
          }`}
        ></motion.span>
      </motion.span>
    </motion.div>
  );
};
