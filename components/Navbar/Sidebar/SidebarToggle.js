"use client";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import SidebarContent from "./SidebarContent";

const SidebarToggle = ({}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((current) => !current);

  return (
    <>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.45, delay: 0.5 } }}
            onClick={toggleSidebar}
            className="fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-lg"
          />
        )}
      </AnimatePresence>
      <motion.div className="overflow-hidden font-normal">
        <Button toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      </motion.div>

      <SidebarContent
        visible={sidebarOpen}
        closeNavbar={() => toggleSidebar()}
      />
    </>
  );
};

export default SidebarToggle;

const Button = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <motion.div
      onClick={toggleSidebar}
      className="relative z-50 flex flex-row items-center justify-end h-full gap-2 px-5 py-5 translate-x-5 cursor-pointer md:gap-4 w-fit xl:gap-8 sm:px-8 text-base-content"
    >
      <motion.span
        style={sidebarOpen && { opacity: 0.7 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { duration: 0.8, delay: 0.8 } }}
        className="z-20 flex flex-col items-end h-full gap-2 text-2xl transition-opacity duration-500 cursor-pointer sm:text-3xl"
      >
        <motion.span
          animate={
            sidebarOpen
              ? {
                  rotate: 45,
                  y: 5,
                  transition: {
                    delay: 0.1,
                    duration: 0.5,
                    ease: [0.7, 0, 0.3, 1],
                  },
                }
              : {
                  rotate: 0,
                  y: 0,

                  transition: {
                    delay: 0,
                    duration: 0.4,
                    ease: [0.7, 0, 0.3, 1],
                  },
                }
          }
          className="w-10 sm:w-12 h-0.5 rounded-full  bg-base-content "
        ></motion.span>
        <motion.span
          animate={
            sidebarOpen
              ? {
                  rotate: -45,
                  y: -5,
                  x: "0%",
                  scaleX: 1,
                  transition: {
                    delay: 0.1,
                    duration: 0.5,
                    ease: [0.7, 0, 0.3, 1],
                  },
                }
              : {
                  rotate: 0,
                  scaleX: 0.8,
                  x: "10%",
                  y: 0,
                  transition: {
                    delay: 0,
                    duration: 0.4,
                    ease: [0.7, 0, 0.3, 1],
                  },
                }
          }
          className={"h-0.5 rounded-full  w-10 sm:w-12 bg-base-content "}
        ></motion.span>
      </motion.span>
    </motion.div>
  );
};
