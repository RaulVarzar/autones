"use client";
import React, { useState } from "react";
import { Logo } from "./logo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Sidebar from "./sidebar/sidebar";
import SidebarToggle from "./SidebarToggle";

const Navbar = () => {
  // Toggle the sidebar

  // Hide or show the navbar based on scroll direction
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setHidden(latest > previous && latest > 200000 ? true : false);
  });

  return (
    <div className="relative ">
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-120%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-0 top-0 z-40 flex items-start justify-between w-full px-4 py-4 mx-auto md:py-8 xl:py-12 h-fit sm:px-6 md:px-10 xl:px-16"
      >
        <Logo />
        <SidebarToggle />
      </motion.nav>
    </div>
  );
};

export default Navbar;
