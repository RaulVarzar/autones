import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";

const FormButton = ({ onClick }) => {
  return (
    <motion.div
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
      <button
        onClick={onClick}
        className="relative flex flex-row items-stretch justify-center w-full px-4 overflow-hidden transition-all duration-300 border shadow-sm cursor-pointer hover:shadow-none bg-neutral-content text-base-content hover:text-base-30 rounded-2xl hover:bg-secondary "
      >
        <motion.span className="w-full py-6 text-xl font-semibold tracking-wide text-center grow md:py-10 sm:text-2xl lg:text-3xl 2xl:text-4xl group-hover:brightness-150">
          Formular de contact
        </motion.span>

        <span className="flex items-center justify-center px-1 text-4xl sm:px-10 lg:px-12 sm:text-6xl lg:text-5xl ">
          <BsChevronRight />
        </span>
      </button>
    </motion.div>
  );
};

export default FormButton;
