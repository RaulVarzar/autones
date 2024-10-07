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
    offset: ["0.35 end", "start"],
  });

  const photoScale = useTransform(scrollYProgress, [0, 0.55], ["40%", "100%"]);
  const y = useTransform(scrollYProgress, [0.2, 1], ["50%", "35%"]);

  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["35vh", "0vh"]);

  return (
    <section
      ref={imageRef}
      className="relative  flex flex-col items-center w-full min-h-screen pt-[8vh] gap-1 px-4 bg-transparent sm:px-6 md:px-8 lg:px-12 "
    >
      <motion.div
        initial={{ opacity: 0, y: "30%", scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
        className="z-10 w-full overflow-hidden rounded-3xl max-w-7xl"
      >
        <motion.img
          style={{ borderRadius, scale: photoScale }}
          src={IMAGES[selectedTopic]}
          className="object-cover w-full mx-auto origin-top max-w-7xl aspect-video"
        />
      </motion.div>

      <Topic selectedTopic={selectedTopic} changeTopic={changeTopic} />
      <div className="absolute inset-0 w-full h-full bg-base-100 -z-10"></div>
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full bg-base-100 -z-10"
      ></motion.div>
    </section>
  );
};

export default Services;
