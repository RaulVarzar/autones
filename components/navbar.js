"use client";
import React, { useState } from "react";
import { Logo } from "./logo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Modal from "./modal";
import Sidebar from "./sidebar";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  // Toggle the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Hide or show the navbar based on scroll direction
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setHidden(latest > previous && latest > 200 ? true : false);
  });

  return (
    <div className="relative ">
      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-120%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex w-full mx-auto fixed  z-40 top-0 inset-0 items-center justify-between py-4 md:py-8 xl:py-12 h-fit max-w-[2000px] px-4 sm:px-6 md:px-12 xl:px-24"
      >
        <Logo />
        <motion.button
          initial={{ opacity: 0, y: "-15px", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
          className="flex flex-row items-center justify-center gap-5 py-4 pl-5 font-normal rounded-full pr-7 bg-base-300"
          onClick={() => setSidebarOpen(true)}
        >
          <div className="p-3 rounded-full bg-neutral bg-opacity-60">
            <FaPhoneAlt />
          </div>

          <span className="font-medium tracking-wide max-sm:hidden">
            CONTACT
          </span>
        </motion.button>

        <Modal />
      </motion.nav>
    </div>
  );
};

export default Navbar;
