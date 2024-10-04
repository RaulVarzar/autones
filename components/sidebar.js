"use client";
import { motion, AnimatePresence } from "framer-motion";
import ModalActions from "./modal-actions";

const variants = {
  hidden: {
    opacity: 1,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: { type: "spring", damping: 15, mass: "0.5", stiffness: "180" },
  },
};

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 h-full z-50 w-full transition-all bg-black bg-opacity-80  backdrop-blur-md  backdrop-contrast-75`}
            onClick={closeSidebar}
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial="hidden"
        layout
        variants={variants}
        animate={isOpen ? "visible" : "hidden"}
        className="fixed top-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen px-8 text-3xl font-black bg-base-200 sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl sm:px-12 lg:px-16 text-base-content "
      >
        <ModalActions />
      </motion.div>
    </>
  );
};

export default Sidebar;
