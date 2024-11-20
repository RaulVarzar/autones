import { AnimatePresence, motion } from "framer-motion";
import Form from "./form";
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
      className={`relative group z-[100]  overflow-hidden w-full bg-primary  ${
        !showForm
          ? "  transition-colors duration-300 hover:bg-secondary"
          : " bg-secondary"
      }`}
    >
      <motion.button
        onClick={() => setShowForm(!showForm)}
        layout
        className="relative flex flex-row items-center justify-center w-full cursor-pointer"
      >
        <motion.span
          layout="position"
          className="w-full py-10 text-xl font-medium tracking-wide text-center uppercase transition-all duration-300 grow md:py-12 sm:text-2xl lg:text-3xl group-hover:brightness-150"
        >
          Trimite-ne un mesaj
        </motion.span>

        <motion.span
          animate={showForm ? { rotate: 90 } : { rotate: 0 }}
          className="px-8 text-4xl sm:px-10 lg:px-12 sm:text-6xl lg:text-5xl"
        >
          <BsChevronRight />
        </motion.span>
      </motion.button>

      {showForm && <Form />}
    </motion.div>
  );
};

export default FormButton;
