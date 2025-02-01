import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";

const FormButton = ({}) => {
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
      <div className="relative flex  flex-row items-stretch justify-center rounded-2xl overflow-hidden  w-full cursor-pointer hover:bg-opacity-50 transition-all duration-300 bg-neutral-content bg-opacity-25 border border-opacity-5 border-base-content">
        <motion.span
          // onClick={() => setShowForm(true)}
          layout="position"
          className="w-full py-6 text-xl font-medium tracking-wide text-center uppercase transition-all duration-300 grow md:py-10 sm:text-2xl lg:text-3xl group-hover:brightness-150"
        >
          Formular de contact
        </motion.span>

        <motion.button
          // onClick={() => setShowForm(!showForm)}
          className="px-8 text-4xl sm:px-10 lg:px-12  flex items-center justify-center sm:text-6xl lg:text-5xl transition-colors duration-300 "
        >
          <BsChevronRight />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FormButton;
