import Card from "./card";
import {
  motion,
  useDragControls,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const section = useRef(null);
  const constraintsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end"],
  });
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["15%", "0%", "-50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.25], ["80%", "100%"]);

  const controls = useDragControls();
  return (
    <div ref={section} className="">
      <div className="min-h-[90vh] h-[90vh] sticky top-[5vh]  mr-2 w-fit items-center flex flex-col md:flex-row gap-12 ">
        <div className="">
          <h1 className="text-4xl font-semibold leading-none tracking-wide uppercase opacity-85 max-w-96 text-balance">
            Ce spun
          </h1>
          <h2 className="text-6xl font-bold leading-none uppercase">
            clientii nostri
          </h2>
        </div>
        <motion.div
          //   style={{ scale }}
          ref={constraintsRef}
          className="flex flex-row max-w-6xl gap-16 p-2 overflow-hidden flex-nowrap"
        >
          <motion.div
            // style={{ x }}
            drag="x"
            dragControls={controls}
            dragConstraints={constraintsRef}
            className="flex flex-row gap-16 px-4 cursor-grab active:cursor-grabbing"
          >
            <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
