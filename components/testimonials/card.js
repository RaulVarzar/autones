import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      onMouseDown={() => console.log("mouse down")}
      onMouseLeave={() => console.log("mouse up")}
      className="flex-none h-72 backdrop-brightness-[120%] w-[450px] rounded-2xl border border-neutral-content border-opacity-60"
    ></motion.div>
  );
};

export default Card;
