import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { Topic } from "./topics";
import useWidth from "../lib/isMobile.js";

const IMAGES = ["/main1.jpg", "/main2.jpg", "/main3.jpg"];

const Services = () => {
  const isMobile = useWidth();

  const imageRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState(0);

  function changeTopic(topic) {
    setSelectedTopic(topic);
  }

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 0.7", "end start"],
  });
  const customScale = isMobile ? "70%" : "40%";
  const scale = useTransform(scrollYProgress, [0, 0.27], [customScale, "100%"]);

  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["8vw", "1vw"]);
  const rawY = useTransform(scrollYProgress, [0.82, 1], ["0vh", "-8vh"]);
  const y = useSpring(rawY, { stiffness: 100, damping: 8, mass: 0.5 });

  return (
    <section className="relative bottom-0 flex flex-col  sm:h-[250vh]  items-center w-full sm:min-h-screen gap-1 px-4 bg-transparent sm:px-6 md:px-8 lg:px-12 ">
      <motion.div
        initial={{ opacity: 0, y: "30%", scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 3,
          type: "spring",
          mass: 1.4,
          stiffness: 80,
          damping: 30,
        }}
        className="z-10 w-full sm:h-screen grow max-w-7xl"
      >
        <div ref={imageRef} className="sm:sticky sm:top-[70vh] w-full">
          <AnimatePresence mode="wait">
            <motion.img
              style={{ scale, borderRadius, y }}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              src={IMAGES[selectedTopic]}
              key={selectedTopic}
              className="object-cover w-full mx-auto origin-top aspect-video "
            />
          </AnimatePresence>
        </div>
      </motion.div>

      <Topic selectedTopic={selectedTopic} changeTopic={changeTopic} />
    </section>
  );
};

export default Services;
