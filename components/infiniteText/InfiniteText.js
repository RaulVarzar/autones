import "./infinite.css";
import { motion } from "framer-motion";

const InfiniteText = ({ text }) => {
  return (
    <div className="m-0 whitespace-nowrap">
      <div className={`flex  font-bold RightToLeft text-xxxl kanit`}>
        <p className="mx-[7vw]">{text}</p>
        <p className="mx-[7vw]">{text}</p>
        <p className="mx-[7vw]">{text}</p>
        <p className="mx-[7vw]">{text}</p>
        <p className="mx-[7vw]">{text}</p>
        <p className="mx-[7vw]">{text}</p>
        <p className="mx-[7vw]">{text}</p>
        <p className="mx-[7vw]">{text}</p>
      </div>
    </div>
  );
};

export default InfiniteText;
