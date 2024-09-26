import { useState } from "react";
import Contact from "./form";
import ModalActions from "./modal-actions";
import { motion, AnimatePresence } from "framer-motion";

const Modal = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <dialog id="my_modal_1" className="modal">
      <motion.div
        layout
        className=" modal-box rounded-2xl md:p-8 lg:py-10 lg:px-16 bg-accent w-fit max-w-7xl"
      >
        {!showForm && (
          <AnimatePresence>
            <ModalActions buttonAction={() => setShowForm(true)} />
          </AnimatePresence>
        )}
        {showForm && (
          <AnimatePresence key={showForm}>
            <motion.div key={showForm} layout>
              <Contact buttonAction={() => setShowForm(false)} />
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      <form
        method="dialog"
        className="transition duration-500 bg-base-100 backdrop-blur-sm bg-opacity-30 modal-backdrop"
      >
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
