import { AnimatePresence, motion } from "framer-motion";
import Form from "./form";
import { MdOutlineMessage } from "react-icons/md";

const FormButton = ({ showForm, setShowForm }) => {
  return (
    <motion.div
      layout
      initial={{ x: 50, opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.52,
          type: "spring",
          duration: 0.8,
          bounce: 0.3,
        },
      }}
      style={{ borderRadius: "12px" }}
      className={`max-w-2xl relative group overflow-hidden w-full grow  ${
        !showForm
          ? " bg-neutral-content hover:bg-accent-content transition-colors duration-300"
          : " bg-accent-content"
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
            <MdOutlineMessage />
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
