import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      onMouseDown={() => console.log("mouse down")}
      onMouseLeave={() => console.log("mouse up")}
      className="flex-none h-72 bg-base-200 w-[450px] rounded-2xl border border-neutral-content border-opacity-80"
    ></motion.div>
  );
};

export default Card;
