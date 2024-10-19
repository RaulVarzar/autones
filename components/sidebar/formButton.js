import { AnimatePresence, motion } from "framer-motion";
import Form from "./form";
import { MdOutlineMessage } from "react-icons/md";

const FormButton = ({ showForm, setShowForm }) => {
  return (
    <motion.div
      layout
      initial={{ x: 100, opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.7,
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      style={{ backdropFilter: "brightness(120%)", borderRadius: "10px" }}
      whileHover={!showForm && { backdropFilter: "brightness(160%)" }}
      className={`max-w-2xl relative group overflow-hidden w-full grow rounded-xl ${
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
            className="relative flex flex-row items-center justify-center gap-2 px-4 py-6 cursor-pointer md:px-8 lg:px-12 md:py-12 sm:gap-4 "
          >
            <span className="text-3xl">
              <MdOutlineMessage />
            </span>
            <span className="text-xl font-medium transition-opacity sm:text-2xl lg:text-3xl opacity-70 group-hover:opacity-100">
              Trimite-ne un mesaj
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {showForm && <Form closeForm={() => setShowForm(false)} />}
    </motion.div>
  );
};

export default FormButton;
