import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Topic } from "./topics";

const IMAGES = ["/main1.jpg", "/main2.jpg", "/main3.jpg"];

const Services = () => {
  const imageRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState(0);

  function changeTopic(topic) {
    setSelectedTopic(topic);
  }

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 0.75", "start 0.15"],
  });

  const photoScale = useTransform(scrollYProgress, [0, 1], ["40%", "100%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["25vh", "2vh"]);

  return (
    <section className="relative flex flex-col w-full min-h-screen gap-8 px-3 ">
      <motion.div
        initial={{ opacity: 0, y: "30px", scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.85, ease: "easeInOut" }}
        className=""
        ref={imageRef}
      >
        <motion.img
          style={{ borderRadius, scale: photoScale, y: photoY }}
          src={IMAGES[selectedTopic]}
          className="object-cover w-full max-w-6xl mx-auto md:w-8/12 aspect-video"
        />

        {/* <div className="absolute inset-0 border h-1/2"  /> */}
      </motion.div>
      <Topic selectedTopic={selectedTopic} changeTopic={changeTopic} />
    </section>
  );
};

export default Services;
