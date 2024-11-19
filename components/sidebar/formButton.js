import { AnimatePresence, motion } from "framer-motion";
import Form from "./form";
import { MdOutlineMessage } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";

const FormButton = ({ showForm, setShowForm }) => {
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
      style={{ backdropFilter: "brightness(120%)" }}
      whileHover={!showForm && { backdropFilter: "brightness(160%)" }}
      className={` relative group overflow-hidden w-full  bg-accent ${
        !showForm ? "  transition-colors duration-300" : " "
      }`}
    >
      <AnimatePresence mode="popLayout">
        {!showForm && (
          <motion.div
            layout="position"
            onClick={() => setShowForm(true)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              type: "spring",
              damping: 8,
              mass: 0.3,
            }}
            layoutId="form"
            className="relative flex flex-row items-center justify-center cursor-pointer "
          >
            <span className="w-full py-10 text-xl font-medium tracking-wide text-center uppercase transition-all duration-300 border-r border-opacity-40 border-base-content grow md:py-12 sm:text-2xl lg:text-3xl group-hover:brightness-150">
              Trimite-ne un mesaj
            </span>

            <span className="px-8 text-4xl sm:px-10 lg:px-12 sm:text-6xl lg:text-5xl">
              <BsChevronRight />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {showForm && <Form closeForm={() => setShowForm(false)} />}
    </motion.div>
  );
};

export default FormButton;
