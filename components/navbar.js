"use client";
import React, { useState } from "react";
import { Logo } from "./logo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Modal from "./modal";
import Sidebar from "./sidebar";
import Navlinks from "./navlinks";

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
        className="fixed inset-0 top-0 z-40 flex items-center justify-between w-full px-4 py-4 mx-auto md:py-8 xl:py-12 h-fit sm:px-6 md:px-12 xl:px-24"
      >
        <Logo />

        <Navlinks openSidebar={() => setSidebarOpen(true)} />

        <Modal />
      </motion.nav>
    </div>
  );
};

export default Navbar;
