import { AnimatePresence, motion } from "framer-motion";
import Form from "./form";
import { BsChevronRight } from "react-icons/bs";
import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const FormButton = ({ showForm, setShowForm }) => {
  const submitRef = useRef();
  return (
    <motion.div
      layout
      initial={{ y: 100, opacity: 0 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.7,
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      className={`relative group z-[100]  overflow-hidden w-full px-8 py-6   `}
    >
      {showForm && <Form submitRef={submitRef} />}

      <motion.div
        layout
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className={`relative flex  flex-row items-stretch justify-center rounded-2xl overflow-hidden  w-full cursor-pointer ${
          !showForm
            ? "  transition-colors duration-300 hover:bg-secondary bg-base-300"
            : "bg-base-300 "
        }`}
      >
        {!showForm && (
          <motion.span
            onClick={() => setShowForm(true)}
            layout="position"
            className="w-full py-6 text-xl font-medium tracking-wide text-center uppercase transition-all duration-300 grow md:py-10 sm:text-2xl lg:text-3xl group-hover:brightness-150"
          >
            Formular de contact
          </motion.span>
        )}
        {showForm && (
          <motion.button
            onClick={() => submitRef.current.click()}
            layout
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="relative flex flex-row items-center justify-center w-full gap-2 transition-colors duration-300 cursor-pointer sm:gap-6 hover:bg-primary"
          >
            <motion.span
              layout="position"
              className="py-10 text-xl font-medium tracking-wide text-center uppercase transition-all duration-300 md:py-12 sm:text-2xl lg:text-3xl group-hover:brightness-150"
            >
              Trimite
            </motion.span>
          </motion.button>
        )}
        <motion.button
          onClick={() => setShowForm(!showForm)}
          className={`px-8 text-4xl sm:px-10 lg:px-12  flex items-center justify-center sm:text-6xl lg:text-5xl transition-colors duration-300 ${
            showForm && "hover:bg-error"
          }`}
        >
          {showForm ? <MdCancel /> : <BsChevronRight />}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FormButton;
