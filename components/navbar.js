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
        className="flex w-full mx-auto fixed  z-20 top-0 inset-0 items-center justify-between py-4 md:py-8 xl:py-12 h-fit max-w-[2000px] px-5 sm:px-6 md:px-12 xl:px-24"
      >
        <Logo />
        <motion.button
          initial={{ opacity: 0, y: "-15px", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
          className="gap-4 px-6 font-normal rounded-full sm:px-8 btn sm:btn-lg btn-outline"
          onClick={() => setSidebarOpen(true)}
        >
          <FaPhoneAlt /> CONTACT
        </motion.button>

        <Modal />
      </motion.nav>
    </div>
  );
};

export default Navbar;
