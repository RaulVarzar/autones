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
    offset: ["0.3 end", "start"],
  });

  const photoScale = useTransform(scrollYProgress, [0, 0.6], ["30%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["3vh", "3vh"]);

  return (
    <section
      ref={imageRef}
      className="relative flex flex-col  items-center  w-full min-h-screen pt-[8vh] gap-1 px-4 bg-transparent sm:px-6 md:px-8 lg:px-12 "
    >
      <motion.div
        initial={{ opacity: 0, y: "30%", scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
        className="z-10 w-full overflow-hidden max-w-7xl "
      >
        <motion.img
          style={{ scale: photoScale, borderRadius }}
          src={IMAGES[selectedTopic]}
          className="object-cover w-full mx-auto origin-top max-w-7xl aspect-video"
        />
      </motion.div>

      <Topic selectedTopic={selectedTopic} changeTopic={changeTopic} />
    </section>
  );
};

export default Services;
