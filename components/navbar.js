import React from "react";
import { Logo } from "./logo";
import { motion } from "framer-motion";
import Modal from "./modal";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between py-4 md:py-8 xl:py-12 h-fit max-w-[2000px] px-8 md:px-12 xl:px-24">
      <Logo />
      <motion.button
        initial={{ opacity: 0, y: "-15px", scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
        className="px-8 font-normal rounded-full btn btn-lg btn-outline"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <i className="pr-3 fa-solid fa-phone"></i> CONTACT
      </motion.button>

      <Modal />

      {/* <dialog
        id="my_modal_1"
        className="bg-opacity-40 modal backdrop-blur-md bg-base-100"
      >
        <div className="modal-box rounded-xl bg-base-200 w-fit max-w-7xl">
          
        </div>
      </dialog> */}
    </div>
  );
};

export default Navbar;
