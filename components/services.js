"use client";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
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
  const customScale = isMobile ? "70%" : "60%";
  const scale = useTransform(scrollYProgress, [0, 0.3], [customScale, "100%"]);

  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["8vw", "1vw"]);
  const rawY = useTransform(scrollYProgress, [0, 0.3], ["30vh", "0vh"]);
  const y = useSpring(rawY, { stiffness: 100, damping: 8, mass: 0.5 });

  const clipPath1 = useTransform(scrollYProgress, [0, 0.35], [15, 0]);
  const clipPath2 = useTransform(scrollYProgress, [0, 0.35], [85, 100]);

  const clipPath = useMotionTemplate`polygon(${clipPath1}% 0, ${clipPath2}% 0, ${clipPath2}% 100%, ${clipPath1}% 100%)`;

  return (
    <section className="relative flex flex-col items-center w-full px-4 bg-transparent sm:min-h-fit sm:px-6 md:px-8 lg:px-12 ">
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
        className="z-10 w-full overflow-hidden max-w-8xl grow"
      >
        <motion.div
          style={{ scale, borderRadius, y }}
          ref={imageRef}
          className="w-full overflow-hidden origin-top"
        >
          <AnimatePresence mode="popLayout">
            <motion.img
              // style={{ scale, borderRadius, y }}
              initial={{ opacity: 0.4, y: "-100%" }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: [0.13, 0.97, 0.665, 0.985],
                },
              }}
              exit={{
                filter: "blur(10px) brightness(70%)",
                y: "8%",
                scale: 1.02,
                transition: {
                  delay: 0.05,
                  duration: 0.95,
                  ease: [0.13, 0.97, 0.665, 0.985],
                },
              }}
              src={IMAGES[selectedTopic]}
              key={selectedTopic}
              className="object-cover w-full mx-auto origin-top aspect-video "
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <Topic selectedTopic={selectedTopic} changeTopic={changeTopic} />
    </section>
  );
};

export default Services;
