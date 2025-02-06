import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";

const FormButton = ({ onClick }) => {
  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        ease: [0.45, 0.1, 0.25, 1],
        duration: 0.2,
        delay: 0,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.45, 0.1, 0.25, 1],
        duration: 0.6,
        delay: 0.7,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="relative w-full px-8 py-6 overflow-hidden group"
    >
      <button
        onClick={onClick}
        className="relative flex flex-row items-stretch justify-center w-full px-4 overflow-hidden transition-all duration-300 shadow-sm cursor-pointer hover:shadow-none bg-neutral-content text-base-content hover:text-base-30 rounded-2xl hover:bg-secondary "
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.75 } }}
          className="w-full py-6 text-xl font-semibold tracking-wide text-center grow md:py-10 sm:text-2xl lg:text-3xl 2xl:text-4xl group-hover:brightness-150"
        >
          Formular de contact
        </motion.span>

        <span className="flex items-center justify-center px-1 text-3xl sm:px-10 lg:px-12 sm:text-4xl lg:text-5xl ">
          <BiMessageDots />
        </span>
      </button>
    </motion.div>
  );
};

export default FormButton;
