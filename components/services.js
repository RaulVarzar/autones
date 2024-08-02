import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Topic } from "./topics";

const IMAGES = ["/main1.jpg", "/main2.jpg", "/main3.jpg"];

const Services = () => {
  const ref = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState(0);

  function changeTopic(topic) {
    setSelectedTopic(topic);
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.5"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 16,
    mass: 0.2,
  });

  const photoScale = useTransform(contentSpring, [0, 1], ["30%", "100%"]);
  const photoY = useTransform(contentSpring, [0, 1], ["-75%", "0%"]);
  const borderRadius = useTransform(contentSpring, [0, 1], ["100px", "30px"]);

  return (
    <section ref={ref} className="flex flex-col w-full min-h-screen gap-8 px-3">
      <motion.div
        initial={{ opacity: 0, y: "30px", scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.85, ease: "easeInOut" }}
      >
        <motion.img
          style={{ borderRadius, scale: photoScale, y: photoY }}
          src={IMAGES[selectedTopic]}
          className="mx-auto w-full md:w-8/12 max-w-6xl mt-[2vh] aspect-video object-cover"
        />
      </motion.div>
      <Topic selectedTopic={selectedTopic} changeTopic={changeTopic} />
    </section>
  );
};

export default Services;
