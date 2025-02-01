import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InfiniteText from "../infiniteText/InfiniteText";

const Title = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { amount: 0.5 });

  return (
    <div className="  flex items-end  justify-center h-full">
      <motion.div
        ref={ref}
        className=" w-full outline-text-4 h-64 flex m-0 p-0 relative opacity-15"
      >
        <InfiniteText visible={visible} text="Contact" margin={16} />
      </motion.div>
    </div>
  );
};

export default Title;
